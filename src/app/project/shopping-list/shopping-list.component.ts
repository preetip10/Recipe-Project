import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediant } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants: Ingrediant[];
  private idChangedSub: Subscription;

  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingrediants = this.slService.getIngrediants();
    this.idChangedSub = this.slService.ingrediantsChanged
      .subscribe(
        (ingrediants: Ingrediant[]) => {
          this.ingrediants = ingrediants;
        }
      )
  }

  onEditItem(index: number) {  
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.idChangedSub.unsubscribe();
  }

}
