package WCCI.FinalProject.CookThis;

import WCCI.FinalProject.CookThis.model.*;
import WCCI.FinalProject.CookThis.repository.CategoryRepo;
import WCCI.FinalProject.CookThis.repository.IngredientRepo;
import WCCI.FinalProject.CookThis.repository.RecipeRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class Populator implements CommandLineRunner {
    private CategoryRepo categoryRepo;
    private RecipeRepo recipeRepo;
    private IngredientRepo ingredientRepo;

    public Populator(CategoryRepo categoryRepo, RecipeRepo recipeRepo, IngredientRepo ingredientRepo) {
        this.categoryRepo = categoryRepo;
        this.recipeRepo = recipeRepo;
        this.ingredientRepo = ingredientRepo;
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


        Recipe recipe1 = new Recipe("ApplePie", "/images/ApplePie.jpg", category1);
        recipeRepo.save(recipe1);


        Step pieStep1 = new Step("Step 1: Peel and core apples, then thinly slice. ");
        Step pieStep2 = new Step("Step 2: Preheat the oven to 425 degrees F (220 degrees C).");
        Step pieStep3 = new Step("Step 3: Melt butter in a saucepan over medium heat. Add flour and stir to form a paste; cook until fragrant, about 1 to 2 minutes. Add both sugars and water; bring to a boil. Reduce the heat to low and simmer for 3 to 5 minutes. Remove from the heat.");
        Step pieStep4 = new Step("Step 4: Press one pastry into the bottom and up the sides of a 9-inch pie pan. Roll out remaining pastry so it will overhang the pie by about 1/2 inch. Cut pastry into eight 1-inch strips.");
        Step pieStep5 = new Step("Step 5: Place sliced apples in the bottom crust, forming a slight mound.");
        Step pieStep6 = new Step("Step 6: Lay four strips vertically and evenly spaced over top of the filled pie, using longer strips in the center and shorter strips at the edges.");
        Step pieStep7 = new Step("Step 7: Fold the first and third strips all the way back so they're almost falling off the pie. Lay one of the unused strips perpendicular over the second and forth strips, then unfold the first and third strips back into their original position.");
        Step pieStep8 = new Step("Step 8: Fold the second and forth vertical strips back. Lay one of the three unused strips perpendicular over top. Unfold the first and third strips back into their original position.");
        Step pieStep9 = new Step("Step 9: Repeat Steps 7 and 8 to weave in the last two strips of pastry. Fold and trim excess dough at the edges as necessary, and pinch to secure. ");
        Step pieStep10 = new Step("Step 10: Slowly and gently pour the sugar-butter mixture over the crust, making sure it seeps down through the lattice and over the sliced apples. Brush some over the top of the lattice, but make sure it doesn't run off the sides");
        Step pieStep11 = new Step("Step 11: Bake in the preheated oven for 15 minutes. Reduce the temperature to 350 degrees F (175 degrees C) and continue baking until apples are soft, 35 to 45 minutes.");
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


        Ingredient pieIngredient1 = new Ingredient("Granny Smith Apples","f","f","4",0, recipe1);
//        recipe1.addIngredient(pieIngredient1);
        ingredientRepo.save(pieIngredient1);



        Ingredient pieIngredient2 = new Ingredient("Unsalted Butter", "y","3","2",0, recipe1);
//        recipe1.addIngredient(pieIngredient2);
        ingredientRepo.save(pieIngredient2);


        Ingredient pieIngredient3 = new Ingredient("White Sugar","f","f","3",3, recipe1);
        ingredientRepo.save(pieIngredient3);


        Ingredient pieIngredient4 = new Ingredient("Packed Brown Sugar","nc", "e","3",3, recipe1);
        ingredientRepo.save(pieIngredient4);


        Ingredient pieIngredient5 = new Ingredient("Water", "d","","3",3, recipe1);
        ingredientRepo.save(pieIngredient5);


        Ingredient pieIngredient6 = new Ingredient("Double-Crust Pie Pastry (Thawed)","","","3",3, recipe1);
        ingredientRepo.save(pieIngredient6);


        Review pieReview1 = new Review("Alex", "Amazing Amazing Amazing!", 4.0);
        recipe1.addReview(pieReview1);

        recipeRepo.save(recipe1);







        Recipe recipe2 = new Recipe("Breakfast Burrito","/images/ApplePie.jpg",category1);
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




        Ingredient burrIngredient1 = new Ingredient("large russet potatoes, peeled and grated","","2","1",1, recipe2);
        ingredientRepo.save(burrIngredient1);


        Ingredient burrIngredient2 = new Ingredient("breakfast sausage, ground (not links)","","1 lb","0",0, recipe2);
        ingredientRepo.save(burrIngredient2);


        Ingredient burrIngredient3 = new Ingredient("eggs, beaten","","6","3",3, recipe2);
        ingredientRepo.save(burrIngredient3);


        Ingredient burrIngredient4 = new Ingredient("olive oil","","2 tbsp","2",2, recipe2);
        ingredientRepo.save(burrIngredient4);


        Ingredient burrIngredient5 = new Ingredient("salt","","1 tsp","4",4, recipe2);
        ingredientRepo.save(burrIngredient5);


        Ingredient burrIngredient6 = new Ingredient("ground pepper","","1/4 tsp","3",3, recipe2);
        ingredientRepo.save(burrIngredient6);


        Ingredient burrIngredient7 = new Ingredient("bunch green onions, white and green parts, chopped","1","","3",3, recipe2);
        ingredientRepo.save(burrIngredient7);


        Ingredient burrIngredient8 = new Ingredient("large flour tortillas",",","6","2",2, recipe2);
        ingredientRepo.save(burrIngredient8);


        Ingredient burrIngredient9 = new Ingredient("cheddar cheese, grated","","2 cups","4",4, recipe2);
        ingredientRepo.save(burrIngredient9);


        Ingredient burrIngredient10 = new Ingredient("avocados, sliced","","2","6",6, recipe2);
        ingredientRepo.save(burrIngredient10);


        Ingredient burrIngredient11 = new Ingredient("salsa","","To Taste","2",2, recipe2);
        ingredientRepo.save(burrIngredient11);


        Ingredient burrIngredient12 = new Ingredient("fresh cilantro",",","To Taste","1",1, recipe2);
        ingredientRepo.save(burrIngredient12);

        Review burrReview1 = new Review("Alex", "Make your morning amazing!", 4.0);
        recipe2.addReview(burrReview1);
        recipeRepo.save(recipe2);


        Recipe recipe3 = new Recipe("Vegetable Fried Rice", "/images/FriedRice.jpg", category1);
        recipeRepo.save(recipe3);

        Step thirdStep1 = new Step("Step 1: Bring water to a boil in a saucepan. Stir in rice. Reduce heat, cover, and simmer until liquid is absorbed, about 20 minutes. Set aside.");
        Step thirdStep2 = new Step("Step 2: Heat peanut oil in a large skillet or wok over medium heat. Add onions, bell pepper, garlic, and red pepper flakes. Cook, stirring occasionally, for 3 minutes.");
        Step thirdStep3 = new Step("Step 3: Increase heat to medium-high. Stir in cooked rice, green onions, and soy sauce; cook and stir for 1 minute. Add peas and cook 1 minute more.");
        Step thirdStep4 = new Step("Step 4: Remove from heat. Stir in sesame oil and garnish with peanuts.");
        recipe1.addStep(thirdStep1);
        recipe1.addStep(thirdStep2);
        recipe1.addStep(thirdStep3);
        recipe1.addStep(thirdStep4);
        recipeRepo.save(recipe3);

        Ingredient thirdIngredient1 = new Ingredient("Cups of Water","", "3","4",4, recipe3);
        ingredientRepo.save(thirdIngredient1);

        Ingredient thirdIngredient2 = new Ingredient("Tablespoons Peanut Oil", "2 ","","1",1, recipe3);
        ingredientRepo.save(thirdIngredient2);

        Ingredient thirdIngredient3 = new Ingredient("Small Yellow Onion, Chopped", "1 ","","2",2, recipe3);
        ingredientRepo.save(thirdIngredient3);

        Ingredient thirdIngredient4 = new Ingredient("Small Green Bell Pepper", "1","","2",2, recipe3);
        ingredientRepo.save(thirdIngredient4);

        Ingredient thirdIngredient5 = new Ingredient("Teaspoon Minced Garlic", "1 ","r","4", 4, recipe3);
        ingredientRepo.save(thirdIngredient5);

        Ingredient thirdIngredient6 = new Ingredient("Teaspoon Red Pepper Flakes", "1/4 ","","4",4, recipe3);
        ingredientRepo.save(thirdIngredient6);

        Ingredient thirdIngredient7 = new Ingredient("Tablespoons Soy Sauce", "3 ","","0",0, recipe3);
        ingredientRepo.save(thirdIngredient7);

        Ingredient thirdIngredient8 = new Ingredient("Frozen Petite Peas", "1 cup ","","3",3, recipe3);
        ingredientRepo.save(thirdIngredient8);

        Ingredient thirdIngredient9 = new Ingredient("Teaspoons of Sesame Oil","2","","1",1, recipe3);
        ingredientRepo.save(thirdIngredient9);

        Ingredient thirdIngredient10 = new Ingredient("Roasted Peanuts","1/4 cup","","3",3, recipe3);
        ingredientRepo.save(thirdIngredient10);

        recipeRepo.save(recipe3);

        Review thirdReview1 = new Review("Zak", "Delicious", 4.3);
        recipe3.addReview(thirdReview1);
        recipeRepo.save(recipe3);

        Recipe recipe4 = new Recipe("Spicy Garlic-Parmesan spaghetti Squash with Bacon", "images/spicy garlic permesan.Jpg/", category1);
        recipeRepo.save(recipe4);

        Step fourthstep1 = new Step(" Step 1: Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper or foil.");
        Step fourthstep2 = new Step("Step 2: Using a sharp knife, cut off the root end of the squash, cut in half lengthwise, and scrape out the seeds and connecting strands with a spoon. Brush the cut sides with olive oil and place squash on the baking sheet with cut sides down.");
        Step fourthstep3= new Step("Step 3:Bake until the skin can be easily pierced with a fork, and the flesh is tender, about 45 minutes. ");
        Step fourthstep4 = new Step("Step 4: While squash is baking, cook bacon over medium heat until crispy and browned, 3 to 4 minutes. Remove to a paper towel to drain.");
        Step fourthstep5 = new Step("Step 5: Remove squash from the oven and let rest until cool enough to handle. Scrape out the flesh with a fork creating long strands, loosening and removing the strands from the shells.");
        Step fourthstep6 = new Step("Step 6: Heat a large pan on medium heat, and melt butter. Add garlic and cook until fragrant, about 30 seconds. Add squash strands, toss with garlic butter, and cook until heated through, stirring often, about 2 minutes.");
        Step fourthstep7 = new Step("Step 7: Remove pan from the heat, stir in Parmesan cheese, and season with salt and pepper. Gently stir to coat the strands and let the cheese melt. Garnish with bacon, oregano, and red pepper flakes");

        recipe4.addStep(fourthstep1);
        recipe4.addStep(fourthstep2);
        recipe4.addStep(fourthstep3);
        recipe4.addStep(fourthstep4);
        recipe4.addStep(fourthstep5);
        recipe4.addStep(fourthstep6);
        recipe4.addStep(fourthstep7);


        Ingredient fourthIngredient1 = new Ingredient("Spaghetti squash halved and seeded", "2 1/2","","2",2, recipe4);
        ingredientRepo.save(fourthIngredient1);

        Ingredient fourthIngredient2 = new Ingredient("Tablespoon Olive Oil", "2","","4",4, recipe4);
        ingredientRepo.save(fourthIngredient2);

        Ingredient fourthIngredient3 = new Ingredient("slice bacon cut in to pieces", "2 inch","","3",4, recipe4);
        ingredientRepo.save(fourthIngredient3);

        Ingredient fourthIngredient4 = new Ingredient("Tablespoon unsalted butter", "2","","3",4, recipe4);
        ingredientRepo.save(fourthIngredient4);

        Ingredient fourthIngredient5 = new Ingredient("Cloves of Minced Garlic", "3","","8",8, recipe4);
        ingredientRepo.save(fourthIngredient5);

        Ingredient fourthIngredient6 = new Ingredient("Grated parmesan cheese", "1/2","","1",1, recipe4);
        ingredientRepo.save(fourthIngredient6);

        Ingredient fourthIngredient7 = new Ingredient("Salt and ground pepper to taste", "1","","3",3, recipe4);
        ingredientRepo.save(fourthIngredient7);

        Ingredient fourthIngredient8 = new Ingredient("Teaspoon Chopped fresh oregon", "1/3","","3",3, recipe4);
        ingredientRepo.save(fourthIngredient8);

        Ingredient fourthIngredient9 = new Ingredient("Teaspoon crushed red pepper flakes", "1/3","","0",0, recipe4);
        ingredientRepo.save(fourthIngredient9);

        Ingredient fourthIngredient10 = new Ingredient("Grated parmesan cheese","1/4cup","","3",3, recipe4);
        ingredientRepo.save(fourthIngredient10);


        Review fourthReview1 = new Review("Arsi","PerfectlyPlated",4.5);
        recipe4.addReview(fourthReview1);

        recipeRepo.save(recipe4);

        Recipe recipe5 = new Recipe("ActiFried Chicken Tikka Masala", "/images/FriedRiceChickenMasala.jpg", category1);
        recipeRepo.save(recipe5);

        Step indoStep1 = new Step("Step 1: Mix the tikka masala curry paste with half of the yoghurt in a large mixing bowl.");
        Step indoStep2 = new Step("Step 2: Cut the chicken into 1-cm strips, then add the yoghurt mixture and stir to coat the chicken. Cover. Leave to marinate in the fridge for at least 2 hours or overnight, if you have time.");
        Step indoStep3 = new Step("Step 3: Place the oil and onion in the ActiFry. Close the lid. Cook for 10 minutes.");
        Step indoStep4 = new Step("Step 4: Add the marinated chicken, tomatoes, water, the rest of the yoghurt, sugar, and lemon juice. Stir with a wooden spoon. Close the lid. Leave to cook for 15 minutes.");
        Step indoStep5 = new Step("Step 5: Serve hot, sprinkled with chopped coriander and accompanied with basmati rice or naan bread.");
        recipe1.addStep(indoStep1);
        recipe1.addStep(indoStep2);
        recipe1.addStep(indoStep3);
        recipe1.addStep(indoStep4);
        recipe1.addStep(indoStep5);
        recipeRepo.save(recipe5);

        Ingredient indoIngredient1 = new Ingredient("Tikka masala curry pasta","100 g ","","0",0, recipe5);
        ingredientRepo.save(indoIngredient1);

        Ingredient indoIngredient2 = new Ingredient(" Low-fat yoghurt","200 g ","","0",0, recipe5);
        ingredientRepo.save(indoIngredient2);

        Ingredient indoIngredient3 = new Ingredient(" low-fat yoghurt","1⅓ pounds 600 g ","","0",0, recipe5);
        ingredientRepo.save(indoIngredient3);

        Ingredient indoIngredient4 = new Ingredient(" ActiFry spoon vegetable oil", "1 ","","0",0, recipe5);
        ingredientRepo.save(indoIngredient4);

        Ingredient indoIngredient5 = new Ingredient("Onion, finely chopped", "1 ","","0",0, recipe5);
        ingredientRepo.save(indoIngredient5);

        Ingredient indoIngredient6 = new Ingredient("Package whole peeled tomatoes", "1 (400 g)  ","","1",1, recipe5);
        ingredientRepo.save(indoIngredient6);

        Ingredient indoIngredient7 = new Ingredient(" Water","20ml ","","2",2, recipe5);
        ingredientRepo.save(indoIngredient7);

        Ingredient indoIngredient8 = new Ingredient("ActiFry spoon sugar", "1 ","","3",3, recipe5);
        ingredientRepo.save(indoIngredient8);

        Ingredient indoIngredient9 = new Ingredient("Small bunch chopped fresh coriander leaves", "1 ","","0",0, recipe5);
        ingredientRepo.save(indoIngredient9);

        recipeRepo.save(recipe5);

        Review indoReview1 = new Review("Zak","Delicious",4.3);
        recipe5.addReview(indoReview1);
        recipeRepo.save(recipe5);




        Recipe recipe6= new Recipe("Vegetable Tofu Soup with Lemongrass and Coconut Milk", "/images/FriedRiceChickenMasala.jpg", category1);
        recipeRepo.save(recipe6);

        Step tofuStep1 = new Step("Heat 2 tablespoons oil in a large pot over medium heat. Add onion; cook and stir until lightly browned, about 7 minutes. Stir in garlic and ginger; cook until fragrant, about 2 minutes. Add curry powder; cook and stir until fragrant, about 1 minute..");
        Step tofuStep2 = new Step("Step 2: Pour vegetable stock and coconut milk into the pot. Add yam, carrots, celery, lentils, lemongrass, and sugar. Increase heat to medium-high; bring to a boil. Reduce heat slightly; simmer until vegetables soften, 10 to 15 minutes. Season soup with salt.");
        Step tofuStep3 = new Step("Step 3: Heat remaining 3 tablespoons oil in a large nonstick skillet over medium heat. Add tofu in a single layer; cook until lightly browned, about 4 minutes per side. Stir tofu into soup.");
        recipe1.addStep(tofuStep1);
        recipe1.addStep(tofuStep2);
        recipe1.addStep(tofuStep3);
        recipeRepo.save(recipe6);

        Ingredient tofuIngredient1 = new Ingredient("tablespoons vegetable oil, divided", "5 ","","1",1, recipe6);
        ingredientRepo.save(tofuIngredient1);

        Ingredient tofuIngredient2 = new Ingredient(" Large onion, chopped", "1 ","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient2);

        Ingredient tofuIngredient3 = new Ingredient(" Tablespoon finely chopped garlic", "1 ","","4",4, recipe6);
        ingredientRepo.save(tofuIngredient3);

        Ingredient tofuIngredient4 = new Ingredient(" Tablespoon finely chopped ginger", "1 ","","2",2, recipe6);
        ingredientRepo.save(tofuIngredient4);

        Ingredient tofuIngredient5 = new Ingredient("Tablespoons curry powder","2 ","","3",3, recipe6);
        ingredientRepo.save(tofuIngredient5);

        Ingredient tofuIngredient6 = new Ingredient("Cups vegetable stock","3 ","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient6);

        Ingredient tofuIngredient7 = new Ingredient("  (14 ounce) can coconut milk", "1","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient7);

        Ingredient tofuIngredient8 = new Ingredient("large yam, cut into chunks","1 ","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient8);

        Ingredient tofuIngredient9 = new Ingredient("large carrots, cut into chunks", "2 ","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient9);

        Ingredient tofuIngredient10 = new Ingredient("ribs celery, chopped", "2 ","","1",1, recipe6);
        ingredientRepo.save(tofuIngredient10);

        Ingredient tofuIngredient11 = new Ingredient("cup red lentils", "1/2 ","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient11);

        Ingredient tofuIngredient12 = new Ingredient("cup minced lemongrass","1/4","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient12);

        Ingredient tofuIngredient13 = new Ingredient("tablespoons white sugar","2 ","","1",1, recipe6);
        ingredientRepo.save(tofuIngredient13);

        Ingredient tofuIngredient14 = new Ingredient("salt to taste", "some","","0",0, recipe6);
        ingredientRepo.save(tofuIngredient14);

        Ingredient tofuIngredient15 = new Ingredient("package medium-firm tofu, cubed and patted dry", "1(12ounce)","","1",1, recipe6);
        ingredientRepo.save(tofuIngredient15);

        recipeRepo.save(recipe6);

        Review tofuReview1 = new Review("Zak","Delicious",4.3);
        recipe6.addReview(tofuReview1);
        recipeRepo.save(recipe6);


    }


}






