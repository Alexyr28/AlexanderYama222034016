import { Component, OnInit } from '@angular/core';
import { FormPrincipalComponent } from "../form-principal/form-principal.component";
import { FormGerenteComponent } from "../form-gerente/form-gerente.component";
import { FormLicenciaComponent } from "../form-licencia/form-licencia.component";
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormPrincipalComponent, FormGerenteComponent, FormLicenciaComponent, ButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  formPrincipal: FormGroup;
  formGerente: FormGroup;
  formLicencia: FormGroup;
  
  constructor(private fb: FormBuilder){
    this.formPrincipal = this.fb.group({
      name: ['', Validators.required],
      apelli: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
    this.formGerente = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]]
    });
    this.formLicencia = this.fb.group({
      inicio: ['',Validators.required],
      fin: ['',Validators.required],
      text: ['',Validators.required]
    });
  }
  onSubmit() {
    if(this.formPrincipal.valid && this.formGerente.valid && this.formLicencia.valid){
      console.log("Form Principal:", this.formPrincipal.value);
      console.log("Form Gerente:", this.formGerente.value);
      console.log("Form Licencia:", this.formLicencia.value);
    }else{
      console.log('Formulario Invalido')
    }
  }
}
