import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes1: Routes = [
    
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'customers', component: CustomersComponent, children: [
        { path: ':id/:name', component: CustomerComponent }
      ] 
    }, 
    { path: 'servers', component: ServersComponent, children: [
        { path: ':id', component: ServerComponent },
        { path: ':id/edit', component: EditServerComponent }
      ] 
    }  
    //{ path: 'not-found', component: PageNotFoundComponent },
   // { path: '**', redirectTo: '/not-found' }
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes1)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule1 {

}