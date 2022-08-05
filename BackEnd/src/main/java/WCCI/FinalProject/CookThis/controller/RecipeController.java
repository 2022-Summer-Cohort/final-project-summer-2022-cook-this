package WCCI.FinalProject.CookThis.controller;

import WCCI.FinalProject.CookThis.model.Ingredient;
import WCCI.FinalProject.CookThis.model.Recipe;
import WCCI.FinalProject.CookThis.model.Review;
import WCCI.FinalProject.CookThis.model.Step;
import WCCI.FinalProject.CookThis.repository.CategoryRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.web.bind.annotation.*;


public class RecipeController {
    private CategoryRepo categoryRepo;
    private RecipeRepo recipeRepo;

    public RecipeController(CategoryRepo categoryRepo, RecipeRepo recipeRepo) {
        this.categoryRepo = categoryRepo;
        this.recipeRepo = recipeRepo;
    }

    @GetMapping("api/recipes")
    public Iterable<Recipe> getAllCategories(){
        return recipeRepo.findAll();
    }

    @GetMapping("api/recipes/{id}")
    public Recipe getCategoryById(@PathVariable Long Id){
        return recipeRepo.findById(Id).get();
    }

    @PostMapping("api/recipes/{id}/addComments")
    public Recipe recipeToAddCommentTo(@RequestBody Review newComment, @PathVariable Long id) {
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.addComments(newComment);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
    @PatchMapping("api/recipes/{id}/deleteComments")
    public Recipe recipeDeleteComments (@PathVariable Long id){
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.deleteComments();
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }


    @PostMapping("api/recipes/{id}/addSteps")
    public Recipe recipeToAddStep(@RequestBody  Step newStep , @PathVariable Long id) {
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.addStep(newStep);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
    @PatchMapping("api/recipes/{id}/deleteSteps")
    public Recipe recipeDeleteSteps (@PathVariable Long id){
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.deleteSteps();
        recipeRepo.save(recipeToChange);
        return recipeToChange;
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

    @PostMapping("/api/recipe")
    public Recipe addRecipe(@RequestBody Recipe recipeToAdd) {
        recipeRepo.save(recipeToAdd);
        return recipeToAdd;
    }
    @PatchMapping("api/recipe/{id}/name")
    public Recipe recipeChangeName (@RequestBody String newName,@PathVariable Long id){
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.changeName(newName);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
    @DeleteMapping("api/recipes/{id}")
    public Iterable<Recipe> deleteRecipeById(@PathVariable Long id) {
        recipeRepo.deleteById(id);
        return recipeRepo.findAll();
    }

}