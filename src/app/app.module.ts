import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { NavComponent } from './views/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { NewRecipeComponent } from './views/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './views/edit-recipe/edit-recipe.component';
import { IngredientsComponent } from './views/ingredients/ingredients.component';
import { InstructionsComponent } from './views/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RecipesComponent,
    RecipeComponent,
    NewRecipeComponent,
    EditRecipeComponent,
    IngredientsComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
