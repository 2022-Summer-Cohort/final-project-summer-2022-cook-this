package WCCI.FinalProject.CookThis;

import WCCI.FinalProject.CookThis.model.*;
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
        Category category2 = new Category("Region");
        categoryRepo.save(category2);
        Category category3 = new Category("Holiday");
        categoryRepo.save(category3);
        Category category4 = new Category("Dietary Needs");
        categoryRepo.save(category4);



        Recipe recipe1 = new Recipe("ApplePie","/images/ApplePie.jpg",category1);
        recipeRepo.save(recipe1);


        Step pieStep1 = new Step("Step 1: Peel and core apples, then thinly slice. ");
        Step pieStep2 =new Step("Step 2: Preheat the oven to 425 degrees F (220 degrees C).");
        Step pieStep3 =new Step("Step 3: Melt butter in a saucepan over medium heat. Add flour and stir to form a paste; cook until fragrant, about 1 to 2 minutes. Add both sugars and water; bring to a boil. Reduce the heat to low and simmer for 3 to 5 minutes. Remove from the heat.");
        Step pieStep4 =new Step("Step 4: Press one pastry into the bottom and up the sides of a 9-inch pie pan. Roll out remaining pastry so it will overhang the pie by about 1/2 inch. Cut pastry into eight 1-inch strips.");
        Step pieStep5 =new Step("Step 5: Place sliced apples in the bottom crust, forming a slight mound.");
        Step pieStep6 =new Step("Step 6: Lay four strips vertically and evenly spaced over top of the filled pie, using longer strips in the center and shorter strips at the edges.");
        Step pieStep7 =new Step("Step 7: Fold the first and third strips all the way back so they're almost falling off the pie. Lay one of the unused strips perpendicular over the second and forth strips, then unfold the first and third strips back into their original position.");
        Step pieStep8 =new Step("Step 8: Fold the second and forth vertical strips back. Lay one of the three unused strips perpendicular over top. Unfold the first and third strips back into their original position.");
        Step pieStep9 =new Step("Step 9: Repeat Steps 7 and 8 to weave in the last two strips of pastry. Fold and trim excess dough at the edges as necessary, and pinch to secure. ");
        Step pieStep10 =new Step("Step 10: Slowly and gently pour the sugar-butter mixture over the crust, making sure it seeps down through the lattice and over the sliced apples. Brush some over the top of the lattice, but make sure it doesn't run off the sides");
        Step pieStep11 =new Step("Step 11: Bake in the preheated oven for 15 minutes. Reduce the temperature to 350 degrees F (175 degrees C) and continue baking until apples are soft, 35 to 45 minutes.");
        recipe1.addStep(pieStep1);
        recipe1.addStep(pieStep2);
        recipe1.addStep(pieStep3);
        recipe1.addStep(pieStep4);
        recipe1.addStep(pieStep5);
        recipe1.addStep(pieStep6);
        recipe1.addStep(pieStep7);
        recipe1.addStep(pieStep8);
        recipe1.addStep(pieStep9);
        recipe1.addStep(pieStep10);
        recipe1.addStep(pieStep11);


        Ingredient pieIngredient1 = new Ingredient("Granny Smith Apples","8");
        recipe1.addIngredient(pieIngredient1);


        Ingredient pieIngredient2 = new Ingredient("Unsalted Butter","1/2 Cup");
        recipe1.addIngredient(pieIngredient2);


        Ingredient pieIngredient3 = new Ingredient("White Sugar","3 tablespoons");
        recipe1.addIngredient(pieIngredient3);


        Ingredient pieIngredient4 = new Ingredient("Packed Brown Sugar","1/2 Cup");
        recipe1.addIngredient(pieIngredient4);


        Ingredient pieIngredient5 = new Ingredient("Water","1/4 Cup");
        recipe1.addIngredient(pieIngredient5);


        Ingredient pieIngredient6 = new Ingredient("Double-Crust Pie Pastry (Thawed)","9 Inches");
        recipe1.addIngredient(pieIngredient6);


        Review pieReview1 = new Review("Alex","Amazing Amazing Amazing!",4.0);
        recipe1.addReview(pieReview1);

        recipeRepo.save(recipe1);







        Recipe recipe2 = new Recipe("ApplePie","/images/ApplePie.jpg",category1);
        recipeRepo.save(recipe2);

        Step burrStep1 = new Step("Step 1: Prep! Whisk the eggs, dice the potatoes, chop the green onions, slice your avocado.");
        Step burrStep2 = new Step("Step 2: Brown! Cook the breakfast sausage—ground, not links—until it’s nicely browned and sizzling.");
        Step burrStep3 = new Step("Step 3: Scramble the eggs IN the sausage fat. Oh yes. Waste not want not—also, it makes the eggs extra delicious. We’re fans of the low-and-slow method when it comes to scrambling eggs—stir frequently and let low heat do the rest.");
        Step burrStep4 = new Step("Step 4: Fry the potatoes! In the same pan that you cooked the sausage and eggs in—one pan! You know we’ve got you!—fry the potatoes in a little oil until they’re nicely crisp on the outside and cooked through.");
        Step burrStep5 = new Step("Step 5: Mix it up! Once the potatoes are cooked, add the sausage, eggs and green onions to the pan. Stir to combine.");
        Step burrStep6 = new Step("Step 6: Assemble! One at a time, lay out a tortilla and spoon some of the sausage-egg-potato mixture directly into your mouth. No wait. That’s not right. One at a time, lay out a tortilla and spoon some of the sausage-egg-potato mixture into a tortilla. Top with cheese, avocado slices, salsa and cilantro.");
        Step burrStep7 = new Step("Step 7: Melty, crispy, gooey breakfast burrito goodness! Line all of your assembled burritos up on a baking sheet, and bake just until they are golden on the outside and the cheese is melted, about 10 minutes.");
        recipe2.addStep(burrStep1);
        recipe2.addStep(burrStep2);
        recipe2.addStep(burrStep3);
        recipe2.addStep(burrStep4);
        recipe2.addStep(burrStep5);
        recipe2.addStep(burrStep6);
        recipe2.addStep(burrStep7);




        Ingredient burrIngredient1 = new Ingredient("large russet potatoes, peeled and grated","2");
        recipe2.addIngredient(burrIngredient1);


        Ingredient burrIngredient2 = new Ingredient("breakfast sausage, ground (not links)","1 lb");
        recipe2.addIngredient(burrIngredient2);


        Ingredient burrIngredient3 = new Ingredient("eggs, beaten","6");
        recipe2.addIngredient(burrIngredient3);


        Ingredient burrIngredient4 = new Ingredient("olive oil","2 tbsp");
        recipe2.addIngredient(burrIngredient4);


        Ingredient burrIngredient5 = new Ingredient("salt","1 tsp");
        recipe2.addIngredient(burrIngredient5);


        Ingredient burrIngredient6 = new Ingredient("ground pepper","1/4 tsp");
        recipe2.addIngredient(burrIngredient6);


        Ingredient burrIngredient7 = new Ingredient("bunch green onions, white and green parts, chopped","1");
        recipe2.addIngredient(burrIngredient7);


        Ingredient burrIngredient8 = new Ingredient("large flour tortillas","6");
        recipe2.addIngredient(burrIngredient8);


        Ingredient burrIngredient9 = new Ingredient("cheddar cheese, grated","2 cups");
        recipe2.addIngredient(burrIngredient9);


        Ingredient burrIngredient10 = new Ingredient("avocados, sliced","2");
        recipe2.addIngredient(burrIngredient10);


        Ingredient burrIngredient11 = new Ingredient("salsa","To Taste");
        recipe2.addIngredient(burrIngredient11);


        Ingredient burrIngredient12 = new Ingredient("fresh cilantro","To Taste");
        recipe2.addIngredient(burrIngredient12);

        Review burrReview1 = new Review("Alex", "Make your morning amazing!", 4.0);
        recipe2.addReview(burrReview1);


        recipeRepo.save(recipe2);




    }
}



