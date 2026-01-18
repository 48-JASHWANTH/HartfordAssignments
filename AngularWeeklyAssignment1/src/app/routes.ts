import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Details } from './details/details'

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: Details,
        title: 'Details Page'
    }
];

export default routeConfig; 