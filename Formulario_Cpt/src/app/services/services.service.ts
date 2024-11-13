import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiUrl="https://localhost:7083/api/Users";

  constructor(private http: HttpClient) { }

  send(username: string, lastname: string, correo: string, telefono: string, namegerente: string, correogerente: string, fechainicio: string, fechafin: string, notas: string):Observable<any>{
    const body = {username,lastname,correo,telefono,namegerente,correogerente,fechainicio,fechafin,notas};
    return this.http.post(`${this.apiUrl}/send`, body);
  }
}
