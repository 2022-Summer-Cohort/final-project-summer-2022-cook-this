export default function knifeSkillsView(videoId) {
    return `
    <!DOCTYPE html>
<html lang="en">

    <div class="container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page">
                    <div class="recipe-flex">
                        <h2 class="text-center">Select a Tutorial below:</h2>
                        <br>
                        <section class="recipe-list">
                            
                            <div class="card recipe-cards text-center">
                                <img src="/images/learn-thumbnails/knife-safety-thumbnails.jpg" class="card-img-top"
                                    alt="Delicious Apple Pie" />
                                <div class="card-body">
                                    <h5 class="card-title">Knife Skills 101 from Tasty</h5>
                                    <p class="card-text">Learn some kitchen-ninja knife skills</p>
                                </div>
                                <input class="learn-card-id" type="hidden" value="1">
                            </div>
                           
                            <div class="card recipe-cards text-center">
                                <img src="/images/learn-thumbnails/balanced-flavors-thumbnail.jpg" class="card-img-top"
                                    alt="Delicious Apple Pie" />
                                <div class="card-body">
                                    <h5 class="card-title">How to Create a Balance of Flavors in Your Cooking</h5>
                                    <p class="card-text">Learn how to balance flavors using only your talent and
                                        creativity</p>
                                </div>
                                <input class="learn-card-id" type="hidden" value="2">
                            </div>

                            <div class="card recipe-cards text-center">
                                <img src="/images/learn-thumbnails/meal-planning-thumbnail.jpg" class="card-img-top"
                                    alt="Delicious Apple Pie" />
                                <div class="card-body">
                                    <h5 class="card-title">MEAL PLANNING for Beginners | 6 Easy Steps</h5>
                                    <p class="card-text">Plan our week's meals all at once. No more scrambling in the
                                        Mcdonalds line last minute.</p>
                                </div>
                                <input class="learn-card-id" type="hidden" value="3">
                            </div>

                            <div class="card recipe-cards text-center">
                                <img src="/images/learn-thumbnails/5-basic-cooking-skills-thumbnail.jpg"
                                    class="card-img-top" alt="Delicious Apple Pie" />
                                <div class="card-body">
                                    <h5 class="card-title">How To Master 5 Basic Cooking Skills | Gordon Ramsay!</h5>
                                    <p class="card-text">Cook intuitively like a master</p>
                                </div>
                                <input class="learn-card-id" type="hidden" value="4">
                            </div>

                            <div class="card recipe-cards text-center">
                                <img src="/images/learn-thumbnails/budgeting-thumbnail.jpg" class="card-img-top"
                                    alt="Delicious Apple Pie" />
                                <div class="card-body">
                                    <h5 class="card-title">How to Budget for Groceries</h5>
                                    <p class="card-text">Not rich? No problem. Watch this for basic bugeting for
                                        beginners when your ballin' on a budget</p>
                                </div>
                                <input class="learn-card-id" type="hidden" value="5">
                            </div>

                            <div class="card recipe-cards text-center">
                                <img src="/images/learn-thumbnails/bookmarking-thumbnail.jpg" class="card-img-top"
                                    alt="Delicious Apple Pie" />
                                <div class="card-body">
                                    <h5 class="card-title">How to Manage Chrome Bookmarks Like a Pro (Website Tips)</h5>
                                    <p class="card-text">Found a recipe online? Find out how to save it to your
                                        bookmarks in a recipe folder</p>
                                </div>
                                <input class="learn-card-id" type="hidden" value="6">
                            </div>
                        </section>
                    </div>
                </section>



                <section class="right-page " id="tutorial-page">
                    <div id="knife-skills-video">
                        <h2 class="text-center">Knife Skills 101 from Tasty</h2>
                        <br>
                        <section class="video-flex">
                            <iframe class="video-frame-height" width="80%" height="40%"
                                src="https://www.youtube-nocookie.com/embed/G-Fg7l7G1zw" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <br>
                            <div id="video-text" class="text-start">
                                <p>
                                    If you've ever struggled with basic knife skills then this video is definitely for
                                    you.
                                    Brunoise, small dice, medium dice, large dice, Julienne, batonnet, rough chop, fine
                                    mince or
                                    chiffonade whatever the case may be, it takes practice but still with it because you
                                    can
                                    do it!
                                    <br> <br>
                                    LOVE CHEF BILLY PARISI AND WANT MORE AMAZING RECIPES?<br>
                                    <a href="https://billyparisi.com"> -Website-</a>
                                </p>
                            </div>
                            <input class="learn-id" type="hidden" value="1">
                        </section>
                    </div>
                </section>
            </div>
            </section>
            <nav class="book-tabs">
                <a href="#" class="side-tabs nav-tabs-0">
                    <img src="/images/search-icon.png" alt="search icon" id="search-tab">
                </a>
                <a href="./home.html" class="side-tabs nav-tabs-1">
                    <h2>Home</h2>
                </a>
                <a href="./categories.html" class="side-tabs nav-tabs-2">
                    <h2>Categories</h2>
                </a>
                <a href="./ingredients.html" class="side-tabs nav-tabs-3">
                    <h2>Ingredient Info</h2>
                </a>
                <a href="#" class="side-tabs nav-tabs-4">
                    <h2>Submit a Recipe</h2>
                </a>
                <a href="./learn.html" class="side-tabs nav-tabs-5">
                    <h2>Learn to Cook!</h2>
                </a>
            </nav>
        </div>
    </div>





    `



}