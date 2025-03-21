import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import moment from 'moment';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-diario',
  imports: [MenuComponent, NgFor, FormsModule],
  templateUrl: './lista-diario.component.html',
  styleUrl: './lista-diario.component.scss'
})
export class ListaDiarioComponent  implements OnInit{

  data: any = {
    data: {
      code: '',
    },
    skip: 0,
    take: 20,
  };
  diariosList: any = []
  total = 0;

  id: any;
  constructor(private api: ApiService,  private router: Router, public dialog: MatDialog, private ui: UiService,){

  }

  ngOnInit(): void {
    this.buscaDados();
  }


  buscaDados(){
    this.api.getDiarios(this.data).subscribe(data => {
      this.diariosList = data.data;
      this.total = data.total;

      this.diariosList.forEach((element: any) => {
        element.date = moment(element.date).format("DD/MM/yyyy")
      });

    })
  }

  visualizarArquivo(id: string): void {
    this.diariosList.forEach((element: any) => {
      
      if(element.id == id){
        const fileData = `data:${element.contentType};base64,${element.fileData}`;
        const newTab = window.open();
        if (newTab) {
          newTab.document.title = element.fileName;
          newTab.document.write(
            `<html>
              <head>
                <title>${element.fileName}</title>
              </head>
              <body style="margin:0">
                <iframe src="${fileData}" width="100%" height="100%" style="border: none;"></iframe>
              </body>
            </html>`
          );
        }
      }
    });
    
  }

  baixarArquivo(id: string): void {
    
    this.diariosList.forEach((element: any) => {
      if(element.id == id){
        
        if (element && element.fileData && element.contentType && element.fileName) {
          const base64Data = element.fileData;
          // Converte a string Base64 para um array de bytes (Blob)
          const binaryString = window.atob(base64Data);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);

          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          const blob = new Blob([bytes], { type: element.contentType });

          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = element.fileName;
          link.click();

          URL.revokeObjectURL(link.href); // Limpa o URL criado
        }
      }
    });
        
  }

  delete(id: any, enterAnimationDuration: any, exitAnimationDuration: any){

    this.id = id
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((data: any) =>{
      if(data){
        this.api.deleteDiario(this.id).subscribe((data: any) => {
          if(data.sucess){
            this.ui.sucess('', 'Diário removido')
            this.buscaDados();
          }
          else
            this.ui.error('', data.message)
        })
      }
    });

  }

  

  limpar(){
    this.data.data = {}
  }

  inserir(){
    this.router.navigate(['/cadastro-diario']);
  }


}
