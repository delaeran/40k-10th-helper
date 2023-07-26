
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDisplayComponent } from './liste-display/liste-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreationArmeeComponent } from './creation-armee/creation-armee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeDisplayComponent,
    AddUnitComponent,
    MainMenuComponent,
    CreationArmeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
