export default function makeSearchBar(recipes){
return `
<h5>click below to search</h5>
<div class="search-bar mb-3">
        
        <input id="search777" type="text" 
        class="search-bar__input" 
        placeholder="Enter your search"
         aria-label="search" />
        
        <button  id="searchBtn"  class="search-bar__submit">
            <span>Search</span>
            <img src="/images/search-icon.png" alt="search icon" class="search-img">
        </button>
    </div>     
    <section class="recipe-list search-left" id="listRecipes">
            ${recipes.map(recipe =>{
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

`
} 