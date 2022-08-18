export default function loginModal() {
    return `
    <div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <img id="login-logo" src="/images/cookThisPotLogo.png" />
                    <h3 class="modal-title" id="staticBackdropLabel">&nbsp; Login or Create Account</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <section id="login">
                        <h6>Login with Username or Email:</h6>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-user fa-2x"></i></span>
                                </div>
                                <input type="text" class="form-control" id="author-input"
                                    placeholder="Username or Email Address" />
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-lock fa-2x"></i></span>
                                </div>
                                <input type="password" class="form-control input-group-append" id="login-password"
                                    data-toggle="password" placeholder="Password" />
                                <div class="input-group-append">
                                    <span class="input-group-text"><i id="lp-eye" class="fa-solid fa-eye-slash fa-2x"></i></span>
                                </div>
                            </div>
                        </div>
                        <br>
                        <button class="btn btn-secondary">Log In</button>
                    </section>
                    <hr>
                    <section id="login">
                        <h6>Create New Account:</h6>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-user fa-2x"></i></span>
                                </div>
                                <input type="text" class="form-control" id="create-username" placeholder="Username" />
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-lock fa-2x"></i></span>
                                </div>
                                <input type="password" class="form-control input-group-append" id="create-password"
                                    data-toggle="password" placeholder="Password" />
                                <div class="input-group-append">
                                    <span class="input-group-text"><i id="crp-eye" class="fa-solid fa-eye-slash fa-2x"></i></span>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-lock fa-2x"></i></span>
                                </div>
                                <input type="password" class="form-control input-group-append" id="confirm-password"
                                    data-toggle="password" placeholder="Confirm Password" />
                                <div class="input-group-append">
                                    <span class="input-group-text"><i id="cop-eye" class="fa-solid fa-eye-slash fa-2x"></i></span>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-envelope fa-2x"></i></span>
                                </div>
                                <input type="text" class="form-control" id="email-address"
                                    placeholder="Email Address" />
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-user fa-2x"></i></span>
                                </div>
                                <input type="text" class="form-control" id="first-name" placeholder="First Name" />
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fa-solid fa-user fa-2x"></i></span>
                                </div>
                                <input type="text" class="form-control" id="last-name" placeholder="Last Name" />
                            </div>
                        </div>
                        <br>
                        <button class="btn btn-secondary">Create Account</button>
                    </section>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
}