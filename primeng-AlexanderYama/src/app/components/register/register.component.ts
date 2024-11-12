import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginService } from '../../services/login.service';
import { response } from 'express';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService){
    this.registroForm = this.fb.group({
      username: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
  };

  onSubmit(): void{
    if(this.registroForm.valid){
      const { username, password } = this.registroForm.value;
      this.loginService.register(username, password).subscribe({
        next: (response) => {
          console.log("Usuario registrado Exitosamente",response);
        },
        error: error =>{
          console.log("Error al registrar el usuario", error);
        },
        complete: () =>{
          console.log("Registro completado");
        }
      })
    }
  };
}
