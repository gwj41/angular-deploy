import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SignupComponent } from './signup/signup.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

export const appRoutes: Routes = [{'path': 'home', component: HomeComponent},
{'path': 'form', component: FormComponent},
{'path': 'reactiveForm', component: SignupComponent},
{'path': 'bootstrap', component: BootstrapComponent},
{'path': '', redirectTo: '/home', pathMatch: 'full'}];
