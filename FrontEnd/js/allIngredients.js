export default function allIngredients(ingredients) {
    return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
            <section class="left-page">
                <h2 class="text-center">Select an Ingredient</h2>
                <br>
                <div class="recipe-flex">
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
            </section>
            <section class="right-page" id="ingredient-page">
               
              
            </div>
            </section>

            <nav class="book-tabs">
            </nav>
            
        </div>
    </div>
    `
}