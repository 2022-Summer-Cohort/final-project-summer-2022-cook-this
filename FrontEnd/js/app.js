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

function makeRecipeView(recipeId){
    const rightPageContainer = document.querySelector("#recipe-page")
    fetch(`http://localhost:8080/api/recipes/${recipeId}`)
    .then(res=>res.json())
    .then(recipeBuild => {
        console.log(recipeBuild);
        rightPageContainer.innerHTML = singleRecipeView(recipeBuild);

        const reviewAuthor = container.querySelector("#author-input")
        const reviewRating = container.querySelector("#rating-input")
        const reviewContent = container.querySelector("#review-content")
        // const submitReviewBtn = container.querySelector("#submitReview");

		let reviewForm = document.querySelector(".review-form");
		reviewForm.addEventListener('submit', handleForm);
        reviewForm.addEventListener("submit", () => {
            const newRecipeReview ={
                "author": reviewAuthor.value,
                "content": reviewContent.value,
                "rating": reviewRating.value
            }
            fetch(`http://localhost:8080/api/recipes/${recipeBuild.id}/addComment`,
            {method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipeReview)}
            )

            .then(res => res.json())
            .then(reviewToSubmit => {
                console.log(reviewToSubmit);
                const reviewsList = document.querySelector(".reviews-list")
				reviewsList.innerHTML += `
                <div id="reviews-content">
                <h6 class="text-start">${reviewAuthor.value} <span class="avgRating">
            ${reviewRating.value} &starf;</span>
             </h6>
             <p class="text-start">
                ${reviewContent.value}
             </p>
            <div class="hr-short"><hr/></div>
        </div>`
                
            })
        })
    })
    .catch(err => console.error(err))

   
    
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

function makeNewRecipeView(){
    fetch(`http://localhost:8080/api/categories/`)
    .then(res=>res.json())
    .then(categoriesList => {
    container.innerHTML = newRecipeView(categoriesList);
    container.innerHTML += makeFooter();
    tabLinks();
    let recipeForm = document.querySelector(".new-recipe-form");
	recipeForm.addEventListener('submit', handleForm);

    const ingredientInEL = document.querySelector(".extra-ingredients")
    const addIngredientBtn = document.querySelector("#add-ingredient-button")
	
    addIngredientBtn.addEventListener("click", () => {
        const newIngredientInput = document.createElement("input")
        ingredientInEL.appendChild(newIngredientInput)
        newIngredientInput.outerHTML = `
         <div class="input-group ingredients">  
             <input type="text" aria-label="Ingredient input" placeholder="ie. Lemon juice" class="form-control ingredient-in"> 
            <input type="text" aria-label="Measurement input" placeholder="ie. 1 cup" class="form-control measurement-in">
         </div>
         `
    })

    const stepInEL = document.querySelector(".extra-steps")
    const addStepBtn = document.querySelector("#add-step-button")
    addStepBtn.addEventListener("click", () => {
        const newStepInput = document.createElement("input")
        stepInEL.appendChild(newStepInput)
        newStepInput.outerHTML =  
        `
        <input type="text" placeholder="Step 1..." class="form-control mb-1 step-in" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        `
    })

    const dummyRecipeBtn = document.querySelector("#add-new-recipe")
    const newNameIn=document.querySelector("#recipe-name-in")
    const newImgURL=document.querySelector("#img-url-in")
    const categoryIn=document.querySelector("#category-in")
    const rightPageContainer = document.querySelector(".right-page")
    recipeForm.addEventListener("submit", ()=>{
        
		const ingredientsDivs = document.querySelectorAll(".ingredients")
        let ingedientArray = [];
		if(ingredientsDivs == ""){
			alert("Please enter at least one ingredient and measurement")
		}
		else{
        ingredientsDivs.forEach(ingredientDiv => {
            const ingedientEl = ingredientDiv.querySelector(".ingredient-in")
        const measurementEl = ingredientDiv.querySelector(".measurement-in")
            ingedientArray.push(
                {
                    "name":ingedientEl.value,
                    "imageUrl":"",
                    "description":"",
                    "ingredientMeasurement":measurementEl.value,
                    "spiceLevel":0,
                    "recipe":null
                })
            
        })}

        const stepEls = document.querySelectorAll(".step-in");
        let stepArray = [];
		if(stepEls == ""){
			alert("Please enter at least one step!")
		}
		else{
        stepEls.forEach(stepEls => {
            stepArray.push({"instructions": stepEls.value})
        }
		)}
        

        // const measurementEls = document.querySelectorAll(".measurement-in")

        rightPageContainer.innerHTML = submitRecipeBtn();
        let dummyRecipe = {
            "name":newNameIn.value,
            "picOfDish":newImgURL.value,
            "steps":stepArray,
            "ingredients":ingedientArray,
            "categories":[{
                "id": categoryIn.value,
            }],
            "reviews":[]
        }
        console.log(dummyRecipe);
        rightPageContainer.innerHTML+=dummyRecipeView(dummyRecipe);


        const submitNewRecipeBtn = document.querySelector("#submit-new-recipe")
        submitNewRecipeBtn.addEventListener("click", ()=>{
            const newRecipe = dummyRecipe;
            fetch(`http://localhost:8080/api/recipe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
            })
            .then(res => res.json())
            .then(newRecipe => {
                fetch(`http://localhost:8080/api/categories/${categoryIn.value}/${newRecipe.id}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(recipeSubmitted => {
                    console.log(recipeSubmitted);
                    makeSingleCategoryView(categoryIn.value);
                    makeRecipeView(recipeSubmitted.id);
                } )
        })
        
    })
    })
   
})
}

function handleForm(event) { event.preventDefault(); } 

// }

// makeLearnView();

makeHomeView();
