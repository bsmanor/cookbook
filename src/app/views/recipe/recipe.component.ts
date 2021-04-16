import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ingredients = [];

  addIngridient(item: string) {
    this.ingredients.push(item);
  };

  removeIngridient(item: string): void {
    const index = this.ingredients.indexOf(item);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

}
