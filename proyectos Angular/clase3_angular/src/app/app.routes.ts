import { Routes } from '@angular/router';
import { MytestcomponentComponent } from './mytestcomponent/mytestcomponent.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
    {
        path:'',
        component: MytestcomponentComponent
    },
    {
        path:'Servicios',
        component: ServiciosComponent
    }
];
