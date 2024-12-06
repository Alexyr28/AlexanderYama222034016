import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  users: any[] = [];
  errorMessage: string = '';

  constructor(private loginService: LoginService){
    this.loadUsers();
  }

  loadUsers(): void{
    this.loginService.getUser().subscribe({
      next: (users) => {
        this.users = users;
      },
      error:() =>{
        this.errorMessage = 'Error al cargar los usuarios';
      }
    })
  }
}