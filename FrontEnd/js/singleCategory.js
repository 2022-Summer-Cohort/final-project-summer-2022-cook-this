export default function singleCategoryView(category) {
    return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <h1>${category.title}</h1>
                    <br>
                    <div class="recipe-flex">
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