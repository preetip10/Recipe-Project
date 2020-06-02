import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './project/header/header.component';
import { RecipesComponent } from './project/recipes/recipes.component';
import { RecipeDetailComponent } from './project/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './project/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './project/recipes/recipe-list/recipe-item/recipe-item.component';
import { TestComponent } from './test/test.component';
import { CookpitComponent } from './test1/cookpit/cookpit.component';
import { ServerElementComponent } from './test1/server-element/server-element.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { GameControlComponent } from './test2/game-control/game-control.component';
import { OddComponent } from './test2/odd/odd.component';
import { EvenComponent } from './test2/even/even.component';
import { ProjectComponent } from './project/project.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlight } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirecitve } from './directives/unless.directive';
import { DropdownDirective } from './project/shared/dropdown.directive';
import { RainbowDirective } from './directives/rainbow-directive/rainbow-directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { UsersComponent } from './users/users.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InactiveUsersComponent } from './users/inactive-users/inactive-users.component';
import { CounterService } from './users/counter.service';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { ServersComponent } from './routing/servers/servers.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { CustomersComponent } from './routing/customers/customers.component';
import { CustomerComponent } from './routing/customers/customer/customer.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AppRoutingModule1 } from './routing/app-routing.module1';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './project/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './project/recipes/recipe-edit/recipe-edit.component';
import { FormTestComponent } from './form-test/form-test.component';
import { TdformAssignmentComponent } from './tdform-assignment/tdform-assignment.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';
import { ObservablesComponent } from './observables/observables.component';
import { JobComponent } from './observables/job/job.component';
import { CareerComponent } from './observables/career/career.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';
import { AngularPhpcurdComponent } from './angular-phpcurd/angular-phpcurd.component';
import { AddComponent } from './angular-phpcurd/add/add.component';
import { ViewComponent } from './angular-phpcurd/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    TestComponent,
    CookpitComponent,
    ServerElementComponent,
    Test1Component,
    Test2Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ProjectComponent,
    DirectivesComponent,
    BasicHighlight,
    BetterHighlightDirective,
    UnlessDirecitve,
    DropdownDirective,
    RainbowDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    CustomersComponent,
    CustomerComponent,
    PageNotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    FormTestComponent,
    TdformAssignmentComponent,
    ReactiveFormComponent,
    ReactiveFormAssignmentComponent,
    ObservablesComponent,
    JobComponent,
    CareerComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent,
    AngularPhpcurdComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule1,
    AppRoutingModule
  ],
  providers: [AccountsService, LoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
