import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-form-licencia',
  standalone: true,
  imports: [ReactiveFormsModule,DropdownModule,CalendarModule,CommonModule, InputTextareaModule, InputGroupModule,InputGroupAddonModule],
  templateUrl: './form-licencia.component.html',
  styleUrl: './form-licencia.component.css'
})
export class FormLicenciaComponent {
    @Input() licForm: FormGroup;
    value!: string;

    constructor(private fb: FormBuilder){
      this.licForm = this.fb.group({
        inicio: ['',Validators.required],
        fin: ['',Validators.required],
        text: ['',Validators.required]
      })
    }
}
