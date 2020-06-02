import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableService } from './observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  providers: [ ObservableService ] 
})
export class ObservablesComponent implements OnInit, OnDestroy {
  jobActivate = false;
  actvatedSub: Subscription;

  constructor( private obService: ObservableService ) { }

  ngOnInit() {
    this.actvatedSub = this.obService.activatedEmitter.subscribe(
      ( activateInfo: boolean ) => {
        this.jobActivate = activateInfo;
      } 
    )
  }
  
  ngOnDestroy() {
    this.actvatedSub.unsubscribe();
  }

}
