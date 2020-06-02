import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers/servers.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
  providers: [ServersService]
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
