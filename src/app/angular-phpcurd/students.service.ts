import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students = [
    {
      sid: '',
      fname: '',
      lname: '',
      email: ''
    }
  ]

  constructor( private http: HttpClient ) { }

  getStudents() {
    return this.http.get<Student[]>("http://localhost/angular_phpcurd/index.php?par=list1");
  }

  addStudent(student: Student) {
    return this.http.post("http://localhost/angular_phpcurd/index.php?par=add", student);
  }

  deleleStudent(id: number) {
    type NewType = Student[];

     return this.http.delete<NewType>("http://localhost/angular_phpcurd/delete.php?sId="+id);
  }
}
