import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
