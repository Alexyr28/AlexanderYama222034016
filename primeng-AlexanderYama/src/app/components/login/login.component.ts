import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, ButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  
  loginForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      usuario: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
}
