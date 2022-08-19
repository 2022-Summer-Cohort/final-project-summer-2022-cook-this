import openBookTabs from "./components/openBookTabs.js"

export default function learn() {
    return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <h2 class="text-center mb-3">Select a Tutorial below:</h2>
                    <div class="video-list-flex">
                        <section class="recipe-list">
                            <div class="card recipe-cards learn-card text-center">
                                <a class="video-btn"> 
                                    <img src="/images/learn-thumbnails/knife-skills-thumbnail.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                                    <div class="card-body">
                                        <h5 class="card-title">Knife Skills 101 from Tasty</h5>
                                    </div>
                                    <input class="learn-card-id" type="hidden" value="1">
                                </a>
                            </div>
                        
                            <div class="card recipe-cards learn-card text-center">
                                <a class="video-btn"> 
                                    <img src="/images/learn-thumbnails/balanced-flavors-thumbnail.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                                    <div class="card-body">
                                        <h5 class="card-title">How to Create a Balance of Flavors in Your Cooking</h5>
                                    </div>
                                    <input class="learn-card-id" type="hidden" value="2">
                                </a>
                            </div>
                       
                            <div class="card recipe-cards learn-card text-center">
                                <a class="video-btn"> 
                                    <img src="/images/learn-thumbnails/meal-planning-thumbnail.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                                    <div class="card-body">
                                        <h5 class="card-title">MEAL PLANNING for Beginners | 6 Easy Steps</h5>
                                    </div>
                                    <input class="learn-card-id" type="hidden" value="3">
                                </a>
                            </div>
                        
                            <div class="card recipe-cards learn-card text-center">
                                <a class="video-btn">
                                    <img src="/images/learn-thumbnails/5-basic-cooking-skills-thumbnail.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                                    <div class="card-body">
                                    <h5 class="card-title">How To Master 5 Basic Cooking Skills | Gordon Ramsay!</h5>
                                    </div>
                                    <input class="learn-card-id" type="hidden" value="4">
                                </a>
                            </div>
                        
                            <div class="card recipe-cards learn-card text-center">
                                <a class="video-btn"> 
                                    <img src="/images/learn-thumbnails/budgeting-thumbnail.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                                    <div class="card-body">
                                    <h5 class="card-title">How to Budget for Groceries</h5>
                                    </div>
                                    <input class="learn-card-id" type="hidden" value="5">
                                </a>
                            </div>

                            <div class="card recipe-cards learn-card text-center">
                                <a class="video-btn">
                                    <img src="/images/learn-thumbnails/bookmarking-thumbnail.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                                    <div class="card-body">
                                    <h5 class="card-title">How to Manage Chrome Bookmarks Like a Pro (Website Tips)</h5>
                                    </div>
                                    <input class="learn-card-id" type="hidden" value="6">
                                </a>
                            </div>
                        </section>
                    </div>
                    <div class="position-relative mt-3">
                        <img class="position-absolute top-100 start-50 translate-middle img-fluid page-logo"
                        src="/images/cookThisPotLogo.png" alt="">
                    </div>
                </section>

                <section class="right-page d-flex flex-column align-items-center" >
                    <div id="tutorial-page">
                        <h2 class="text-center mb-3">How to Master 5 Basic Cooking Skills</h2>
                        <section class="video-flex">
                            <iframe <iframe class="video-frame-height" width="80%" height="40%" src="https://www.youtube-nocookie.com/embed/ZJy1ajvMU1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <br>
                            <div id="video-text" class="text-start">
                                <p>
                                We've compiled five previous videos into one, helping you to master your basic skills in the kitchen. Cooking rice, chopping an onion, sharpening a knife, deboning a fish and cooking pasta.
                                From Gordon's Ultimate Cookery Course.
                                <br>
                                    <a href="https://www.youtube.com/user/gordonramsay"> -Gordon Ramsey's YouTube Page-</a>
                                </p>
                            </div>
                        </section>
                        
                    </div>
                    <div class="position-relative mt-4">
                        <img class="position-absolute top-100 start-50 translate-middle page-logo"
                        src="/images/cookThisPotLogo.png" alt="">
                    </div>
                </section>
                        
                    </div>
                        
                </section> 
                <nav class="book-tabs">
                ${openBookTabs()}
            </div>
        
                
            </div>
    </div>
    `
}