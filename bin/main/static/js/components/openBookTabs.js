import loginModal from "./loginModal.js"
export default function openBookTabs() {
    return `
            <a id="search-btn" class="side-tabs nav-tabs-0">
                <img src="/images/search-icon.png" alt="search icon" id="search-tab"/>
            </a>
            <a id="login-button" class="side-tabs nav-tabs-login" data-bs-toggle="modal"
            data-bs-target="#loginModal">
                <h2>Login</h2>
            </a>
            <a id="home-btn" class="side-tabs nav-tabs-1 tab-hover">
                <h2>Home</h2>
            </a>
            <a id="categories-btn" class="side-tabs nav-tabs-2 tab-hover">
                <h2>Categories</h2>
            </a>
            <a id="ingredients-btn" class="side-tabs nav-tabs-3 tab-hover">
                <h2>Ingredient Info</h2>
            </a>
            <a id="new-recipe-btn" class="side-tabs nav-tabs-4 tab-hover">
                <h2>Submit a Recipe</h2>
            </a>
            <a id="learn-btn" class="side-tabs nav-tabs-5 tab-hover">
                <h2>Learn to Cook!</h2>
            </a>
            <a id="about-btn" class="side-tabs nav-tabs-6 tab-hover">
                <h2>About Us</h2>
            </a>
        </nav>
            ${loginModal()}
    `
}