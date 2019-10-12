import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';

const routes : Routes = [

  {path : 'register', component: RegisterComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'category', component: CategoryComponent},
  {path : 'users', component: UsersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
