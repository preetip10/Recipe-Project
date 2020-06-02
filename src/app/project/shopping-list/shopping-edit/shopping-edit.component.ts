import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingrediant } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static: false}) slForm: NgForm;
  editMode = false;
  editedIndex: number;
  sub: Subscription;
  edittedIngrediant: Ingrediant;


  constructor( private slService: ShoppingListService ) { }

  ngOnInit() {
    this.sub = this.slService.startedEditing.subscribe(
      (index: number) =>{
        this.editMode = true;
        this.editedIndex = index;
        this.edittedIngrediant = this.slService.getIngrediant(index);
        this.slForm.setValue({
          name: this.edittedIngrediant.name,
          amount: this.edittedIngrediant.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const val = form.value;
    const newIngrediant = new Ingrediant(val.name, val.amount);
    if (this.editMode){ 
      this.slService.updateIngrediant(this.editedIndex, newIngrediant);
    } else {
      this.slService.addIngrediant(newIngrediant);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.slService.deleteIngrediant(this.editedIndex);
    this.onClear();
  }
  
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
