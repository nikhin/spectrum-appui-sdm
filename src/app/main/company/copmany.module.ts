import { NgModule } from '@angular/core';

import { CompanyViewComponent } from './company-view/company-view.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [    
    CompanyViewComponent,
    CompanyEditComponent
  ],
  imports: [
    CompanyRoutingModule
  ] 
  
})
export class CompanyModule {

  constructor(){

    
  }

 }
