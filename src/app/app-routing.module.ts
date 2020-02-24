
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './parts/welcome/welcome.component';

const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
