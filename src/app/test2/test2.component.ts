import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(firedNumber: number) {
     if (firedNumber % 2 == 0 ) {
       this.evenNumbers.push(firedNumber);
     }else {
      this.oddNumbers.push(firedNumber);
     }
  }

}
