import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyViewComponent } from './company/company-view/company-view.component';


const mainRoutes: Routes = [
  { path: '', component: CompanyViewComponent}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
