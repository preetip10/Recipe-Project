import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor( private route: ActivatedRoute,
               private slService: RecipeService,
               private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        ( params: Params ) => {
          this.id = params['id'];
          this.editMode = params['id'] != null ? true : false;
          this.initForm();
          //console.log(this.editMode);
        }
      );
  }

  private initForm() {
    let recipeIngrediants = new FormArray([]);
    if(this.editMode) {
      this.recipe = this.slService.getRecipe(this.id);
      if ( this.recipe['ingrediants'] ) {
        for( let ingrediant of this.recipe.ingrediants ) {
          recipeIngrediants.push(
            new FormGroup({
              'name': new FormControl( ingrediant.name, Validators.required ),
              'amount': new FormControl(ingrediant.amount, [
                Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl ( (this.editMode) ? this.recipe.name : null, Validators.required ),
      'imagePath': new FormControl( (this.editMode) ? this.recipe.imagePath : null, Validators.required ),
      'description': new FormControl( (this.editMode) ? this.recipe.description : null, Validators.required ),
      'ingrediants': recipeIngrediants
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingrediants')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingrediants')).removeAt(index);
  }

  onClear() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    //console.log(this.recipeForm.value);
    if ( this.editMode ) {
      this.slService.updateRecipe(this.id, this.recipeForm.value );
    } else {
      this.slService.addRecipe( this.recipeForm.value);
    }

    this.onClear();
    
  }

}
