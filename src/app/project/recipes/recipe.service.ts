import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingrediant } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable()
export class RecipeService { 
  recipesChnged = new Subject<Recipe[]>();
  
  recipes: Recipe[] = [
    new Recipe( 
      'Cake Recipe', 
      'Cake Recipe is very simeple and it will take only 30 minutes, try it and enjoy', 
      'https://www.goodfood.com.au/content/dam/images/h/1/d/w/n/9/image.related.wideLandscape.940x529.h1fgxq.png/1560827310823.jpg',
      [
        new Ingrediant( 'flour', 2),
        new Ingrediant( 'butter', 1),
        new Ingrediant( 'egg', 2),
        new Ingrediant( 'sugar', 2)
      ]),
    new Recipe( 
      'Pasta Recipe', 
      'A very simple recipe you can further chicken or egg to make it more flavourful', 
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg', 
      [
        new Ingrediant( 'Pasta', 1),
        new Ingrediant( 'spinach', 1),
        new Ingrediant( 'cheese', 2)
      ])
  ];

  constructor( private slService: ShoppingListService ) {}

  getRecipes() {
    return this.recipes.slice();
  }
  
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngrediantsToShoppingList(ingredients: Ingrediant[]) {
    this.slService.addIngredients( ingredients );
  }

  addRecipe( newRecipe: Recipe ) {
    this.recipes.push( newRecipe );
    this.recipesChnged.next(this.recipes.slice());
  }

  updateRecipe( index: number, editRecipe: Recipe ) {
    this.recipes[index] = editRecipe;
    this.recipesChnged.next(this.recipes.slice());
  }

  deleteRecipe( index: number ) {
    this.recipes.splice( index, 1 );
    this.recipesChnged.next(this.recipes.slice());
  }
}
