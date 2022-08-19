import openBookTabs from "./components/openBookTabs.js"
import singleRecipeView from "./Recipe.js"

export default function singleCategoryView(category) {
    return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <h1 class="mb-3">${category.title}</h1>
                    <div class="left-page-flex">
                        <section class="recipe-list">
                            ${category.recipes.map(recipe =>{
                                return `
                                <div class="card recipe-cards text-center">
                                    <a class="recipe-btn">
                                        <img src="${recipe.picOfDish}" class="card-img-top" alt="Image of ${recipe.name}" />
                                        <div class="card-body">
                                            <h5 class="card-title">${recipe.name}</h5>
                                            <p class="card-text fw-light"><span class="avgRating"> ${recipe.avgRating} &starf;</span></p>
                                            <input class="recipe-id" type="hidden" value="${recipe.id}">
                                        </div>
                                    </a>
                                </div>
                                `
                            }).join("")
                        } 
                        </section>
                    </div>
                    <div class="position-relative mt-3">
                        <img class="position-absolute top-100 start-50 translate-middle page-logo"
                        src="/images/cookThisPotLogo.png" alt="">
                    </div>
                </section>

                <section class="right-page d-flex flex-column align-items-center" >
                <div  id="recipe-page">
                    ${singleRecipeView(category.recipes[0])}
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