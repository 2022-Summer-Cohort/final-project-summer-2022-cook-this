export default function openBookTabs() {
    return `
            <a id="search-btn" class="side-tabs nav-tabs-0">
                <img src="/images/search-icon.png" alt="search icon" id="search-tab"/>
                </a>
                <a id="home-btn" class="side-tabs nav-tabs-1">
                <h2>Home</h2>
                </a>
                <a id="categories-btn" class="side-tabs nav-tabs-2">
                <h2>Categories</h2>
                </a>
                <a id="ingredients-btn" class="side-tabs nav-tabs-3">
                <h2>Ingredient Info</h2>
                </a>
                <a id="new-recipe-btn" class="side-tabs nav-tabs-4">
                <h2>Submit a Recipe</h2>
                </a>
                <a id="learn-btn" class="side-tabs nav-tabs-5">
                <h2>Learn to Cook!</h2>
                </a>
        </nav>
    `
}