package WCCI.FinalProject.CookThis;

import WCCI.FinalProject.CookThis.model.Category;
import WCCI.FinalProject.CookThis.model.Ingredient;
import WCCI.FinalProject.CookThis.model.Recipe;
import WCCI.FinalProject.CookThis.model.Step;
import WCCI.FinalProject.CookThis.repository.CategoryRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class Populator implements CommandLineRunner {
    private CategoryRepo categoryRepo;
    private RecipeRepo recipeRepo;

    public Populator(CategoryRepo categoryRepo, RecipeRepo recipeRepo) {
        this.categoryRepo = categoryRepo;
        this.recipeRepo = recipeRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Category category1 = new Category("Budget");
        categoryRepo.save(category1);
        Recipe recipe1 = new Recipe("ApplePie","/images/ApplePie.jpg",category1);
        recipeRepo.save(recipe1);


        Step step1 = new Step("Peel and core apples, then thinly slice. ");
        Step step2 =new Step("Step 2: Preheat the oven to 425 degrees F (220 degrees C).");
        Step step3 =new Step("Step 3: Melt butter in a saucepan over medium heat. Add flour and stir to form a paste; cook until fragrant, about 1 to 2 minutes. Add both sugars and water; bring to a boil. Reduce the heat to low and simmer for 3 to 5 minutes. Remove from the heat.");
        Step step4 =new Step("Step 4: Press one pastry into the bottom and up the sides of a 9-inch pie pan. Roll out remaining pastry so it will overhang the pie by about 1/2 inch. Cut pastry into eight 1-inch strips.");
        Step step5 =new Step("Step 5: Place sliced apples in the bottom crust, forming a slight mound.");
        Step step6 =new Step("Step 6: Lay four strips vertically and evenly spaced over top of the filled pie, using longer strips in the center and shorter strips at the edges.");
        Step step7 =new Step("Step 7: Fold the first and third strips all the way back so they're almost falling off the pie. Lay one of the unused strips perpendicular over the second and forth strips, then unfold the first and third strips back into their original position.");
        Step step8 =new Step("Step 8: Fold the second and forth vertical strips back. Lay one of the three unused strips perpendicular over top. Unfold the first and third strips back into their original position.");
        Step step9 =new Step("Step 9: Repeat Steps 7 and 8 to weave in the last two strips of pastry. Fold and trim excess dough at the edges as necessary, and pinch to secure. ");
        Step step10 =new Step("Step 10: Slowly and gently pour the sugar-butter mixture over the crust, making sure it seeps down through the lattice and over the sliced apples. Brush some over the top of the lattice, but make sure it doesn't run off the sides");
        Step step11 =new Step("Step 11: Bake in the preheated oven for 15 minutes. Reduce the temperature to 350 degrees F (175 degrees C) and continue baking until apples are soft, 35 to 45 minutes.");
        recipe1.addStep(step1);
        recipe1.addStep(step2);
        recipe1.addStep(step3);
        recipe1.addStep(step4);
        recipe1.addStep(step5);
        recipe1.addStep(step6);
        recipe1.addStep(step7);
        recipe1.addStep(step8);
        recipe1.addStep(step9);
        recipe1.addStep(step10);
        recipe1.addStep(step11);
        recipeRepo.save(recipe1);


        Ingredient ingredient1 = new Ingredient("Granny Smith Apples","8");
        recipe1.addIngredient(ingredient1);
        recipeRepo.save(recipe1);



    }
}
