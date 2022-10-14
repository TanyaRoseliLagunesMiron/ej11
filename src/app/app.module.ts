import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ElementosModule } from './elementos/elementos.module';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component'

@NgModule({
  declarations: [
    AppComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule,
    ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

