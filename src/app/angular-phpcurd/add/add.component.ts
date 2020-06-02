import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  studentForm: FormGroup;
  constructor(private studentService: StudentsService) {

  }

  ngOnInit() {
    this.studentForm = new FormGroup ({
      studentFirstName: new FormControl ( null, [ Validators.required, Validators.maxLength(9) ] ),
      studentLasttName: new FormControl ( null, [ Validators.required, Validators.maxLength(12) ]),
      email: new FormControl ( null, Validators.email )
    })
  }
  

  onAdd() {
    this.studentService.addStudent(this.studentForm.value)
    .subscribe(data => {
      console.log(data);
    });
    //console.log(this.studentForm.value);
  }

}
