export default function mealPlanningView(videoId) {
    if(videoId==3){
    return `
        <section class="right-page " id="tutorial-page">
            <div id="meal-planning">
                <h2 class="text-center">Meal Planning for Begginers</h2>
                <br>
                <section class="video-flex">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/r1OSDnCDoGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br>
                    <div id="video-text" class="text-start">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus sit molestias veniam recusandae, illum asperiores vitae doloremque nesciunt, inventore in iusto at provident perspiciatis nemo. Temporibus numquam omnis nesciunt.
                            <br> <br>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum quas possimus commodi inventore nam recusandae perferendis quod tempora voluptas blanditiis vero! Aut blanditiis maiores veniam tempora nisi, repellat dolores.<br>
                            <a href="#"> -Website to be linked?-</a>
                        </p>
                    </div>
                    <input class="learn-id" type="hidden" value="3">
                </section>
            </div>
        </section>
    `
    }
}