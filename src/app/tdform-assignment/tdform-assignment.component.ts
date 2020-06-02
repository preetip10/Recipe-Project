import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform-assignment',
  templateUrl: './tdform-assignment.component.html',
  styleUrls: ['./tdform-assignment.component.css']
})
export class TdformAssignmentComponent implements OnInit {
  options=['basic', 'advanced', 'pro'];
  selectedOption='basic';
  @ViewChild('f', { static: true }) singupForm: NgForm;
  submitted=false;
  emailForm={
    email:'',
    option:'',
    password:''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
    this.submitted=true;
    this.emailForm.email=this.singupForm.value.email;
    this.emailForm.option=this.singupForm.value.options;
    this.emailForm.password=this.singupForm.value.password;
    console.log(this.singupForm);
  }

}
