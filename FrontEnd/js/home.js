export default function home() {
    return `
    <div class="container">
        <!-- <header>
        </header> -->
        <div id="closed-book">
            <div id="closed-book-image">
                <img id="closed-book-image-spec" src="/images/COOKBOOKCOVER-SMALLERFONT.png" alt="Cook This Book Cover">
            </div>
            <nav class="book-tabs-cover">
                <a href="#" class="side-tabs nav-tabs-0">
                    <img src="/images/search-icon.png" alt="search icon" id="search-tab">
                  </a>
                <a href="./categories.html" class="side-tabs nav-tabs-2">
                    <h2>Categories</h2>
                </a>
                <a href="./learn.html" class="side-tabs nav-tabs-3">
                    <h2>Learn to Cook!</h2>
                </a>
                <a href="./ingredients.html" class="side-tabs nav-tabs-4">
                    <h2>Ingredient Info</h2>
                </a>
                <a href="#" class="side-tabs nav-tabs-4">
                    <h2>Submit a Recipe</h2>
                  </a>
            </nav>
        </div>
    </div>
    `
}