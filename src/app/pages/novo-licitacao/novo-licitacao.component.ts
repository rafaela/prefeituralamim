import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novo-licitacao',
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './novo-licitacao.component.html',
  styleUrl: './novo-licitacao.component.scss'
})
export class NovoLicitacaoComponent implements OnInit {

  data: any = {
    FileData: null,
    processNumber: '',
    subject: '',
    modality: '',
    requestingUnit: '',
    status: 0,
    FileUploadDto: {
      File: null
    }
  };
  total = 0;
  informouImagem = false;
  id: any;

  constructor(private api: ApiService,  private router: Router, private ui: UiService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params["id"];
    })
    if(this.id != null || this.id != undefined){
      this.api.getLicitacoesByID(this.id).subscribe(data => {
        this.ui.unblock();
        this.data = data.data;
      })
    }
    
  }


  validar(){
    if(this.data.processNumber == '' || this.data.processNumber == null){
      this.ui.error('', 'Informe o número do processo.');
      return false;
    }
    if(this.data.subject == '' || this.data.subject == null){
      this.ui.error('', 'Informe o assunto');
      return false;
    }
    if(this.data.modality == '' || this.data.modality == null){
      this.ui.error('', 'Informe a modalidade');
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
      if (this.data.fileUploadDto && this.data.fileUploadDto.file) {
        formData.append('FileUploadDto.File', this.data.fileUploadDto.file);
      }
      formData.append('ProcessNumber', this.data.processNumber || '');
      formData.append('Subject', this.data.subject || '');
      formData.append('Modality', this.data.modality || '');
      formData.append('RequestingUnit', this.data.requestingUnit || '');
      formData.append('Status', this.data.status || '');
      if(this.id){
        formData.append('id', this.id);
      }
        

      this.api.createAndUpdateLicitacoes(formData).subscribe((data: any) => {
        this.ui.unblock();
        if(data.result.sucess){
          if(this.id == null)
            this.ui.sucess('', 'Licitação cadastrada')
          else
            this.ui.sucess('', 'Licitação atualizada')
          this.router.navigate(['/lista-licitacoes']);
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
      this.data.FileUploadDto.File = file
      this.informouImagem = true;

    }
  }
  

  cancelar(){
    this.router.navigate(['/lista-licitacoes']);
  }

}
