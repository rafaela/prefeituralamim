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
    return this.http.get(`${this.apiUrl}/Diario/diarios/`+ id, id);
  }

  createAndUpdateDiario(diario: any) :  Observable<any>{
    return this.http.post(`${this.apiUrl}/Diario/uploaddiario/`, diario);
  }

  deleteDiario(id: any) :  Observable<any>{
    return this.http.delete(`${this.apiUrl}/Diario/removediario/` + id, id);
  }


  getDecretos(data: any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/Decreto/decretos`, data);
  }

  getDecretoByID(id: any) :  Observable<any>{
    return this.http.get(`${this.apiUrl}/Decreto/decretos/`+ id, id);
  }

  createAndUpdateDecreto(diario: any) :  Observable<any>{
    return this.http.post(`${this.apiUrl}/Decreto/uploaddecreto`, diario);
  }

  deleteDecreto(id: any) :  Observable<any>{
    return this.http.delete(`${this.apiUrl}/Decreto/removedecreto/` + id, id);
  }


  getLicitacoes(data: any) : Observable<any>{
    return this.http.post(`${this.apiUrl}/Licitacao/licitacoes`, data);
  }

  getLicitacoesByID(id: any) :  Observable<any>{
    return this.http.get(`${this.apiUrl}/Licitacao/licitacoes/`+ id, id);
  }

  createAndUpdateLicitacoes(diario: any) :  Observable<any>{
    return this.http.post(`${this.apiUrl}/Licitacao/uploadlicitacao`, diario);
  }

  deleteLicitacoes(id: any) :  Observable<any>{
    return this.http.delete(`${this.apiUrl}/Licitacao/removelicitacao/` + id, id);
  }
}
