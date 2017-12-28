import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse/collapse.module';

// application components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [    
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CollapseModule,
    CommonModule
  ],
  exports:[
      HeaderComponent,
      FooterComponent,
      AsideComponent
  ]
})
export class CommonModules {

  constructor(){

    
  }

 }
