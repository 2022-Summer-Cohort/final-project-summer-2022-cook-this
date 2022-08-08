package WCCI.FinalProject.CookThis.controller;

import WCCI.FinalProject.CookThis.model.Ingredient;
import WCCI.FinalProject.CookThis.model.Measurement;
import WCCI.FinalProject.CookThis.model.Recipe;
import WCCI.FinalProject.CookThis.repository.IngredientRepo;
import WCCI.FinalProject.CookThis.repository.MeasurementRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.web.bind.annotation.*;

@RestController
public class IngredientController {
    private RecipeRepo recipeRepo;
    private IngredientRepo ingredientRepo;

    private MeasurementRepo measurementRepo;

    public IngredientController(RecipeRepo recipeRepo, IngredientRepo ingredientRepo, MeasurementRepo measurementRepo) {
        this.recipeRepo = recipeRepo;
        this.ingredientRepo = ingredientRepo;
        this.measurementRepo = measurementRepo;
    }

    @GetMapping("api/ingredients")
    public Iterable<Ingredient> getAllIngredients() {
        return ingredientRepo.findAll();
    }

    @GetMapping("api/ingredients/{id}")
    public Ingredient getIngredientById(@PathVariable Long id) {
        return ingredientRepo.findById(id).get();
    }
    @PatchMapping("api/recipes/{recId}/ingredients/{id}/updateRecipeIngredientMeasurement")
    public <recId> Recipe updateRecipeIngredientMeasurement(@RequestBody Measurement newMeasurement, @PathVariable Long id, @PathVariable Long recId) {
        Recipe recipeToReference = recipeRepo.findById(recId).get();
        Ingredient ingredientToUpdate = ingredientRepo.findById(id).get();
        ingredientToUpdate.updateMeasurement(newMeasurement);
        recipeToChange.addMeasurement(newMeasurement);
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
    @DeleteMapping("api/recipes/{id}/deleteIngredients")
    public Recipe recipeDeleteIngredients (@PathVariable Long id){
        Recipe recipeToChange = recipeRepo.findById(id).get();
        recipeToChange.deleteIngredients();
        recipeRepo.save(recipeToChange);
        return recipeToChange;
    }
}
