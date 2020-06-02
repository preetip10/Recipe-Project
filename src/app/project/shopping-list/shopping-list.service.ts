import { Ingrediant } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingrediantsChanged = new Subject<Ingrediant[]>();
  startedEditing = new Subject<number>();

  
  private ingrediants: Ingrediant[] = [
    new Ingrediant( 'Apples', 5),
    new Ingrediant( 'Oranges', 6)
  ];

  getIngrediants() {
      return this.ingrediants.slice();
  }

  getIngrediant(index: number) {
      return this.ingrediants[index];
  }

  addIngrediant(newIngrediant: Ingrediant) {
    this.ingrediants.push(newIngrediant);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  
  updateIngrediant(index: number, newIngrediant: Ingrediant) {
    this.getIngrediants[index] = newIngrediant; //console.log(this.getIngrediants[index]);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  addIngredients(ingrediants: Ingrediant[]) {
    this.ingrediants.push(...ingrediants);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

  deleteIngrediant(index: number) {
    this.ingrediants.splice(index, 1);
    this.ingrediantsChanged.next(this.ingrediants.slice());
  }

}