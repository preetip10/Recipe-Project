import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  @ViewChild('f', { static: true }) signUpForm: NgForm;
  defaultSelectValue = "pet";
  answer = '';
  genders = [ 'male', 'female' ];
  user = {
    username:'',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {console.log(this.submitted);
    const suggestedName = 'Super User';
    /*this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'female'
    });*/
    this.signUpForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit1() {
    //console.log(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.questionAnswer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }

}
