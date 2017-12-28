import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModules } from './common/common.module';
import { MainModule } from './main/main.module';
import { CommonService } from './shared/services/common.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModules,
    MainModule    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
