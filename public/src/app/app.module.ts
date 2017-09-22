import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';

import { routing } from './app.routes';
import { DashboardService } from './dashboard/dashboard.service';
import { Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import {  ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB01G51e3GTU0-E7QCSUpx081I5BezZ20s"
    })
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
