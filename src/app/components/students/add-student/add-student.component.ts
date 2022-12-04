import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentRequest: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    courseNb: 0,
    gradDate: '',
    studentId: ''
  }

  constructor(private studentService: StudentsService, private router: Router) {}
  ngOnInit(): void {
    
  }

  addStudent() {
    this.studentService.addStudent(this.addStudentRequest)
    .subscribe({
      next: (student) => {
        this.router.navigate(['students']);
      }
  });
  }

}
