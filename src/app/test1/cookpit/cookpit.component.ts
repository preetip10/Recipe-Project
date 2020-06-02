import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  //EventEmitter allows you to create your own event.
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();

  //newServerName = '';
  //newServerContent = '';

  @ViewChild('severContentInput', {static: true}) severContentInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.severContentInput.nativeElement.value
    });
  }

  onAddBluprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.severContentInput.nativeElement.value
    });
  }

}
