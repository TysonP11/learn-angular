import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeClicked = new EventEmitter<Recipe>()

  handleRecipeClicked() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
