import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ListarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    NgbModalConfig, NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

}
