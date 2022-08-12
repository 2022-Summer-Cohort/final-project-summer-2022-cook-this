export default function makeFooter() {
    return `
    <footer class="container-fluid text-center" id="footer">
        <div class="row">
            <div class="col"></div>
            <p class="copyright col">&copy; 2022, Cook This!  </p>
            <div class="dev-list col">
                <h4>Devs:</h4>
                <div class="fw-light">
                    <div  class="dev-btn" data-bs-toggle="modal" data-bs-target="#stein-popup">
                        Alex K. Stein
                    </div>
                    <div id="pedro-btn" class="dev-btn" data-bs-toggle="modal" data-bs-target="#pedro-popup">
                        Pedro Barbosa
                    </div>
                    <div id="mia-btn" class="dev-btn" data-bs-toggle="modal" data-bs-target="#mia-popup">
                        Mia Olivera
                    </div>
                    <div id="zak-btn" class="dev-btn" data-bs-toggle="modal" data-bs-target="#zak-popup">
                        Zakariya Mohamud
                    </div>
                    <div id="arsema-btn" class="dev-btn" data-bs-toggle="modal" data-bs-target="#arsi-popup">
                        Arsema Berhe
                    </div>
                    <div id="lex-btn" class="dev-btn" data-bs-toggle="modal" data-bs-target="#lex-popup">
                        Lex Nathans
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>

    </footer>
    <div class="modal fade" id="stein-popup" tabindex="-1" aria-labelledby="steinModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="modal-header">
                    <h5 class="modal-title " id="steinModalLabel">Alex K. Stein</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body row align-items-center">
                    <div class="col"><img src="./images/devPics/stein-headshot-sm.jpg" class="img-fluid rounded" alt="Stein's headshot"></div>
                    <div class="col dev-info">
                        <span class="role fw-bold">Front End Developer</span>
                        <p>Not the Droids you're looking for...</p>
                        <a href="http://AlexKStein.github.io" class="portfolio-link">Portfolio</a>
                        <br>
                        <div class="row">
                            <a href="https://www.linkedin.com/in/alexkstein/" class="col linkedin"><img class="social-icon img-fluid" src="./images/linkedin-logo.png" alt="linkedIn Logo"></a>
                            <a href="https://github.com/AlexKStein" class="col github"><img class="social-icon img-fluid" src="./images/github-logo.png" alt="GitHub logo" ></a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="pedro-popup" tabindex="-1" aria-labelledby="pedroModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="modal-header">
                    <h5 class="modal-title " id="pedroModalLabel">Pedro Barbosa</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body row align-items-center">
                    <div class="col"><img src="./images/devPics/pedro-head.jpg" class="img-fluid rounded" alt="Pedro's Headshot"></div>
                    <div class="col dev-info">
                        <span class="role fw-bold">Front End Developer</span>
                        <p>Opera Nerd</p>
                        <a href="http://pwbarbosa.github.io" class="portfolio-link">Portfolio</a>
                        <br>
                        <div class="row">
                            <a href="https://www.linkedin.com/in/pwbarbosa/" class="col linkedin"><img class="social-icon img-fluid" src="./images/linkedin-logo.png" alt="linkedIn Logo"></a>
                            <a href="https://github.com/pwbarbosa" class="col github"><img class="social-icon img-fluid" src="./images/github-logo.png" alt="GitHub logo" ></a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="mia-popup" tabindex="-1" aria-labelledby="miaModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="modal-header">
                    <h5 class="modal-title " id="miaModalLabel">Mia Olivera</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body row align-items-center">
                    <div class="col"><img src="./images/devPics/mia-head.jpg" class="img-fluid rounded" alt="Mia's Headshot"></div>
                    <div class="col dev-info">
                        <span class="role fw-bold">Front End Developer</span>
                        <p>Takin' pics, makin' sites & pettin' pets</p>
                        <a href="http://miaroseolivera.github.io" class="portfolio-link">Portfolio</a>
                        <br>
                        <div class="row">
                            <a href="https://www.linkedin.com/in/mia-diloreto-olivera-0b1941233" class="col linkedin"><img class="social-icon img-fluid" src="./images/linkedin-logo.png" alt="linkedIn Logo"></a>
                            <a href="https://github.com/miaroseolivera" class="col github"><img class="social-icon img-fluid" src="./images/github-logo.png" alt="GitHub logo" ></a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="zak-popup" tabindex="-1" aria-labelledby="zakModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="modal-header">
                    <h5 class="modal-title " id="zakModalLabel">Zakariya Mohamud</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body row align-items-center">
                    <div class="col"><img src="./images/devPics/zak-head.jpg" class="img-fluid rounded" alt="Zakariya's headshot"></div>
                    <div class="col dev-info">
                        <span class="role fw-bold">Front End Developer</span>
                        <p>Knowledge Sponge & Future Tony Stark</p>
                        <a href="http://ZakariyaMohamud.github.io" class="portfolio-link">Portfolio</a>
                        <br>
                        <div class="row">
                            <a href="https://www.linkedin.com/in/zakariya-mohamud/" class="col linkedin"><img class="social-icon img-fluid" src="./images/linkedin-logo.png" alt="linkedIn Logo"></a>
                            <a href="https://github.com/ZakariyaMohamud" class="col github"><img class="social-icon img-fluid" src="./images/github-logo.png" alt="GitHub logo" ></a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="arsi-popup" tabindex="-1" aria-labelledby="arsiModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="modal-header">
                    <h5 class="modal-title " id="arsiModalLabel">Arsema Berhe</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body row align-items-center">
                    <div class="col"><img src="./images/devPics/arsi-head.jpg" class="img-fluid rounded" alt="Arsema's Headshot"></div>
                    <div class="col dev-info">
                        <span class="role fw-bold">Back End Developer</span>
                        <p>Full-stack Bad-a$$</p>
                        <a href="http://Arsi2022.github.io" class="portfolio-link">Portfolio</a>
                        <br>
                        <div class="row">
                            <a href="https://www.linkedin.com/in/arsemaberhe/" class="col linkedin"><img class="social-icon img-fluid" src="./images/linkedin-logo.png" alt="linkedIn Logo"></a>
                            <a href="https://github.com/Arsi2022" class="col github"><img class="social-icon img-fluid" src="./images/github-logo.png" alt="GitHub logo" ></a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="lex-popup" tabindex="-1" aria-labelledby="lexModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">
                <div class="modal-header">
                    <h5 class="modal-title " id="lexModalLabel">Lex Nathans</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body row align-items-center">
                    <div class="col"><img src="./images/devPics/lex-head.jpg" class="img-fluid rounded" alt="Lex's Headshot"></div>
                    <div class="col dev-info">
                        <span class="role fw-bold">Back End Developer</span>
                        <p>Bald by choice. Novice Librarian & Historian</p>
                        <a href="http://anathans1.github.io" class="portfolio-link">Portfolio</a>
                        <br>
                        <div class="row">
                            <a href="https://www.linkedin.com/in/alex-nathans/" class="col linkedin"><img class="social-icon img-fluid" src="./images/linkedin-logo.png" alt="linkedIn Logo"></a>
                            <a href="https://github.com/anathans1" class="col github"><img class="social-icon img-fluid" src="./images/github-logo.png" alt="GitHub logo" ></a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    
    `
}