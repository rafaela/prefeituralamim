import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import moment from 'moment';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-diarios',
  imports: [NgFor, FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './diarios.component.html',
  styleUrl: './diarios.component.scss'
})
export class DiariosComponent  implements OnInit{

  data: any = {
    data: {
      code: '',
    },
    skip: 0,
    take: 20,
  };
  diariosList: any = []
  total = 0;

  constructor(private api: ApiService){

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

      console.log(this.diariosList)
      console.log(this.total)
    })
  }




  limpar(){
    this.data.data = {}
  }

}
