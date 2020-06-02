import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Chris'}
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
