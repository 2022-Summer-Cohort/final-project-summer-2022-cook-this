import openBookTabs from "./components/openBookTabs.js"
import makeIngredientSection from "./singleIngredient.js"

export default function allIngredients(ingredients) {
    return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
            <section class="left-page">
                <h2 class="text-center">Select an Ingredient</h2>
                <br>
                <div class="left-page-flex">
                    <section class="recipe-list">
                    ${ingredients.map(ingredient => {
                        return `
                            <div class="card recipe-cards text-center">
                                <a class="ingredient-button">
                                    <img src="${ingredient.imageUrl}" class="card-img-top" alt="Thumbnail of ${ingredient.name}" />
                                    <div class="card-body">
                                        <h5 class="card-title">${ingredient.name}</h5>
                                        <p class="card-text">Click for more info</p>
                                        <input type="hidden" class="ingredient-id" value="${ingredient.id}">
                                    </div>
                                </a>
                            </div>
                        `
                    }).join("")
                }
                    </section>
                </div>
            
                <div class="position-relative mt-3">
                    <img class="position-absolute top-100 start-50 translate-middle img-fluid page-logo"
                    src="/images/cookThisPotLogo.png" alt="">
                </div>
            </section>

            <section class="right-page">
               <div id="ingredient-page">
               </div>
               <div class="position-relative mt-3">
                    <img class="position-absolute top-100 start-50 translate-middle page-logo"
                    src="/images/cookThisPotLogo.png" alt="">
                </div>
            </div>
            
            </section>

            <nav class="book-tabs">
            ${openBookTabs()}
            
        </div>
    </div>
    `
}