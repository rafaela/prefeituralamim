import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '';

  constructor(private http: HttpClient, private router: Router) { 
    this.apiUrl = `${environment.ApiUrl}`
  }

  getDiarios(data: any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/Diario/diarios`, data);
  }

  getDiarioByID(id: any) :  Observable<any>{
    return this.http.get(`${this.apiUrl}/diarios/`+ id, id);
  }
}
