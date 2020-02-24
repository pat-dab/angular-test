

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddsDetailComponent} from './adds-detail/adds-detail.component';
import {AddsListComponent} from './adds-list/adds-list.component';
import {AddsEditComponent} from './adds-edit/adds-edit.component';
import {AddsAddComponent} from './adds-add/adds-add.component';

const addsRoutes: Routes = [
  {path: 'adds', component: AddsListComponent},
  {path: 'adds/add', component: AddsAddComponent},
  {path: 'adds/:id', component: AddsDetailComponent},
  {path: 'adds/:id/edit', component: AddsEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(addsRoutes)],
  exports: [RouterModule]
})

export class AddsRoutingModule {
}
