import makeFooter from "./footer.js";
import singleRecipeView from "./Recipe.js";
import singleCategoryView from "./singleCategory.js";
import homeView from "./home.js";
import allCategoriesView from "./categories.js";
import allIngredients from "./allIngredients.js";
import makeIngredientSection from "./singleIngredient.js";
import learn from "./learn.js";
import displaySingleVideo from "./components/LearnVideoViews.js";



const container = document.querySelector("#anchor");

function tabLinks(){
    const homeBtn = document.querySelector("#home-btn")
    const categoriesBtn = document.querySelector("#categories-btn")
    const ingredientsBtn = document.querySelector("#ingredients-btn")
    const newRecipeBtn = document.querySelector("#new-recipe-btn")
    const learnBtn = document.querySelector("#learn-btn")

    homeBtn.addEventListener("click", ()=>{
        makeHomeView();
    })
    categoriesBtn.addEventListener("click", ()=>{
        makeAllCategoriesView();
    })
    ingredientsBtn.addEventListener("click", ()=>{
        makeAllIngredients();
    })
    // newRecipeBtn.addEventListener("click", ()=>{
    //     makeNewRecipeView();
    // })
    learnBtn.addEventListener("click", ()=>{
        makeLearnView();
    })
}

function makeHomeView(){
    container.innerHTML=homeView();
    container.innerHTML+=makeFooter();
    tabLinks();
}


function makeAllIngredients() {
    fetch(`http://localhost:8080/api/ingredients`)
        .then(res => res.json())
        .then(ingredients => {
            console.log(ingredients);
            container.innerHTML = allIngredients(ingredients);
            container.innerHTML += makeFooter();
            tabLinks();

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

function makeAllCategoriesView(){
    fetch(`http://localhost:8080/api/categories`)
    .then(res => res.json())
    .then(categories =>{
        console.log(categories);
        container.innerHTML = allCategoriesView(categories)
        container.innerHTML += makeFooter();
        tabLinks();
        const categoryEl = document.querySelectorAll(".category-cards")

        categoryEl.forEach(recipe =>{
            const categoryBtn = recipe.querySelector(".category-btn");
            const categoryIdEl = recipe.querySelector(".category-id");

            categoryBtn.addEventListener("click", () =>{
                makeSingleCategoryView(categoryIdEl.value)
            })
        })
    })
    .catch(err => console.error(err))
}

function makeSingleCategoryView(categoryId){
    fetch(`http://localhost:8080/api/categories/${categoryId}`)
        .then(res => res.json())
        .then(categoryBuild => {
            console.log(categoryBuild);
            container.innerHTML = singleCategoryView(categoryBuild);
            container.innerHTML += makeFooter();
            tabLinks();
            
            const recipeCardEl = document.querySelectorAll(".recipe-cards")
            recipeCardEl.forEach(recipe =>{
                const recipeBtn = recipe.querySelector(".recipe-btn");
                const recipeIdEl = recipe.querySelector(".recipe-id");
                recipeBtn.addEventListener("click", ()=>{
                    makeRecipeView(recipeIdEl.value);
                })
            })
        })
        .catch(err => console.error(err))
}

function makeRecipeView(recipeId){
    const rightPageContainer = document.querySelector("#recipe-page")
    fetch(`http://localhost:8080/api/recipes/${recipeId}`)
    .then(res=>res.json())
    .then(recipeBuild => {
        console.log(recipeBuild);
        rightPageContainer.innerHTML = singleRecipeView(recipeBuild);
    })
    .catch(err => console.error(err))
}

function makeSingleVideoView(videoId){
    const rightPageContainer = document.querySelector(".right-page")
    console.log(displaySingleVideo(videoId));
    rightPageContainer.innerHTML = displaySingleVideo(videoId);
}

function makeLearnView(videoId){
    container.innerHTML = learn();
    container.innerHTML += makeFooter();
    tabLinks();

    const learnCardEl = document.querySelectorAll(".learn-card")
    learnCardEl.forEach(learnCard =>{
        const videoBtn = learnCard.querySelector(".video-btn");
        const videoIdEl = learnCard.querySelector(".learn-card-id");
        videoBtn.addEventListener("click", ()=>{
            makeSingleVideoView(videoIdEl.value);
        })
    })
}

//     const searchBtn = search.querySelector(".search-bar__submit");
//     const searchIN = searchInput.querySelector(".search-bar__input");

//     searchBtn.addEventListener("click", () =>{

//         fetch(`http://localhost:8080/api/recipes/${recipeIdEl.value}`)
//         .then(res=>res.json())
//         .then(recipeBuild => {
//             console.log(recipeBuild);
//             makeRecipeView(recipeBuild);


//         })
//         .catch(err => console.error(err))
//     })



//         })
//     }


// makeLearnView();

makeHomeView();







