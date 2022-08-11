import makeFooter from "./footer.js";
import singleRecipeView from "./Recipe.js";
import singleCategoryView from "./singleCategory.js";

const container = document.querySelector("#anchor");

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


makeSingleCategoryView(1);