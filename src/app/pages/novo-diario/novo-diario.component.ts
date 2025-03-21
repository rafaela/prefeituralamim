import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novo-diario',
  imports: [MenuComponent, FormsModule, CommonModule],
  templateUrl: './novo-diario.component.html',
  styleUrl: './novo-diario.component.scss'
})
export class NovoDiarioComponent implements OnInit {

  data: any = {
    Code: '',
    FileData: null,
    Edition: '',
    Year: '',
    FileUploadDto: {
      File: null
    }
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

    if(this.id != 0){
      this.api.getDiarioByID(this.id).subscribe(data => {
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
    if(this.data.year == '' || this.data.year == null){
      this.ui.error('', 'Informe o ano');
      return false;
    }
    if(this.data.edition == '' || this.data.edition == null){
      this.ui.error('', 'Informe a edição');
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
      if (this.data.FileUploadDto && this.data.FileUploadDto.File) {
        formData.append('FileUploadDto.File', this.data.FileUploadDto.File);
      }
      formData.append('Code', this.data.code || '');
      formData.append('Edition', this.data.edition || '');
      formData.append('Year', this.data.year || '');
      formData.append('Id', this.id || null);


      this.api.createAndUpdateDiario(formData).subscribe((data: any) => {
        this.ui.unblock();
        if(data.sucess){
          if(this.id == null)
            this.ui.sucess('', 'Diário cadastrado')
          else
            this.ui.sucess('', 'Diário atualizado')
          this.router.navigate(['/lista-diario']);
        }
        else{
          this.ui.error('', data.message)
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
    this.router.navigate(['/lista-diario']);
  }

}
