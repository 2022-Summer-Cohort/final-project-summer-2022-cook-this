export default function singleRecipeView(recipe) {
    return `
        <div id="title">
            <h1 class="title-header">${recipe.name}</h1>

            <button type="button" class="btn btn-light reviews-btn" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                Overall Rating: <span class="avgRating"> ${recipe.avgRating}&starf;'s</span>
                <span class="review-tip ">Click for Ratings & Reviews</span>
            </button>

        </div>

        <figure class="recipe-image">
            <img src="${recipe.picOfDish}" class="img-fluid" alt="Picture of ${recipe.name}">
        </figure>

        <section id="ingredients">
            <h2 class="right-page-headers">Ingredients</h2>
            <div id="ingredients-list">
            ${recipe.ingredients.map(ingredient =>{
                return `
                    <div class="ingredient-list-item">
                        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                        <span> ${ingredient.ingredientMeasurement} ${ingredient.name}</span>
                    </div>
                `
                }).join("")
            }
            </div>
        </section>
        <br>
        <section id="instructions">
            <h2 class="right-page-headers">Instructions</h2>
            <section class="inst-list-div">
                <ul id="instruction-list">
                    ${recipe.steps.map(step =>{
                        return `
                        <li>
                            ${step.instructions}
                        </li>
                        `
                        }).join("")  
                    }
                    <br>
                        <h4 class="text-center">Enjoy!</h4>
                </ul>
            </section>
        </section>
    `
}