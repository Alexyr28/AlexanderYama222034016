import { Component } from '@angular/core';
import { FormPrincipalComponent } from "../form-principal/form-principal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormPrincipalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
