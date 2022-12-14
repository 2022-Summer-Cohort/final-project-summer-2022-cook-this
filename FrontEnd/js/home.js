import loginModal from "./components/loginModal.js"
export default function homeView() {
    return `
    <div class="container">
        <div id="closed-book">
            <div id="closed-book-image">
                <img id="closed-book-image-spec" src="/images/COOKBOOKCOVER-SMALLERFONT.png" alt="Cook This Book Cover">
            </div>
            <nav class="book-tabs-cover">
                <a id="search-btn" class="side-tabs nav-tabs-0">
                    <img src="/images/search-icon.png" alt="search icon" id="search-tab"/>
                </a>
                <a id="login-button" class="side-tabs nav-tabs-login" data-bs-toggle="modal"
                    data-bs-target="#loginModal">
                        <h2>Login</h2>
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
                  <a id="about-btn" class="side-tabs nav-tabs-5 tab-hover">
                <h2>About Us</h2>
                </a>
                <a id="home-btn" class="side-tabs nav-tabs-6">
                    <h2>Home</h2>
                </a>
            </nav>
        </div>
    </div>
    ${loginModal()}
    `
}