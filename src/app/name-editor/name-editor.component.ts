import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html'
})
export class NameEditorComponent {
  constructor(private location: Location) { }

  cancel() {
    this.location.back(); 
  }
}