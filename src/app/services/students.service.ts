import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseApiUrl: String = "https://1730251-schoolsystem.azurewebsites.net"

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + '/api/students');
  }

  addStudent(addStudentRequest: Student): Observable<Student> {
    //addStudentRequest.id = 0;
    return this.http.post<Student>(this.baseApiUrl + '/api/students', addStudentRequest);
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this.baseApiUrl + '/api/students/' + id);
  }

  updateStudent(id: number, updateStudentRequest: Student): Observable<Student> {
    return this.http.put<Student>(this.baseApiUrl + '/api/students/' + id, updateStudentRequest);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.baseApiUrl + '/api/students/' + id);
  }

}
