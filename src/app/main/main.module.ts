import { NgModule } from '@angular/core';
import { CompanyModule } from './company/copmany.module';
import { MainRoutingModule } from './main.routing.module';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent
  ],
  imports: [
    CompanyModule,
    MainRoutingModule,
    CommonModule
  ],
  exports:[
    MainComponent    
]

})
export class MainModule {

  constructor() {

  }

}
