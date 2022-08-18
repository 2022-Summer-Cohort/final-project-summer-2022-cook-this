export default function tabLinks() {
	const searchViewBtn = document.querySelector('#search-btn');
	const homeBtn = document.querySelector('#home-btn');
	const categoriesBtn = document.querySelector('#categories-btn');
	const ingredientsBtn = document.querySelector('#ingredients-btn');
	const newRecipeBtn = document.querySelector('#new-recipe-btn');
	const learnBtn = document.querySelector('#learn-btn');

	searchViewBtn.addEventListener('click', () => {
		makeSearchView();
	});
	homeBtn.addEventListener('click', () => {
		makeHomeView();
	});
	categoriesBtn.addEventListener('click', () => {
		makeAllCategoriesView();
	});
	ingredientsBtn.addEventListener('click', () => {
		makeAllIngredients();
	});
	newRecipeBtn.addEventListener('click', () => {
		makeNewRecipeView();
	});
	learnBtn.addEventListener('click', () => {
		makeLearnView();
	});
}