import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class ObservableService {
   // activatedEmitter = new EventEmitter<boolean>();
   activatedEmitter = new Subject<Boolean>();
}