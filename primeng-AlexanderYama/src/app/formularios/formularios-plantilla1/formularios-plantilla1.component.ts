import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formularios-plantilla1',
  standalone: true,
  imports: [PasswordModule, InputTextModule, FormsModule],
  templateUrl: './formularios-plantilla1.component.html',
  styleUrl: './formularios-plantilla1.component.css'
})
export class FormulariosPlantilla1Component {
  value: string='';
  user: string='';
}
