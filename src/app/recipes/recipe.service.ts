import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super tasty schnitzel',
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Another test recipe', 
            'A simple burger',
            'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 2)
            ]
        )
    ]

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredientsFromRecipe(ingredients)
    }
    
}