import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentDetails: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    courseNb: 0,
    gradDate: '',
    studentId: ''
  }

  constructor(private route: ActivatedRoute, private studentService: StudentsService,  private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        var tempId = Number(id);

        if (id) {
          this.studentService.getStudent(tempId).subscribe({
            next: (response) => {
              this.studentDetails = response;
            }
          });
        }
      }
  })
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentDetails.id, this.studentDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['students']);
      }
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['students']);
      }
    })
  }

}
