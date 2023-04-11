import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

];


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
