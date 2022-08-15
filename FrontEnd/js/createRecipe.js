import openBookTabs from "./components/openBookTabs.js"

export default function newRecipeView(){
return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <h1>Submit a New Recipe:</h1>
                    <div class="hr-short"><hr></div>
                    <div class="left-page-flex">
                        <div class="new-recipe-form d-flex flex-column ps-3">
                            <h5>Recipe Name:</h5>
                                <input id="recipe-name-in" type="text" placeholder="Ie. Captain Crunch Bars" class="form-control mb-3" aria-label="recipe name input" aria-describedby="inputGroup-sizing-default">
                            Ingredients & measurement:
                                <div class="input-group">
                                    <input id="ingredient-in" type="text" aria-label="Ingredient input" placeholder="ie. Lemon juice" class="form-control">
                                    <input id="measurement-in" type="text" aria-label="Measurement input" placeholder="ie. 1 cup" class="form-control">
                                </div>
                                <button class="btn btn-warning add-step-btn new-recipe-btns mb-3 align-self-start">Add Another Step</button>
                            Instructions:
                                <input id="step-in" type="text" placeholder="Step 1..." class="form-control mb-1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            <button class="btn btn-warning add-step-btn new-recipe-btns mb-3 align-self-start">Add Another Step</button>
                            Image:
                                <input id="img-url-in" type="text" placeholder="Image URL" class="form-control mb-1" aria-label="image url input" aria-describedby="inputGroup-sizing-default">
                            <h6 class="text-center">or </h6>
                            <button class="btn btn-warning new-recipe-btns mb-3 align-self-center">Upload Image</button>
                            <div class="input-group">
                                <label class="input-group-text" for="category-in">Category:</label>
                                <select class="form-select" id="category-in">
                                <option selected>Select a category...</option>
                                <option value="1">Food</option>
                                </select>
                            </div>
                            <br>
                            <input id="add-new-recipe" value="Preview Your Recipe!" class="btn btn-warning">
                        </div>
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