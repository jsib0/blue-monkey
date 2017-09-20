import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';


const APP_ROUTES: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'dashboard', component: DashboardComponent}



]

export const routing = RouterModule.forRoot(APP_ROUTES);