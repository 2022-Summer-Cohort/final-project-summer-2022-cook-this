import makeFooter from './footer.js';
import singleRecipeView from './Recipe.js';
import singleCategoryView from './singleCategory.js';
import homeView from './home.js';
import allCategoriesView from './categories.js';
import allIngredients from './allIngredients.js';
import makeIngredientSection from './singleIngredient.js';
import learn from './learn.js';
import displaySingleVideo from './components/LearnVideoViews.js';
import newRecipeView from './createRecipe.js';
import submitRecipeBtn from './components/SubmitRecipeBtn.js';
import dummyRecipeView from './components/dummyRecipeView.js';
import searchView from './searchView.js';

const container = document.querySelector('#anchor');

function tabLinks() {
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

function makeHomeView() {
	container.innerHTML = homeView();
	container.innerHTML += makeFooter();
	tabLinks();
}

function makeSearchView() {
	fetch(`http://localhost:8080/api/recipes`)
		.then((res) => res.json())
		.then((recipes) => {
			console.log(recipes);
			container.innerHTML = searchView(recipes);
			container.innerHTML += makeFooter();
			tabLinks();

			const recipeToSearch = [
				recipes.map((recipe) => {
					{
						name: 'recipe.name';
					}
				})
			];

			function setList(group) {
				const list = document.getElementById('listRecipes');
				clearList();
				for (const recipe of group) {
					const item = document.createElement('li');
					item.classList.add('list-group-item');
					const text = document.createTextNode(recipe.name);
					item.appendChild(text);
					list.appendChild(item);

                    list.addEventListener('click', () => {
                        makeRecipeView(recipe.id);
                        
                    });
                    
				}
				if (group.length === 0) {
					setNoResult();
				}
			}
			function clearList() {
				const list = document.getElementById('listRecipes');
				while (list.firstChild) {
					list.removeChild(list.firstChild);
				}
			}
			function setNoResult() {
				const list = document.getElementById('listRecipes');
				const item = document.createElement('li');
				item.classList.add('list-group-item');
				const text = document.createTextNode(recipeToSearch.name);
				item.appendChild(text);
				list.appendChild(item);
			}


			const searchIN = document.getElementById('search777');

			searchIN.addEventListener('input', (event) => {
				let value = event.target.value;
				if (value && value.trim().length > 0) {
					value = value.trim().toLowerCase();
					setList(
						recipes.filter((recipe) => {
							console.log(recipe);
							return recipe.name.toLowerCase().includes(value);
							// }).sort((recipeA,recipeB) => {
							//     return getRelevancy(recipeB.name,value) - getRelevancy(recipeA.name,value);
						})
					);
				} else {
					clearList();
				}
			});

		})
		.catch((err) => console.error(err));
}

function makeAllIngredients() {
	fetch(`http://localhost:8080/api/ingredients`).then((res) => res.json()).then((ingredients) => {
		console.log(ingredients);
		container.innerHTML = allIngredients(ingredients);
		container.innerHTML += makeFooter();
		tabLinks();

		const ingredientPageEl = container.querySelector('.right-page');
		const ingredientCardEl = container.querySelectorAll('.card');
		ingredientCardEl.forEach((ingredient) => {
			const ingredientButton = ingredient.querySelector('.ingredient-button');
			let ingredientIdEl = ingredient.querySelector('.ingredient-id');

			ingredientButton.addEventListener('click', () => {
				fetch(`http://localhost:8080/api/ingredients/${ingredientIdEl.value}`)
					.then((res) => res.json())
					.then((ingredient) => {
						console.log(ingredient);
						ingredientPageEl.innerHTML = makeIngredientSection(ingredient);
					});
			});
		});
	});
}

function makeAllCategoriesView() {
	fetch(`http://localhost:8080/api/categories`)
		.then((res) => res.json())
		.then((categories) => {
			console.log(categories);
			container.innerHTML = allCategoriesView(categories);
			container.innerHTML += makeFooter();
			tabLinks();
			const categoryEl = document.querySelectorAll('.category-cards');

			categoryEl.forEach((recipe) => {
				const categoryBtn = recipe.querySelector('.category-btn');
				const categoryIdEl = recipe.querySelector('.category-id');

				categoryBtn.addEventListener('click', () => {
					makeSingleCategoryView(categoryIdEl.value);
				});
			});
		})
		.catch((err) => console.error(err));
}

function makeSingleCategoryView(categoryId) {
	fetch(`http://localhost:8080/api/categories/${categoryId}`)
		.then((res) => res.json())
		.then((categoryBuild) => {
			console.log(categoryBuild);
			container.innerHTML = singleCategoryView(categoryBuild);
			container.innerHTML += makeFooter();
			tabLinks();

			const recipeCardEl = document.querySelectorAll('.recipe-cards');
			recipeCardEl.forEach((recipe) => {
				const recipeBtn = recipe.querySelector('.recipe-btn');
				const recipeIdEl = recipe.querySelector('.recipe-id');
				recipeBtn.addEventListener('click', () => {
					makeRecipeView(recipeIdEl.value);
				});
			});
		})
		.catch((err) => console.error(err));
}

function makeRecipeView(recipeId) {
	const rightPageContainer = document.querySelector('#recipe-page');
	fetch(`http://localhost:8080/api/recipes/${recipeId}`)
		.then((res) => res.json())
		.then((recipeBuild) => {
			console.log(recipeBuild);
			rightPageContainer.innerHTML = singleRecipeView(recipeBuild);
		})
		.catch((err) => console.error(err));
}

function makeSingleVideoView(videoId) {
	const rightPageContainer = document.querySelector('.right-page');
	console.log(displaySingleVideo(videoId));
	rightPageContainer.innerHTML = displaySingleVideo(videoId);
}

function makeLearnView() {
	container.innerHTML = learn();
	container.innerHTML += makeFooter();
	tabLinks();

	const learnCardEl = document.querySelectorAll('.learn-card');
	learnCardEl.forEach((learnCard) => {
		const videoBtn = learnCard.querySelector('.video-btn');
		const videoIdEl = learnCard.querySelector('.learn-card-id');
		videoBtn.addEventListener('click', () => {
			makeSingleVideoView(videoIdEl.value);
		});
	});
}

function makeNewRecipeView() {
	container.innerHTML = newRecipeView();
	container.innerHTML += makeFooter();
	tabLinks();

	const dummyRecipeBtn = document.querySelector('#add-new-recipe');
	const newNameIn = document.querySelector('#recipe-name-in');
	const newImgURL = document.querySelector('#img-url-in');
	const newIngredientIn = document.querySelector('#ingredient-in');
	const newMeasurementIn = document.querySelector('#measurement-in');
	const newStepIn = document.querySelector('#step-in');
	const categoryIn = document.querySelector('#category-in');
	const rightPageContainer = document.querySelector('.right-page');
	dummyRecipeBtn.addEventListener('click', () => {
		rightPageContainer.innerHTML = submitRecipeBtn();
		let dummyRecipe = {
			name: newNameIn.value,
			picOfDish: newImgURL.value,
			steps: [ { instructions: newStepIn.value } ],
			ingredients: [
				{
					name: newIngredientIn.value,
					imageUrl: '',
					description: '',
					ingredientMeasurement: newMeasurementIn.value,
					spiceLevel: 0,
					recipe: null
				}
			],
			categories: [
				{
					title: categoryIn.value
				}
			],
			reviews: null
		};
		console.log(dummyRecipe);
		rightPageContainer.innerHTML += dummyRecipeView(dummyRecipe);
	});
	const submitNewRecipeBtn = document.querySelector('#submit-new-recipe');
	submitNewRecipeBtn.addEventListener('click', () => {});
}

// }

// makeLearnView();

makeHomeView();
