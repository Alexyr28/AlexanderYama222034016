import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-other-form-cb',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,CheckboxModule,ButtonModule,RadioButtonModule,InputTextareaModule],
  templateUrl: './other-form-cb.component.html',
  styleUrl: './other-form-cb.component.css'
})
export class OtherFormCbComponent {
  opciones: {label: string; value: string}[]=[
    {label:'Opcion 1', value: 'Opcion 1'},
    {label:'Opcion 2', value: 'Opcion 2'},
    {label:'Opcion 3', value: 'Opcion 3'},
  ];

  opcionesrb: {label: string; value: string}[]=[
    {label:'Opcion A', value: 'Opcion A'},
    {label:'Opcion B', value: 'Opcion B'},
    {label:'Opcion C', value: 'Opcion C'},
  ];

  checkboxForm: FormGroup;
  radiobuttonForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.checkboxForm = this.fb.group({
      seleccion: [[]]
    });

    this.radiobuttonForm = this.fb.group({
      seleccion: ['']
    });
  }

  onSubmit(){
    console.log(this.checkboxForm.value)
    console.log(this.radiobuttonForm.value)
  }
}
