import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent
  },
  {
    path: 'students',
    component: StudentsListComponent
  },
  {
    path: 'students/add',
    component: AddStudentComponent
  },
  {
    path: 'students/edit/:id',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
