import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  students: Student[];
  constructor( private stService: StudentsService ) { }

  ngOnInit() {
    this.stService.getStudents()
    .subscribe( (data: Student[]) => {
      this.students = data;
      //console.log(this.students);
    });
  }

  onDelete(student : Student): void {
    this.stService.deleleStudent(student.sId)
    .subscribe( data => {
        this.students = this.students.filter( u => u !== student );
      });
  }

}

