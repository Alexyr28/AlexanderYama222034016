import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-gerente',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './form-gerente.component.html',
  styleUrl: './form-gerente.component.css'
})
export class FormGerenteComponent {
  @Input() gerenForm: FormGroup;
  

  constructor(private fb: FormBuilder){
    this.gerenForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]]
    })
  }
}
