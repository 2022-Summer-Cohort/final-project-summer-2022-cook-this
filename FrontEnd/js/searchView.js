import openBookTabs from './components/openBookTabs.js';
import makeSearchBar from './components/searchBar.js';
export default function searchView(Recipes) {
	return `
<div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <h1>Search Recipes</h1>
                    <br>
                    ${makeSearchBar(Recipes)}
                    
                </section>

                <section class="right-page d-flex flex-column align-items-center" id="recipe-page">
            
                </section>   
            </div>
        
            <nav class="book-tabs">
                ${openBookTabs()}
        </div>
    </div>
`
}
