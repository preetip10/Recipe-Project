import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  numbers = [1,2,3,4,5,6,7,8];
  oddNumbers = [1,3,5,7];
  evenNumbers = [2,4,6,8];
  onlyOdd = false;

  value = 10; //ngSwitch

  constructor() { }

  ngOnInit() {
  }

}
