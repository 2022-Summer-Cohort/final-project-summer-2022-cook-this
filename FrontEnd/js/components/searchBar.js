export default function makeSearchBar(recipes){
return `
<h2>Recipes</h2>
<div class="search-bar">
        
        <input id="search777" type="text" 
        class="search-bar__input" 
        placeholder="Enter your search"
         aria-label="search" />
        
        <button  id="searchBtn"  class="search-bar__submit"><i class="fa-solid fa-microphone-lines"></i><i
            class="fa fa-search" 
             aria-label="submit search" ></i>
            </button>

            
    </div>
    <ul class="list-group" id="list" > ${recipes.map(recipe =>{
        return `
    <li>${recipe.title}</li>
    `
}).join("")
}
    </ul>
    
    </div>
`
} 