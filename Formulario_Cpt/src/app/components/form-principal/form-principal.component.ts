import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-principal',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './form-principal.component.html',
  styleUrl: './form-principal.component.css'
})
export class FormPrincipalComponent {
  prinForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.prinForm = this.fb.group({
      name: ['', Validators.required],
      apelli: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      tel: ['', Validators.required]
    })
  }
}
