import allCategoriesView from "./categories.js";

const container = document.querySelector("#anchor")
function allCategoriesVeiw(){
    fetch(`http://localhost:8080/api/categories`)
    .then(res => res.json())
    .then(categories =>{
        console.log(categories);
        container.innerHTML = allCategoriesView(categories)
        container.innerHTML += footer();

    
    })
}
allCategoriesVeiw()