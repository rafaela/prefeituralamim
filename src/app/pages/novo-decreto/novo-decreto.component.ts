import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novo-decreto',
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './novo-decreto.component.html',
  styleUrl: './novo-decreto.component.scss'
})
export class NovoDecretoComponent implements OnInit {

  data: any = {
    code: '',
    fileData: null,
    fileName: '',
    fileUploadDto: {
      File: null
    },
    id: null
  };
  diariosList: any = []
  total = 0;
  informouImagem = false;
  id: any;

  constructor(private api: ApiService,  private router: Router, private ui: UiService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params["id"];
    })

    if(this.id != null){
      this.api.getDecretoByID(this.id).subscribe(data => {
        this.ui.unblock();
        this.data = data.data;
      })
    }
    
  }


  validar(){
    if(this.data.code == '' || this.data.code == null){
      this.ui.error('', 'Informe o código');
      return false;
    }

    if(!this.informouImagem && this.id == null){
      this.ui.error('', 'Informe o arquivo');
      return false;
    }
    return true;
  }

  salvar(){

    if(this.validar()){
      this.ui.block();
      
      const formData = new FormData();
      if (this.data.fileUploadDto && this.data.fileUploadDto.File) {
        formData.append('fileUploadDto.file', this.data.fileUploadDto.File);
      }
      formData.append('code', this.data.code || '');
      if(this.id)
        formData.append('id', this.id || '');


      this.api.createAndUpdateDecreto(formData).subscribe((data: any) => {
        this.ui.unblock();
        if(data.result.sucess){
          if(this.id == null)
            this.ui.sucess('', 'Decreto cadastrado')
          else
            this.ui.sucess('', 'Decreto atualizado')
          this.router.navigate(['/lista-decretos']);
        }
        else{
          this.ui.error('', data.result.message)
        }
      })
    }

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.data.fileUploadDto.File = file
      this.informouImagem = true;

    }
  }
  

  cancelar(){
    this.router.navigate(['/lista-decretos']);
  }

}
