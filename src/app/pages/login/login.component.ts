import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  imports: [ FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit {

  data: any;

  constructor(private api: ApiService,  private router: Router){
  
  }
  
  ngOnInit(): void {
    
  }

  login(){

    this.router.navigate(['/menu']);

  }

}
