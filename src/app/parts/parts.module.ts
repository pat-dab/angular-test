

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    WelcomeComponent
  ],
  exports: [
    WelcomeComponent
  ]

})
export class PartsModule {
}

