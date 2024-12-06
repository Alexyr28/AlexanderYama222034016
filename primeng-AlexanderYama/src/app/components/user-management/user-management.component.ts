import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { response } from 'express';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule, CommonModule, PasswordModule, ButtonModule, MessageModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  updateForm: FormGroup;
  deleteForm: FormGroup;

  succesMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService){
    this.updateForm = this.fb.group({
      userId: ['',Validators.required],
      username: ['',[Validators.required,Validators.minLength(3)]],
      password: ['',[Validators.required,Validators.minLength(6)]],
    });

    this.deleteForm = this.fb.group({
      userId: ['',Validators.required],
    });
  }

  //Metodos
  onUpdate():void{
    if(this.updateForm.valid){
      const {userId,username,password} = this.updateForm.value;
      this.loginService.updateUser(userId,username,password).subscribe({
        next: () => { //Se puede trabajar con if anidados
          this.succesMessage = 'Usuario actualizado con exito';
          this.errorMessage = '';
          this.updateForm.reset();
        },
        error: () => {
          this.errorMessage = 'Hubo un error al actualizar el usuario';
          this.succesMessage = '';
        },
        complete: () => console.log('complete'),
      })
    }
  };

  onDelete(): void{
    if(this.deleteForm.valid){
      const {userId} = this.deleteForm.value;
      this.loginService.deleteUser(userId).subscribe({
        next: () => {
          this.succesMessage = 'Usuario eliminado con exito';
          this.errorMessage = '';
          this.deleteForm.reset();
        },
        error: () => {
          this.errorMessage = 'Hubo un error al eliminar el usuario';
          this.succesMessage = '';
        },
        complete: () => console.log('complete'),
      })                
    }
  }
}
