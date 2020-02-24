

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddsModule } from './adds/adds.module';
import { PartsModule } from './parts/parts.module';
import { HttpErrorHandler } from './error.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AddsModule,
    PartsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    HttpErrorHandler,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
