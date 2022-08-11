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
                                <a class="${ingredient.name}">
                                    <img src="${ingredient.imageUrl}" class="card-img-top" alt="Thumbnail of ${ingredient.name}" />
                                    <div class="card-body">
                                        <h5 class="card-title">${ingredient.name}</h5>
                                        <p class="card-text">See all recipes with ${ingredient.name}</p>
                                        <input type="hidden" class="ingredient-id" value="${ingredient.id}">
                                    </div>
                                </a>
                            </div>
                        `
                    }).join()
                }
                    </section>
                </div>
            </section>
            <section class="right-page">
                <h2>&nbsp;</h2>
                <section class="recipe-list recipe-flex">
                    
                </section>
              
            </div>
            </section>
            <nav class="book-tabs" >
                <a href="#" class="side-tabs nav-tabs-0">
                    <img src="/images/search-icon.png" alt="search icon" id="search-tab">
                  </a>
                  <a href="./home.html" class="side-tabs nav-tabs-1">
                    <h2>Home</h2>
                  </a>
                  <a href="./categories.html" class="side-tabs nav-tabs-2">
                    <h2>Categories</h2>
                  </a>
                  <a href="./ingredients.html" class="side-tabs nav-tabs-3">
                    <h2>Ingredient Info</h2>
                  </a>
                  <a href="#" class="side-tabs nav-tabs-4">
                    <h2>Submit a Recipe</h2>
                  </a>
                  <a href="./learn.html" class="side-tabs nav-tabs-5">
                    <h2>Learn to Cook!</h2>
                  </a>
            </nav>
            
        </div>
    </div>
    `
}