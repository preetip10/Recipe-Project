import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  id: number;

  constructor( private router: ActivatedRoute,
               private obService: ObservableService ) { }

  ngOnInit() {
    this.router.params.subscribe( 
      ( params: Params ) => {
        this.id = +params['id'];
      });
  }

  onActivate() {
    //this.obService.activatedEmitter.emit(true);
    this.obService.activatedEmitter.next(true);
  }

}
