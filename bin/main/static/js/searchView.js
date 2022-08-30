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
                    <div class="position-relative mt-5">
                        <img class="position-absolute top-100 start-50 translate-middle page-logo"
                        src="/images/cookThisPotLogo.png" alt="">
                    </div>  
                </section>

                <section class="right-page d-flex flex-column align-items-center" >
                    <div id="recipe-page">
                    </div>
                    <div class="position-relative mt-3">
                        <img class="position-absolute top-100 start-50 translate-middle page-logo"
                        src="/images/cookThisPotLogo.png" alt="">
                    </div>  
                </section>   
            </div>
                
            <nav class="book-tabs">
                ${openBookTabs()}
        </div>
    </div>
`
}
