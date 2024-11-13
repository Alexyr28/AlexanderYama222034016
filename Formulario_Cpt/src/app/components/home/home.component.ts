import { Component, OnInit } from '@angular/core';
import { FormPrincipalComponent } from "../form-principal/form-principal.component";
import { FormGerenteComponent } from "../form-gerente/form-gerente.component";
import { FormLicenciaComponent } from "../form-licencia/form-licencia.component";
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services/services.service';
import { response } from 'express';

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
  
  constructor(private fb: FormBuilder, private sendService: ServicesService){
    this.formPrincipal = this.fb.group({
      name: ['', Validators.required],
      apelli: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
    this.formGerente = this.fb.group({
      nameg: ['', Validators.required],
      emailg: ['',[Validators.required, Validators.email]]
    });
    this.formLicencia = this.fb.group({
      inicio: ['',Validators.required],
      fin: ['',Validators.required],
      text: ['',Validators.required]
    });
  }
  onSubmit() {

    const {name,apelli,email,tel} = this.formPrincipal.value;
    const {nameg,emailg} = this.formGerente.value;
    const {inicio,fin,text} = this.formLicencia.value;

    this.sendService.send(name,apelli,email,tel,nameg,emailg,inicio,fin,text).subscribe({
      next: (response) => {
        console.log("Información enviada Exitosamente", response);
      },
      error: error =>{
        console.log("Error al enviar información", error);
      },
      complete:() => {
        console.log("Envío de información completado");
      },
    })

    // if(this.formPrincipal.valid && this.formGerente.valid && this.formLicencia.valid){
    //   console.log("Form Principal:", this.formPrincipal.value);
    //   console.log("Form Gerente:", this.formGerente.value);
    //   console.log("Form Licencia:", this.formLicencia.value);
    // }else{
    //   console.log('Formulario Invalido')
    // }
  }
}
