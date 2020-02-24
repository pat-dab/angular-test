
import { NgModule } from '@angular/core';
import { AddsService } from './adds.service';
import { AddsListComponent } from './adds-list/adds-list.component';
import { AddsDetailComponent } from './adds-detail/adds-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddsAddComponent } from './adds-add/adds-add.component';
import { AddsEditComponent } from './adds-edit/adds-edit.component';
import { AddsRoutingModule } from './adds-routing.module';
import { NameEditorComponent } from '../name-editor/name-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddsRoutingModule,
  ],
  declarations: [
    AddsListComponent,
    AddsDetailComponent,
    AddsEditComponent,
    AddsAddComponent,
    NameEditorComponent
  ],
  providers: [AddsService]

})

export class AddsModule {
}
