import openBookTabs from "./components/openBookTabs.js"

export default function singleCategoryView(category) {
    return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <h1>${category.title}</h1>
                    <br>
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
                </section>

                <section class="right-page d-flex flex-column align-items-center" id="recipe-page">
                    
            </div>
            </section>
            <nav class="book-tabs">
                ${openBookTabs()}
            </nav>
        </div>
    </div>
    `
}