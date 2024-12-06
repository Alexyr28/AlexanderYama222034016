import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl="https://localhost:7155/api/Users";

  constructor(private http: HttpClient) { }

  login(username: string, password: string):Observable<any>{
    const body = {username,password};
    return this.http.post(`${this.apiUrl}/login`, {username,password}) //el /login es el metodo del endpoint
  }

  register(username: string, password: string): Observable<any>{
    const body = {username,password};
    return this.http.post(`${this.apiUrl}/register`, {username, password})// el /register es el metodo del endpoint
  }
  
  updateUser(id: string, username: string, password: string): Observable<any>{
    const body = {username, password};
    return this.http.put(`${this.apiUrl}/update/${id}`, body);
  }

  deleteUser(id: string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getUser(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/getusers`);
  }

  //Obtener usuario por su Id
  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getUserById/${userId}`);
  }
}
