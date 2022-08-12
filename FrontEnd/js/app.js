import makeFooter from "./footer.js";
import singleRecipeView from "./Recipe.js";
import singleCategoryView from "./singleCategory.js";
import homeView from "./home.js";
import allCategoriesView from "./categories.js";
import allIngredients from "./allIngredients.js";
import makeIngredientSection from "./singleIngredient.js";
import openBookTabs from "./components/openBookTabs.js";


const container = document.querySelector("#anchor");


function makeAllIngredients() {
    fetch(`http://localhost:8080/api/ingredients`)
        .then(res => res.json())
        .then(ingredients => {
            console.log(ingredients);
            container.innerHTML = allIngredients(ingredients);
            container.innerHTML += makeFooter();

        // open book tabs
            const tabsContainer = document.querySelector(".book-tabs")
            tabsContainer.innerHTML = openBookTabs();
            const homeBtn = tabsContainer.querySelector("#home-btn")
            const categoriesBtn = tabsContainer.querySelector("#categories-btn")
            const ingredientsBtn = tabsContainer.querySelector("#ingredients-btn")
            const newRecipeBtn = tabsContainer.querySelector("#new-recipe-btn")
            const learnBtn = tabsContainer.querySelector("#home-btn")

            homeBtn.addEventListener("click", ()=>{
                makeHomeView();
            })

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

function makeHomeView(){
    container.innerHTML=homeView();
    container.innerHTML+=makeFooter();
    
    const categoriesBtn = document.querySelector("#categories-btn")
    categoriesBtn.addEventListener("click", () =>{
        container.innerHTML=makeAllCategoriesView();
        container.innerHTML+=makeFooter();
    })
}

function makeAllCategoriesView(){
    fetch(`http://localhost:8080/api/categories`)
    .then(res => res.json())
    .then(categories =>{
        console.log(categories);
        container.innerHTML = allCategoriesView(categories)
        container.innerHTML += footer();

        // const categoryViewBtn = documanet.querySelectorAll(".card recipe-cards text-center")
        // categoryViewBtn.forEach(categoryEl => {
        //     const categoryIdEl = categoryEl.querySelector(".categoryId");
        //     categoryEl.addEventListener("click",()=>{
        //       makeCategoryView("catogoryIdEl.value");
        //     })
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


makeHomeView();


    const searchBtn = search.querySelector(".search-bar__submit");
    const searchIN = searchInput.querySelector(".search-bar__input");

    searchBtn.addEventListener("click", () =>{

        fetch(`http://localhost:8080/api/recipes/${recipeIdEl.value}`)
        .then(res=>res.json())
        .then(recipeBuild => {
            console.log(recipeBuild);
            makeRecipeView(recipeBuild);


        })
        .catch(err => console.error(err))
    })

    function makeRecipeView (Recipe){
        rightPageContainer.innerHTML = singleRecipeView(recipeBuild);
        const recipeReviewBtn = document.querySelectorAll(".reviews-btn");
        recipeReviewBtn.addEventListener("click", () => {
        recipe    
           

        })
        
        

    }





