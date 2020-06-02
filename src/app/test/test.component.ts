import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  serverName: string = 'Test Server';
  servers: string[] = [
    'Test Server'
  ];
  constructor() { }

  onAddServer(serverName: string) {
      this.servers.push(serverName);
      return this.serverName = serverName;
  }

  removeServer(server: string) {
    let index =  this.servers.indexOf(server);
    return this.servers.slice(index, 1);  
  }

  reset() {
    this.serverName = '';
  }

  ngOnInit() {
  }

}
