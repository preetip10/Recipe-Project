import { Component, OnInit } from '@angular/core';
import { ShoppingListService }  from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [RecipeService, ShoppingListService]
})
export class ProjectComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
