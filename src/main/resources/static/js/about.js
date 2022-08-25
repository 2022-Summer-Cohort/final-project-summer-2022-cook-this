import openBookTabs from "./components/openBookTabs.js"
export default function aboutView(){
    return `
        <div class="container open-container">
        <div id="open-border">
            <div id="open-book">
                <section class="left-page pt-4">
                    <div class="d-flex ps-3 pe-5 mb-3">
                        <h2 class="align-self-center text-end">About the Cook This! Project</h2>
                        <img id="pot-logo-about" src="/images/cookThisPotLogo.png"
                            alt="Cook this! logo on a pot vector">
                    </div>
                    <div class="hr-short"><hr/></div>
                    <div class="left-about-flex">
                        <p class="about-content ">
                            &nbsp;&nbsp; Cook This! combines a love for food with the intent on sharing it, without the bulky (and
                            sometimes boring) blog posts and annoying ads. We want information to be readily accesible
                            and easy to use for everyone, while presenting it in a fun and unqiue way.
                            We also want to help everyone understand that cooking is not just for fancy kitchens and
                            full fridges, but that everyone can eat great, healthy meals within any budget and
                            lifestyle.
                            <br><br>
                            &nbsp;&nbsp;With that in mind, continueing development will include a larger emphasis on
                            education and adjustable recipes. Further development will also include accesiblility
                            features and mobile-friendly designs.
                            <br><br>
                            &nbsp;&nbsp;Six passionate developers from We Can Code IT came together to create this project. See
                            their indidivual informtion and how to contact everyone on the right page.
                        </p>
                    </div>
                    <div class="position-relative">
                        <img class="position-absolute top-100 start-50 translate-middle img-fluid page-logo"
                            src="/images/cookThisPotLogo.png" alt="">
                    </div>
                </section>
                <section class="right-page text-center dev-info-page">
                    <h2 class="mt-5">Project Developers</h2>
                    <div id="dev-card-flex">
                        <div class="card dev-cards">
                            <div class="row g-0">
                                <h5 class="card-title ">Alex K. Stein</h5>
                                <div class="col-7">
                                    <div class="card-body text-start dev-body">
                                        <div class=" dev-info">
                                            <span class="role fw-light">Front-end Dev</span>
                                            <a href="http://AlexKStein.github.io"
                                                class="portfolio-link fw-bold">Portfolio</a>
                                            <div class="row">
                                                <a href="https://www.linkedin.com/in/alexkstein/" class="col "><img
                                                        class="linkedin social-icon img-fluid"
                                                        src="/images/linkedin-logo.png" alt="linkedIn Logo"></a>
                                                <a href="https://github.com/AlexKStein" class="col "><img
                                                        class="github social-icon img-fluid"
                                                        src="/images/github-logo.png" alt="GitHub logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-5 align-self-center dev-img-left">
                                    <img src="/images/devPics/stein-headshot-sm.jpg" class="dev-card-img rounded"
                                        alt="Stein's headhost">
                                </div>
                            </div>
                        </div>

                        <div class="card dev-cards">
                            <div class="row g-0">
                                <h5 class="card-title ">Arsema Berhe</h5>
                                <div class="col-5 align-self-center ">
                                    <img src="/images/devPics/arsi-head.jpg"
                                        class="dev-card-img align-self-center rounded" alt="Arsema's Headshot">
                                </div>
                                <div class="col-7">
                                    <div class="card-body text-end dev-body">

                                        <div class=" dev-info">
                                            <span class="role fw-light">Back-end Dev</span>
                                            <a href="http://Arsi2022.github.io"
                                                class="portfolio-link fw-bold">Portfolio</a>
                                            <div class="row">
                                                <a href="https://www.linkedin.com/in/arsemaberhe/" class="col "><img
                                                        class="linkedin social-icon img-fluid"
                                                        src="/images/linkedin-logo.png" alt="linkedIn Logo"></a>
                                                <a href="https://github.com/Arsi2022" class="col "><img
                                                        class="github social-icon img-fluid"
                                                        src="/images/github-logo.png" alt="GitHub logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card dev-cards">
                            <div class="row g-0">
                                <h5 class="card-title ">Mia Olivera</h5>
                                <div class="col-7">
                                    <div class="card-body text-start dev-body">
                                        <div class=" dev-info">
                                            <span class="role fw-light">Front-end Dev</span>
                                            <a href="http://miaroseolivera.github.io"
                                                class="portfolio-link fw-bold">Portfolio</a>
                                            <div class="row">
                                                <a href="https://www.linkedin.com/in/mia-diloreto-olivera-0b1941233"
                                                    class="col "><img class="linkedin social-icon img-fluid"
                                                        src="/images/linkedin-logo.png" alt="linkedIn Logo"></a>
                                                <a href="https://github.com/miaroseolivera" class="col "><img
                                                        class="github social-icon img-fluid"
                                                        src="/images/github-logo.png" alt="GitHub logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-5 align-self-center ">
                                    <img src="/images/devPics/mia-head.jpg"
                                        class="dev-card-img align-self-center rounded" alt="Mia's headhost">
                                </div>
                            </div>
                        </div>


                        <div class="card dev-cards">
                            <div class="row g-0">
                                <h5 class="card-title ">Lex Nathans</h5>
                                <div class="col-5 align-self-center ">
                                    <img src="/images/devPics/lex-head.jpg"
                                        class="dev-card-img align-self-center rounded" alt="Lex's Headshot">
                                </div>
                                <div class="col-7">
                                    <div class="card-body text-end dev-body">

                                        <div class=" dev-info">
                                            <span class="role fw-light">Back-end Dev</span>
                                            <a href="http://anathans1.github.io"
                                                class="portfolio-link fw-bold">Portfolio</a>
                                            <div class="row">
                                                <a href="https://www.linkedin.com/in/alex-nathans/" class="col "><img
                                                        class="linkedin social-icon img-fluid"
                                                        src="/images/linkedin-logo.png" alt="linkedIn Logo"></a>
                                                <a href="https://github.com/anathans1" class="col "><img
                                                        class="github social-icon img-fluid"
                                                        src="/images/github-logo.png" alt="GitHub logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card dev-cards">
                            <div class="row g-0">
                                <h5 class="card-title ">Pedro Barbosa</h5>
                                <div class="col-7">
                                    <div class="card-body text-start dev-body">
                                        <div class=" dev-info">
                                            <span class="role fw-light">Front-end Dev</span>
                                            <a href="http://pwbarbosa.github.io"
                                                class="portfolio-link fw-bold">Portfolio</a>
                                            <div class="row">
                                                <a href="https://www.linkedin.com/in/pwbarbosa/" class="col "><img
                                                        class="linkedin social-icon img-fluid"
                                                        src="/images/linkedin-logo.png" alt="linkedIn Logo"></a>
                                                <a href="https://github.com/pwbarbosa" class="col "><img
                                                        class="github social-icon img-fluid"
                                                        src="/images/github-logo.png" alt="GitHub logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-5 align-self-center ">
                                    <img src="/images/devPics/pedro-head.jpg"
                                        class="dev-card-img align-self-center rounded" alt="Pedro's headhost">
                                </div>
                            </div>
                        </div>

                        <div class="card dev-cards">
                            <div class="row g-0">
                                <h5 class="card-title">Zakariya Mohamud</h5>
                                <div class="col-5 align-self-center ">
                                    <img src="/images/devPics/zak-head.jpg"
                                        class="dev-card-img align-self-center rounded" alt="Zackaryia's Headshot">
                                </div>
                                <div class="col-7">
                                    <div class="card-body text-end dev-body">
                                        <div class=" dev-info">
                                            <span class="role fw-light">Back-end Dev</span>
                                            <a href="http://ZakariyaMohamud.github.io"
                                                class="portfolio-link fw-bold">Portfolio</a>
                                            <div class="row">
                                                <a href="https://www.linkedin.com/in/zakariya-mohamud/"
                                                    class="col "><img class="linkedin social-icon img-fluid"
                                                        src="/images/linkedin-logo.png" alt="linkedIn Logo"></a>
                                                <a href="https://github.com/ZakariyaMohamud" class="col "><img
                                                        class="github social-icon img-fluid"
                                                        src="/images/github-logo.png" alt="GitHub logo"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-relative">
                        <img class="position-absolute top-100 start-50 translate-middle img-fluid page-logo"
                            src="/images/cookThisPotLogo.png" alt="">
                    </div>
                </section>
                </section>
            </div>
            <nav class="book-tabs">
                ${openBookTabs()}
        </div>
    </div>
    `
}