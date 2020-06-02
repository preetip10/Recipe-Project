import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.route.params
    .subscribe(
      (params: Params) => {
        this.customer.id = +params['id'];
        this.customer.name = params['name'];
      }
    );
  }

}
