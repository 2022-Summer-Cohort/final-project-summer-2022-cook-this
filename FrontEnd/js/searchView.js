import openBookTabs from './components/openBookTabs.js';
import makeSearchBar from './components/searchBar.js';
export default function searchView(Recipes) {
	return `
<div class="container">
<div id="open-border">
    <div id="open-book">
        <section class="left-page">

            <h1>Search</h1>
            <br>
            <div class="left-page-flex">
            <section class="recipe-list">
               ${makeSearchBar(Recipes)}
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
`;
}
