export default function singleVideoView(videoId) {
    return `
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

    
    
    
    `



}