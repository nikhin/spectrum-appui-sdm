import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyEditComponent } from './company-edit/company-edit.component';

const companyRoutes: Routes = [  
  { path: 'edit', component: CompanyEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(companyRoutes)
  ],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
