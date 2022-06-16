import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsformComponent } from './detailsform/detailsform.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:"detailstable" , component: TableComponent,
  },
  {
    path:"form" , component: DetailsformComponent,
  },
  {
    path:"home", component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
