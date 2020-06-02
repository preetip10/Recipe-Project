import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input()id: number;
  @Input() account: {name: 'string', status: 'string'};

  constructor(private accountService: AccountsService) { }

  onSetTo (status: string) {
    this.accountService.updateStatus(this.id, status)
    //this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }


}
