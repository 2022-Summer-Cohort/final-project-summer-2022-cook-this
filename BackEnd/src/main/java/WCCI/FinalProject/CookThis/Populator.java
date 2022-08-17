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

        Recipe recipe1 = new Recipe("Apple Pie", "/images/ApplePie.jpg", category1, category3);
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
        Ingredient pieIngredient1 = new Ingredient("Granny Smith Apples","https://www.naturehills.com/pub/media/catalog/product/g/r/granny-apple_1.jpg","f","4",0, recipe1);
        ingredientRepo.save(pieIngredient1);
        Ingredient pieIngredient2 = new Ingredient("Unsalted Butter", "https://www.tastingtable.com/img/gallery/the-absolute-best-butter-substitutes/l-intro-1652376025.jpg","3","2",0, recipe1);
        ingredientRepo.save(pieIngredient2);
        Ingredient pieIngredient3 = new Ingredient("White Sugar","https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18203710/fca26bs74-01-main.jpg","f","3",0, recipe1);
        ingredientRepo.save(pieIngredient3);
        Ingredient pieIngredient4 = new Ingredient("Packed Brown Sugar","https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Ffcda43c50bdeb1717b2f5b17ee453f80722aa5a6", "e","3",0, recipe1);
        ingredientRepo.save(pieIngredient4);
        Ingredient pieIngredient5 = new Ingredient("Water", "https://res.cloudinary.com/hksqkdlah/image/upload/31590_stp-classicsandwichbread-measurewater-01.jpg","","0",0, recipe1);
        ingredientRepo.save(pieIngredient5);
        Ingredient pieIngredient6 = new Ingredient("Double-Crust Pie Pastry (Thawed)","https://www.onceuponachef.com/images/2019/11/Pie_Crust_Recipe-1200x1389.jpg","","3",0, recipe1);
        ingredientRepo.save(pieIngredient6); 
        Review pieReview1 = new Review("Alex", "Amazing Amazing Amazing!", 4.0);
        recipe1.addReview(pieReview1);
        recipeRepo.save(recipe1);


        Recipe recipe2 = new Recipe("Breakfast Burrito","/images/breakfastBurrito.jpeg",category1);
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
        Ingredient burrIngredient1 = new Ingredient("Large russet potatoes, peeled and grated","https://cookieandkate.com/images/2018/02/grated-potatoes.jpg","filler","2",0, recipe2);
        ingredientRepo.save(burrIngredient1);
        Ingredient burrIngredient2 = new Ingredient("Breakfast sausage, ground (not links)","https://www.galonamission.com/wp-content/uploads/2018/08/Ground-Breakfast-Sausage-for-Casseroles-3-500x500.jpg","filler","1 lb",0, recipe2);
        ingredientRepo.save(burrIngredient2);
        Ingredient burrIngredient3 = new Ingredient("Eggs, beaten","https://www.bhg.com/thmb/CtZPERUyNPXpByLF_dmoZxujtvM=/400x0/filters:no_upscale():max_bytes(150000):strip_icc()/scramble-eggs-c35778ea-bd6f5b6af7cc481688980ab5ff41d7a8.jpg","filler","6",0, recipe2);
        ingredientRepo.save(burrIngredient3);
        Ingredient burrIngredient4 = new Ingredient("Olive oil","https://i5.walmartimages.com/asr/4b2e578d-a365-4776-a504-a1e44db42574.a25d2a95f3beea4ae07b98dfa369ae0e.jpeg","","2 tbsp",0, recipe2);
        ingredientRepo.save(burrIngredient4);
        Ingredient burrIngredient5 = new Ingredient("Salt","https://www.houstonmethodist.org/-/media/images/contenthub/article-images/nutrition/2022/hub_toomuchsaltdiet_social.jpg?mw=1382&hash=622037E68CD39302CCA13829C3BED088","","1 tsp",0, recipe2);
        ingredientRepo.save(burrIngredient5);
        Ingredient burrIngredient6 = new Ingredient("Ground pepper","https://www.webstaurantstore.com/images/products/large/80259/2043680.jpg","","1/4 tsp",1, recipe2);
        ingredientRepo.save(burrIngredient6);
        Ingredient burrIngredient7 = new Ingredient("Green onions, chopped","https://sc01.alicdn.com/kf/U1b146dd2826744239f17f98f74a31200X/196078568/U1b146dd2826744239f17f98f74a31200X.jpg","","3 bunches",1, recipe2);
        ingredientRepo.save(burrIngredient7);
        Ingredient burrIngredient8 = new Ingredient("Large flour tortillas","https://www.meijer.com/content/dam/meijer/product/0007/37/3107/20/0007373107200_1200.png","","6",0, recipe2);
        ingredientRepo.save(burrIngredient8);
        Ingredient burrIngredient9 = new Ingredient("Cheddar cheese, grated","https://cdnimg.webstaurantstore.com/images/products/large/485710/1814631.jpg","","2 cups",0, recipe2);
        ingredientRepo.save(burrIngredient9);
        Ingredient burrIngredient10 = new Ingredient("Avocados, sliced","https://i.dailymail.co.uk/i/pix/2016/04/22/16/3371116400000578-0-image-a-24_1461340698252.jpg","","2",0, recipe2);
        ingredientRepo.save(burrIngredient10);
        Ingredient burrIngredient11 = new Ingredient("Salsa","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F04%2Ffresh-tomato-salsa.jpg&q=60","","",2, recipe2);
        ingredientRepo.save(burrIngredient11);
        Ingredient burrIngredient12 = new Ingredient("Fresh cilantro","https://whattocooktoday.com/wp-content/uploads/2020/04/cilantro-18.jpg","1/2 oz, to taste,","1",0, recipe2);
        ingredientRepo.save(burrIngredient12);
        Review burrReview1 = new Review("Alex", "Make your morning amazing!", 4.0);
        recipe2.addReview(burrReview1);
        recipeRepo.save(recipe2);


        Recipe recipe3 = new Recipe("Vegetable Fried Rice (Vegetarian)", "/images/vegetableFriedRice.jpeg", category1, category4);
        recipeRepo.save(recipe3);
        Step thirdStep1 = new Step("Step 1: Bring water to a boil in a saucepan. Stir in rice. Reduce heat, cover, and simmer until liquid is absorbed, about 20 minutes. Set aside.");
        Step thirdStep2 = new Step("Step 2: Heat peanut oil in a large skillet or wok over medium heat. Add onions, bell pepper, garlic, and red pepper flakes. Cook, stirring occasionally, for 3 minutes.");
        Step thirdStep3 = new Step("Step 3: Increase heat to medium-high. Stir in cooked rice, green onions, and soy sauce; cook and stir for 1 minute. Add peas and cook 1 minute more.");
        Step thirdStep4 = new Step("Step 4: Remove from heat. Stir in sesame oil and garnish with peanuts.");
        recipe3.addStep(thirdStep1);
        recipe3.addStep(thirdStep2);
        recipe3.addStep(thirdStep3);
        recipe3.addStep(thirdStep4);
        Ingredient thirdIngredient1 = new Ingredient("Water","https://res.cloudinary.com/hksqkdlah/image/upload/31590_stp-classicsandwichbread-measurewater-01.jpg", "3","4 cups",0, recipe3);
        ingredientRepo.save(thirdIngredient1);
        Ingredient thirdIngredient2 = new Ingredient("Peanut Oil", "https://target.scene7.com/is/image/Target/GUEST_0c8bb40a-8c0d-4667-b338-dea8b54ead48?wid=488&hei=488&fmt=pjpeg","","1 Tablespoon",0, recipe3);
        ingredientRepo.save(thirdIngredient2);
        Ingredient thirdIngredient3 = new Ingredient("Small Yellow Onion, Chopped", "https://images-cdn.welcomesoftware.com/Zz1hOThjNTQ5NDg1ZWZiOGEwYTMxYzljN2RiNmU1ZmJjYw==/ONION_chopped.jpg","","2",0, recipe3);
        ingredientRepo.save(thirdIngredient3);
        Ingredient thirdIngredient4 = new Ingredient("Small Green Bell Pepper", "https://cdn.shopify.com/s/files/1/0257/4565/3811/products/060721_T110854_202047_202181_Bonnie_PepperGreenBell_ALT_01.jpg?v=1653423009","","2",0, recipe3);
        ingredientRepo.save(thirdIngredient4);
        Ingredient thirdIngredient5 = new Ingredient("Minced Garlic", "https://www.jessicagavin.com/wp-content/uploads/2019/09/how-to-mince-garlic-16-600x900.jpg","r","4 Teaspoons", 0, recipe3);
        ingredientRepo.save(thirdIngredient5);
        Ingredient thirdIngredient6 = new Ingredient("Red Pepper Flakes", "https://oldworldgardenfarms.com/wp-content/uploads/2018/09/featured-red-pepper-flakes-720x540.jpg","","4 teaspoons",3, recipe3);
        ingredientRepo.save(thirdIngredient6);
        Ingredient thirdIngredient7 = new Ingredient("Soy Sauce", "https://www.asianfoodlovers.com/media/catalog/product/cache/8/image/750x750/9df78eab33525d08d6e5fb8d27136e95/8/2/8295_7.jpg","","0 tablespoons",0, recipe3);
        ingredientRepo.save(thirdIngredient7);
        Ingredient thirdIngredient8 = new Ingredient("Petite Peas, frozen", "https://i5.peapod.com/c/WJ/WJCSZ.png","","1 cup",0, recipe3);
        ingredientRepo.save(thirdIngredient8);
        Ingredient thirdIngredient9 = new Ingredient("Sesame Oil","https://www.meijer.com/content/dam/meijer/product/0742/81/2710/90/0742812710905_a1c1_1200.png","","1 tablespoon",0, recipe3);
        ingredientRepo.save(thirdIngredient9);
        Ingredient thirdIngredient10 = new Ingredient("Roasted Peanuts","https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/4078_Dry+Roasted+Pea-Kqaj9yNa-zoom.jpg","","3/4 cup",0, recipe3);
        ingredientRepo.save(thirdIngredient10);
        Review thirdReview1 = new Review("Zak", "Delicious", 4.3);
        recipe3.addReview(thirdReview1);
        recipeRepo.save(recipe3);

        Recipe recipe4 = new Recipe("Spicy Garlic-Parmesan Spaghetti Squash with Bacon", "images/spaghetti-squash-bacon.jpeg", category1, category3);
        recipeRepo.save(recipe4);
        Step fourthstep1 = new Step("Step 1: Preheat the oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper or foil.");
        Step fourthstep2 = new Step("Step 2: Using a sharp knife, cut off the root end of the squash, cut in half lengthwise, and scrape out the seeds and connecting strands with a spoon. Brush the cut sides with olive oil and place squash on the baking sheet with cut sides down.");
        Step fourthstep3 = new Step("Step 3:Bake until the skin can be easily pierced with a fork, and the flesh is tender, about 45 minutes. ");
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
        Ingredient fourthIngredient1 = new Ingredient("Spaghetti squash halved and seeded", "https://www.inspiredtaste.net/wp-content/uploads/2017/05/How-to-Bake-Spaghetti-Squash-3-1200.jpg","","2",0, recipe4);
        ingredientRepo.save(fourthIngredient1);
        Ingredient fourthIngredient2 = new Ingredient("Olive Oil", "https://m.media-amazon.com/images/I/81-IWGqo6dL._SL1500_.jpg","","4 tablespoons",0, recipe4);
        ingredientRepo.save(fourthIngredient2);
        Ingredient fourthIngredient3 = new Ingredient("Bacon", "https://kristineskitchenblog.com/wp-content/uploads/2021/09/bacon-in-oven-square-.jpg","","3 slices",0, recipe4);
        ingredientRepo.save(fourthIngredient3);
        Ingredient fourthIngredient4 = new Ingredient("Unsalted butter", "https://images.heb.com/is/image/HEBGrocery/003539030","","3 tablespoons",0, recipe4);
        ingredientRepo.save(fourthIngredient4);
        Ingredient fourthIngredient5 = new Ingredient("Garlic, minced", "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,q_auto,w_auto/29976_stp-better-way-to-mince-garlic-10","","8 cloves",0, recipe4);
        ingredientRepo.save(fourthIngredient5);
        Ingredient fourthIngredient6 = new Ingredient("Parmesan cheese", "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2021/08/ParmesanCheese-471343790-770x533-1-650x428.jpg","","1 cup",0, recipe4);
        ingredientRepo.save(fourthIngredient6);
        Ingredient fourthIngredient7 = new Ingredient("Salt and ground pepper, to taste", "https://previews.123rf.com/images/rosn123/rosn1231611/rosn123161100024/66150867-two-small-white-dishes-of-sea-salt-flakes-and-freshly-ground-black-pepper-top-down-with-black-textur.jpg","","",0, recipe4);
        ingredientRepo.save(fourthIngredient7);
        Ingredient fourthIngredient8 = new Ingredient("Fresh Oregano", "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266259_2200-1200x628.jpg","","3 teaspoons",0, recipe4);
        ingredientRepo.save(fourthIngredient8);
        Ingredient fourthIngredient9 = new Ingredient("Crushed red pepper flakes", "https://assets.epicurious.com/photos/571fb92640fd1d583e17288b/16:9/w_2560%2Cc_limit/shutterstock_397606069.jpg","","1 teaspoon",3, recipe4);
        ingredientRepo.save(fourthIngredient9);
        Review fourthReview1 = new Review("Arsi","Perfectly Plated",4.5);
        recipe4.addReview(fourthReview1);
        recipeRepo.save(recipe4);

        Recipe recipe5 = new Recipe("ActiFried Chicken Tikka Masala", "/images/tikka-masala.jpeg", category1, category2);
        recipeRepo.save(recipe5);
        Step indoStep1 = new Step("Step 1: Mix the tikka masala curry paste with half of the yoghurt in a large mixing bowl.");
        Step indoStep2 = new Step("Step 2: Cut the chicken into 1-cm strips, then add the yoghurt mixture and stir to coat the chicken. Cover. Leave to marinate in the fridge for at least 2 hours or overnight, if you have time.");
        Step indoStep3 = new Step("Step 3: Place the oil and onion in the ActiFry. Close the lid. Cook for 10 minutes.");
        Step indoStep4 = new Step("Step 4: Add the marinated chicken, tomatoes, water, the rest of the yoghurt, sugar, and lemon juice. Stir with a wooden spoon. Close the lid. Leave to cook for 15 minutes.");
        Step indoStep5 = new Step("Step 5: Serve hot, sprinkled with chopped coriander and accompanied with basmati rice or naan bread.");
        recipe5.addStep(indoStep1);
        recipe5.addStep(indoStep2);
        recipe5.addStep(indoStep3);
        recipe5.addStep(indoStep4);
        recipe5.addStep(indoStep5);
        Ingredient indoIngredient1 = new Ingredient("Tikka masala curry pasta","https://res.cloudinary.com/domxusp4k/image/upload/q_auto:low/v1/Pataks_USA/Products/Product/spicy-tikka-masala-curry-sauce.png","","0",3, recipe5);
        ingredientRepo.save(indoIngredient1);
        Ingredient indoIngredient2 = new Ingredient("Low-fat yogurt","https://www.verywellfit.com/thmb/riWcs2SBWLJ1HQX1wct3Ac__Z_s=/3000x2002/filters:fill(FFDB5D,1)/plain-yogurt-crop-c39077429cbf4fbbb7ad48c377b97dbc.jpg","","1 cup",0, recipe5);
        ingredientRepo.save(indoIngredient2);
        Ingredient indoIngredient4 = new Ingredient("ActiFry vegetable oil", "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/324844_2200-1200x628.jpg","","1 teaspoon",0, recipe5);
        ingredientRepo.save(indoIngredient4);
        Ingredient indoIngredient6 = new Ingredient("Whole peeled tomatoes", "https://images.heb.com/is/image/HEBGrocery/000125596","","1 package (~2 cups)",0, recipe5);
        ingredientRepo.save(indoIngredient6);
        Ingredient indoIngredient7 = new Ingredient("Water","https://www.exploratorium.edu/sites/default/files/styles/pod_small_wide_260_x_146/public/pages/DSC_2116-Edit-3.jpg?itok=9Q3s1Bty","","2 cups",0, recipe5);
        ingredientRepo.save(indoIngredient7);
        Ingredient indoIngredient8 = new Ingredient("ActiFry sugar", "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2022/04/sugar-g963832288_1280.jpg","","3 teaspoons",0, recipe5);
        ingredientRepo.save(indoIngredient8);
        Ingredient indoIngredient9 = new Ingredient("Coriander leaves, chopped", "https://c8.alamy.com/comp/RGWAR7/dried-chopped-coriander-leaves-in-white-ceramic-bowl-next-to-fresh-coriander-leaves-isolated-on-white-RGWAR7.jpg","","1 small bunch",0, recipe5);
        ingredientRepo.save(indoIngredient9);
        Review indoReview1 = new Review("Zak","Delicious",4.3);
        recipe5.addReview(indoReview1);
        recipeRepo.save(recipe5);


        Recipe recipe6= new Recipe("Vegetable Tofu Soup with Lemongrass and Coconut Milk (Vegetarian)", "/images/Tofu-vegetable-soup.jpg", category2, category1, category4);
        recipeRepo.save(recipe6);
        Step tofuStep1 = new Step("Step 1: Heat 2 tablespoons oil in a large pot over medium heat. Add onion; cook and stir until lightly browned, about 7 minutes. Stir in garlic and ginger; cook until fragrant, about 2 minutes. Add curry powder; cook and stir until fragrant, about 1 minute..");
        Step tofuStep2 = new Step("Step 2: Pour vegetable stock and coconut milk into the pot. Add yam, carrots, celery, lentils, lemongrass, and sugar. Increase heat to medium-high; bring to a boil. Reduce heat slightly; simmer until vegetables soften, 10 to 15 minutes. Season soup with salt.");
        Step tofuStep3 = new Step("Step 3: Heat remaining 3 tablespoons oil in a large nonstick skillet over medium heat. Add tofu in a single layer; cook until lightly browned, about 4 minutes per side. Stir tofu into soup.");
        recipe6.addStep(tofuStep1);
        recipe6.addStep(tofuStep2);
        recipe6.addStep(tofuStep3);
        Ingredient tofuIngredient1 = new Ingredient("Tablespoons vegetable oil, divided", "https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/5/1/1/7/2547115-1-eng-GB/Edible-oil-investments-more-than-double-to-646m-since-2003.jpg","","1",0, recipe6);
        ingredientRepo.save(tofuIngredient1);
        Ingredient tofuIngredient2 = new Ingredient("Large onion, chopped", "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,q_auto,w_auto/29523_stp-better-way-to-chop-onion-42","","1",0, recipe6);
        ingredientRepo.save(tofuIngredient2);
        Ingredient tofuIngredient3 = new Ingredient("Finely chopped garlic", "https://www.finecooking.com/app/uploads/cms/uploadedimages/images/cooking/articles/issues_31-40/fc40bs075-06_xlg.jpg","","4 tablespoons",0, recipe6);
        ingredientRepo.save(tofuIngredient3);
        Ingredient tofuIngredient4 = new Ingredient("Finely chopped ginger", "https://cdn.shopify.com/s/files/1/0300/0985/2037/articles/how_to_mince_ginger_1024x.jpg?v=1612871660","","2 tablespoons",0, recipe6);
        ingredientRepo.save(tofuIngredient4);
        Ingredient tofuIngredient5 = new Ingredient("Curry powder","https://saladswithanastasia.com/wp-content/uploads/2022/03/Madras-Curry-Powder-Social.jpg","","3 tablespoons",0, recipe6);
        ingredientRepo.save(tofuIngredient5);
        Ingredient tofuIngredient6 = new Ingredient("Vegetable stock","https://m.media-amazon.com/images/I/81P8QjzqPDL._SX679_.jpg","","4 cups",0, recipe6);
        ingredientRepo.save(tofuIngredient6);
        Ingredient tofuIngredient7 = new Ingredient("Coconut milk", "https://i5.peapod.com/c/XR/XRCPN.png","","14 ounces ",0, recipe6);
        ingredientRepo.save(tofuIngredient7);
        Ingredient tofuIngredient8 = new Ingredient("Yam, chunked","https://yayyayskitchen.files.wordpress.com/2017/02/unpeeledyams_2878_csc.jpg?w=840&h=700","","1",0, recipe6);
        ingredientRepo.save(tofuIngredient8);
        Ingredient tofuIngredient9 = new Ingredient("Large carrots", "https://crazykoreancooking.com/sites/default/files/styles/feature_image_752_x_500/public/Carrot-2-600.jpg?itok=sl8g1y-2","","4",0, recipe6);
        ingredientRepo.save(tofuIngredient9);
        Ingredient tofuIngredient10 = new Ingredient("Celery, chopped", "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,e_sharpen:50,f_auto,fl_lossy,g_faces,q_35,w_995/26054_celerychopping","","1 rib",0, recipe6);
        ingredientRepo.save(tofuIngredient10);
        Ingredient tofuIngredient11 = new Ingredient("Red lentils", "https://www.kitchenskip.com/wp-content/uploads/2020/09/red-lentil-f.jpg","","1 cup",0, recipe6);
        ingredientRepo.save(tofuIngredient11);
        Ingredient tofuIngredient12 = new Ingredient("Minced lemongrass","https://sweet2savoury.com/wp-content/uploads/2021/07/main2-scaled.jpg","","3 tablespoons",0, recipe6);
        ingredientRepo.save(tofuIngredient12);
        Ingredient tofuIngredient13 = new Ingredient("White sugar","https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700,800","","1 tablespoon",0, recipe6);
        ingredientRepo.save(tofuIngredient13);
        Ingredient tofuIngredient14 = new Ingredient("Salt, to taste", "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2022/02/TooMuchSodiuml-1051727580-770x533-1-650x428.jpg","","",0, recipe6);
        ingredientRepo.save(tofuIngredient14);
        Ingredient tofuIngredient15 = new Ingredient("Medium-firm tofu, cubed", "https://garlicdelight.com/wp-content/uploads/Block-tofu-1.jpg","","1 package",0, recipe6);
        ingredientRepo.save(tofuIngredient15);
        Review tofuReview1 = new Review("Zak","Delicious",4.3);
        recipe6.addReview(tofuReview1);
        recipeRepo.save(recipe6);
    }


}






