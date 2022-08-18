export default function loginEyes() {
	const loginPassField = document.querySelector("#login-password");
	const createPassField = document.querySelector("#create-password");
	const confirmPassField = document.querySelector("#confirm-password");
	const loginPassEye = document.querySelector("#lp-eye");
	const createPassEye = document.querySelector("#crp-eye");
	const confirmPassEye = document.querySelector("#cop-eye");

	loginPassEye.addEventListener("click", () => {
		if(loginPassField.type === "password") {
			loginPassField.type = "text";
		}else{
			loginPassField.type = "password"
		}
		if(loginPassEye.classList.contains("fa-eye-slash")){
			loginPassEye.classList.remove("fa-eye-slash");
			loginPassEye.classList.add("fa-eye");
		}
		else{
			loginPassEye.classList.remove("fa-eye");
			loginPassEye.classList.add("fa-eye-slash");
		}
	});
	createPassEye.addEventListener("click", () => {
		if(createPassField.type === "password") {
			createPassField.type = "text";
		}else{
			createPassField.type = "password"
		}
		if(createPassEye.classList.contains("fa-eye-slash")){
			createPassEye.classList.remove("fa-eye-slash");
			createPassEye.classList.add("fa-eye");
		}
		else{
			createPassEye.classList.remove("fa-eye");
			createPassEye.classList.add("fa-eye-slash");
		}
	});
	confirmPassEye.addEventListener("click", () => {
		if(confirmPassField.type === "password") {
			confirmPassField.type = "text";
		}else{
			confirmPassField.type = "password"
		}
		if(confirmPassEye.classList.contains("fa-eye-slash")){
			confirmPassEye.classList.remove("fa-eye-slash");
			confirmPassEye.classList.add("fa-eye");
		}
		else{
			confirmPassEye.classList.remove("fa-eye");
			confirmPassEye.classList.add("fa-eye-slash");
		}
	});
}