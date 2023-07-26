import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import {CreationArmeeComponent} from './creation-armee/creation-armee.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'creation-armee', component: CreationArmeeComponent  },
  { path: 'add-unit', component: AddUnitComponent },
  { path: 'main-menu', component: MainMenuComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
