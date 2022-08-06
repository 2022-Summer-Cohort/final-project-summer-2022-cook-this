package WCCI.FinalProject.CookThis.controller;

import WCCI.FinalProject.CookThis.model.Ingredient;
import WCCI.FinalProject.CookThis.model.Recipe;
import WCCI.FinalProject.CookThis.repository.IngredientRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.web.bind.annotation.*;

@RestController
public class IngredientController {
    private IngredientRepo ingredientRepo;

    private RecipeRepo recipeRepo;

    public IngredientController(IngredientRepo ingredientRepo, RecipeRepo recipeRepo) {
        this.ingredientRepo = ingredientRepo;
        this.recipeRepo = recipeRepo;
    }

    @GetMapping("api/ingredients")
    public Iterable<Ingredient> getAllIngredients() {
        return ingredientRepo.findAll();
    }

    @GetMapping("api/ingredients/{id}")
    public Ingredient getIngredientById(@PathVariable Long Id) {
        return ingredientRepo.findById(Id).get();
    }
    @PostMapping("api/recipes/{id}/addIngredient")
    public Recipe recipeToAddIngredient(@RequestBody Ingredient newIngredient , @PathVariable Long id) {
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.addIngredient(newIngredient);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }

    @PatchMapping("api/recipes/{id}/deleteIngredients")
    public Recipe recipeDeleteIngredients (@PathVariable Long id){
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.deleteIngredients();
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
}

