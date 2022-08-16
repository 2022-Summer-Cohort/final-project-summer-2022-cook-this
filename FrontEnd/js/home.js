export default function homeView() {
    return `
    <div class="container">
        <div id="closed-book">
            <div id="closed-book-image">
                <img id="closed-book-image-spec" src="/images/COOKBOOKCOVER-SMALLERFONT.png" alt="Cook This Book Cover">
            </div>
            <nav class="book-tabs-cover">
                <a href="#" class="side-tabs nav-tabs-0">
                    <img src="/images/search-icon.png" alt="search icon" id="search-tab">
                  </a>
                <a class="side-tabs nav-tabs-1" id="categories-btn">
                    <h2>Categories</h2>
                </a>
                <a  class="side-tabs nav-tabs-2" id="learn-btn">
                    <h2>Learn to Cook!</h2>
                </a>
                <a class="side-tabs nav-tabs-3" id="ingredients-btn">
                    <h2>Ingredient Info</h2>
                </a>
                <a class="side-tabs nav-tabs-4" id="new-recipe-btn">
                    <h2>Submit a Recipe</h2>
                  </a>
                <a id="home-btn" class="side-tabs nav-tabs-5" id="home-btn">
                    <h2>Home</h2>
                </a>
            </nav>
        </div>
    </div>
    `
}