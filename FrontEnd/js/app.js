import allIngredients from "./allIngredients.js";
import makeFooter from "./footer.js";

const container = document.querySelector("#anchor");

function makeAllIngredients() {
    fetch(`http://localhost:8080/api/ingredients`)
        .then(res => res.json())
        .then(ingredients => {
            console.log(ingredients);
            container.innerHTML = allIngredients(ingredients);
            container.innerHTML += makeFooter();
        })
};

makeAllIngredients();