import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date (20, 3, 4)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date (20, 3, 5)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date (20, 3, 1)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(19, 3, 8)
    }
  ];
  filteredStatus = '';

  constructor() { }

  ngOnInit() {
  }

  getStatusClasses(server: {'instanceType': string, 'name': string, 'status': string, 'started': Date}) {
    return {
      'list-group-item-success' : server.status == 'stable',
      'list-group-item-warning' : server.status == 'offline',
      'list-group-item-danger' : server.status == 'critical'
    }
  }

}
