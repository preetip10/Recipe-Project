import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './project/recipes/recipes.component';
import { ShoppingListComponent } from './project/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './project/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './project/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './project/recipes/recipe-edit/recipe-edit.component';
import { ObservablesComponent } from './observables/observables.component';
import { CareerComponent } from './observables/career/career.component';
import { JobComponent } from './observables/job/job.component';
import { AddComponent } from './angular-phpcurd/add/add.component';
import { ViewComponent } from './angular-phpcurd/view/view.component';

const appRoutes: Routes = [  
    //{ path: '', redirectTo: '/recipes', pathMatch: 'full' }, 
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'observables', component: ObservablesComponent, children: [
        { path: 'career', component: CareerComponent },
        { path: 'job/:id', component: JobComponent }
    ]},
    { path: 'add', component: AddComponent },
    { path: 'view', component: ViewComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [ RouterModule ]
})
export class AppRoutingModule {
    
}