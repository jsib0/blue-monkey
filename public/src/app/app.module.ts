import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as $ from 'jquery';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAifWRatmXup7Eli2bx2hnbDSMEaahuAfk"
    })
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
