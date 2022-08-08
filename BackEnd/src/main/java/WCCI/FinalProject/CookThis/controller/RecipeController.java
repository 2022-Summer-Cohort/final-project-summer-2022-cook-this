package WCCI.FinalProject.CookThis.controller;

// import WCCI.FinalProject.CookThis.model.Ingredient;
import WCCI.FinalProject.CookThis.model.Recipe;
import WCCI.FinalProject.CookThis.model.Review;
import WCCI.FinalProject.CookThis.model.Step;
import WCCI.FinalProject.CookThis.repository.CategoryRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class RecipeController {
    private CategoryRepo categoryRepo;
    private RecipeRepo recipeRepo;

    public RecipeController(CategoryRepo categoryRepo, RecipeRepo recipeRepo) {
        this.categoryRepo = categoryRepo;
        this.recipeRepo = recipeRepo;
    }

    @GetMapping("api/recipes")
    public Iterable<Recipe> getAllRecipes(){
        return recipeRepo.findAll();
    }


    @GetMapping("api/recipes/{id}")
    public Recipe getRecipeById(@PathVariable Long id){
        return recipeRepo.findById(id).get();
    }
    @GetMapping("api/recipes/{id}/steps")
    public Iterable<Step> getStepsByRecipeId(@PathVariable Long id){
        Recipe recipeSteps= recipeRepo.findById(id).get();
        return recipeSteps.getSteps();
    }
//    @GetMapping("api/recipes/{id}/steps")
//    public Iterable<Integer> getStepIndexOf(@PathVariable Long id){
//        Recipe recipeSteps= recipeRepo.findById(id).get();
//        return recipeSteps.getSteps();
//    }

    @PostMapping("api/recipes/{id}/addComment")
    public Recipe recipeToAddCommentTo(@RequestBody Review newComment, @PathVariable Long id) {
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.addComments(newComment);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
//    @PatchMapping("api/recipes/{id}/deleteComments")
//    public Recipe recipeDeleteComments (@PathVariable Long id){
//        Recipe recipeToChange = recipeRepo.findById(id).get();
//        recipeToChange.deleteComments();
//        recipeRepo.save(recipeToChange);
//        return recipeToChange;
//    }


    @PostMapping("api/recipes/{id}/addSteps")
    public Recipe recipeToAddStep(@RequestBody  Step newStep , @PathVariable Long id) {
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.addStep(newStep);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
    @DeleteMapping("api/recipes/{id}/deleteSteps")
    public Recipe recipeDeleteSteps (@PathVariable Long id){
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.deleteSteps();
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }

    @PatchMapping("api/recipes/{id}/deleteSingleStep")
    public Recipe deleteSingleStepByIndex (@PathVariable Long id, @RequestBody Integer stepToDelete){
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.deleteSingleStep(stepToDelete);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }

//    @PostMapping("api/recipes/{id}/addIngredient")
//    public Recipe recipeToAddIngredient(@RequestBody Ingredient newIngredient , @PathVariable Long id) {
//        Recipe recipeToChange = recipeRepo.findById(id).get();
//        recipeToChange.addIngredient(newIngredient);
//        recipeRepo.save(recipeToChange);
//        return recipeToChange;
//    }
//    @PatchMapping("api/recipes/{id}/deleteIngredients")
//    public Recipe recipeDeleteIngredients (@PathVariable Long id){
//        Recipe recipeToChange = recipeRepo.findById(id).get();
//        recipeToChange.deleteIngredients();
//        recipeRepo.save(recipeToChange);
//        return recipeToChange;
//    }

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
    @DeleteMapping("api/recipes/{id}/deleteRecipe")
    public Iterable<Recipe> deleteRecipeById(@PathVariable Long id) {
        recipeRepo.deleteById(id);
        return recipeRepo.findAll();
    }

}