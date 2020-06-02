import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders=['male','female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chrishs', 'Anna'];
  
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('female'),
      'hobbies' : new FormArray([])
      });

      this.signupForm.setValue({
        'userData': {
          'username': 'Preeti',
          'email': 'preetip10.mishra@gamil.com'
        },
        'gender': 'female',
        'hobbies': []
      });

      this.signupForm.patchValue({
        'userData': {
          'username': 'Preeti Mishra'
        }
      });
    }

    onAddHobby() {
      const conrol = new FormControl(null, [Validators.required]);
      (<FormArray>this.signupForm.get('hobbies')).push(conrol);
      //console.log('hobbies');
    }

    forbiddenNames( controls: FormControl ): {[s:string]: boolean} {
      if(this.forbiddenUsernames.indexOf(controls.value)!== -1){
        return {'nameIsForbidden': true};
      }
      {
        return null;
      }
    }

    submit() {
      console.log(this.signupForm);
      this.signupForm.reset();
    }
  
}
