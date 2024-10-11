import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { TarjeteroComponent } from './components/tarjetero/tarjetero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TarjetaComponent,
    TarjeteroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
