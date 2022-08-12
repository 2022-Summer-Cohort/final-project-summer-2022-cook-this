import makeFooter from "./footer.js";
import singleRecipeView from "./Recipe.js";
import singleCategoryView from "./singleCategory.js";
import homeView from "./home.js";
import allCategoriesView from "./categories.js";
import allIngredients from "./allIngredients.js";
import makeIngredientSection from "./singleIngredient.js";

const container = document.querySelector("#anchor");

function makeAllIngredients() {
    fetch(`http://localhost:8080/api/ingredients`)
    .then(res => res.json())
    .then(ingredients => {
        console.log(ingredients);
        container.innerHTML = allIngredients(ingredients);
        container.innerHTML += makeFooter();

        const ingredientPageEl = container.querySelector(".right-page");
        const ingredientCardEl = container.querySelectorAll(".card");
        ingredientCardEl.forEach(ingredient => {
            const ingredientButton = ingredient.querySelector(".ingredient-button")
            let ingredientIdEl = ingredient.querySelector(".ingredient-id");

            ingredientButton.addEventListener("click", () => {
                fetch(`http://localhost:8080/api/ingredients/${ingredientIdEl.value}`)
                .then(res => res.json())
                .then(ingredient => {
                    console.log(ingredient);
                    ingredientPageEl.innerHTML = makeIngredientSection(ingredient);
                })
            });  
        });
    })  
}




// makeAllIngredients();



function makeHomeView(){
    container.innerHTML=homeView();
    container.innerHTML+=makeFooter();
    
    const categoriesBtn = document.querySelector("#categories-btn")
    categoriesBtn.addEventListener("click", () =>{
        container.innerHTML=makeAllCategoriesView();
        container.innerHTML+=makeFooter();
    })

    // const ingredientsBtn = document.querySelector("")
}

function makeAllCategoriesView(){
    fetch(`http://localhost:8080/api/categories`)
    .then(res => res.json())
    .then(categories =>{
        console.log(categories);
        container.innerHTML = allCategoriesView(categories)
        container.innerHTML += footer();
    })
}
function makeSingleCategoryView(categoryId){
    fetch(`http://localhost:8080/api/categories/${categoryId}`)
        .then(res => res.json())
        .then(categoryBuild => {
            console.log(categoryBuild);
            container.innerHTML = singleCategoryView(categoryBuild);
            container.innerHTML += makeFooter();

            const rightPageContainer = document.querySelector("#recipe-page")
            const recipeCardEl = document.querySelectorAll(".recipe-cards")

            recipeCardEl.forEach(recipe =>{
                const recipeBtn = recipe.querySelector(".recipe-btn");
                const recipeIdEl = recipe.querySelector(".recipe-id");

                recipeBtn.addEventListener("click", () =>{
                    fetch(`http://localhost:8080/api/recipes/${recipeIdEl.value}`)
                    .then(res=>res.json())
                    .then(recipeBuild => {
                        console.log(recipeBuild);
                        rightPageContainer.innerHTML = singleRecipeView(recipeBuild);
                    })
                    .catch(err => console.error(err))
                })
                
            
            })
        })
        .catch(err => console.error(err))
}

// const learnBtn = document.querySelector(".recipe-cards")
// learnBtn.addEventListener("click", () =>{
//     const learnIdEl = document.querySelector(".learn-card-id");
//     singleVideoView(learnIdEl.value);
// })

// $('.show-1-yes').click(function() {
//     $('#target-1').show(500);
//     $('.show-1-yes').hide(0);
//     $('.hide-1-yes').show(0);
// });
// $('.hide-1-yes').click(function() {
//     $('#target-1').hide(500);
//     $('.show-1-yes').show(0);
//     $('.hide-1-yes').hide(0);
// });
/*  show 2 - hide 2  */
// $('.show-2-yes').click(function() {
//     $('#target-2').show(500);
//     $('.show-2-yes').hide(0);
//     $('.hide-2-yes').show(0);
// });
// $('.hide-2-yes').click(function() {
//     $('#target-2').hide(500);
//     $('.show-2-yes').show(0);
//     $('.hide-2-yes').hide(0);
// });

// const openKnifeSafetyVideo = container.querySelector("#knife-safety")
// openKnifeSafetyVideo.addEventListener("click", () => {
//   popup.classList.add(".open-popup");
// });





makeHomeView();
