import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticComponent } from './statistic/statistic.component';

import {MenuModule, PanelModule, ChartModule } from 'primeng/primeng';

import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';

import { MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';


const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    StatisticComponent,
    MyFormComponent,
    MessagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    MenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ChartModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule
       ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
