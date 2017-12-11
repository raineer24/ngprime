import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MenuModule, PanelModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';


const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    MenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
       ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
