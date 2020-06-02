import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 @Input('srvElement') element: {type: string, name: string, content: string}; //(type deffination)typescript syntax for defining the type the element can only have this type.
  
  constructor() { }

  ngOnInit() {
  }

}
