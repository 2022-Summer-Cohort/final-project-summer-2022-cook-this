import openBookTabs from "./components/openBookTabs.js"
export default function newRecipeView(categories){
return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <h1>Submit a New Recipe:</h1>
                    <div class="hr-short"><hr></div>
                    <div class="left-page-flex">
                        <form class="new-recipe-form d-flex flex-column ps-3">
                            <h5>Recipe Name:</h5>
                                <input required id="recipe-name-in" type="text" placeholder="Ie. Captain Crunch Bars" class="form-control mb-3" aria-label="recipe name input" aria-describedby="inputGroup-sizing-default">
                            Ingredients & measurement:
                            <div id="ingedient-in-flex">
                                <div class="input-group ingredients">
                                    <input required type="text" aria-label="Ingredient input" placeholder="ie. Lemon juice" class="form-control ingredient-in">
                                    <input required class="measurement-in form-control" type="text" aria-label="Measurement input" placeholder="ie. 1 cup">
                                </div>
                                <div class="extra-ingredients">

                                </div>
                            </div>
                                <button class="btn btn-warning add-step-btn new-recipe-btns mb-3 align-self-start" id="add-ingredient-button">Add Another Ingredient</button>
                            Instructions:
                            <div id="steps-in-flex">
                                <input required type="text" placeholder="Step 1..." class="form-control mb-1 step-in" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                <div class="extra-steps">

                                </div>
                            </div>
                            <button class="btn btn-warning add-step-btn new-recipe-btns mb-3 align-self-start" id="add-step-button">Add Another Step</button>
                            Image:
                                <input required id="img-url-in" type="text" placeholder="Image URL" class="form-control mb-1" aria-label="image url input" aria-describedby="inputGroup-sizing-default">
                            <h6 class="text-center">or *Uploads Currently Disabled</h6>
                            <button disabled class="btn btn-warning new-recipe-btns mb-3 align-self-center">Upload Image</button>
                            <div class="input-group">
                                <label class="input-group-text" for="category-in">Category:</label>
                                <select required class="form-select" id="category-in">
                                <option value="" selected>Select a category...</option>
                                ${categories.map(category => {
                                    return `
                                    <option value="${category.id}">${category.title}</option>
                                    `
                                }).join("")
                            }
                                </select>
                            </div>
                            <br>
                            <input type="submit" id="add-new-recipe" value="Preview Your Recipe!" class="btn btn-warning">
                        </form>
                    </div>
                </section>

                <section class="right-page d-flex flex-column align-items-center" id="recipe-page">
                    
                </section>
            </div>
            </section>
            <nav class="book-tabs">
                ${openBookTabs()}
            </nav>
        </div>
    </div>

`
}