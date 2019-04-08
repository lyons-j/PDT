import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component'

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'upload', component: FileUploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [UsersComponent, CoursesComponent, FileUploadComponent];
