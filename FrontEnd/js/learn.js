import openBookTabs from "./components/openBookTabs.js"

export default function learn() {
    return `
    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <div class="left-page-flex">
                        <h2 class="text-center">Select a Tutorial below:</h2>
                        <br>
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
                </section>
                <section class="right-page d-flex flex-column align-items-center" id="tutorial-page">
                    <div id="5-basic-cooking-skills">
                        <h2 class="text-center">How to Master 5 Basic Cooking Skills</h2>
                    <br>
                        <section class="video-flex">
                            <iframe <iframe class="video-frame-height" width="80%" height="40%" src="https://www.youtube-nocookie.com/embed/ZJy1ajvMU1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <br>
                            <div id="video-text" class="text-start">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus sit molestias veniam recusandae, illum asperiores vitae doloremque nesciunt, inventore in iusto at provident perspiciatis nemo. Temporibus numquam omnis nesciunt.
                                    <br> <br>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum quas possimus commodi inventore nam recusandae perferendis quod tempora voluptas blanditiis vero! Aut blanditiis maiores veniam tempora nisi, repellat dolores.<br>
                                    <a href="#"> -Website to be linked?-</a>
                                </p>
                            </div>
                            <input class="learn-id" type="hidden" value="4">
                        </section>
                    </div>
                        </section>
                    </div>
                </section> 
                <nav class="book-tabs">
                ${openBookTabs()}
                </nav>
            </div>
        
                
            </div>
    </div>
    `
}