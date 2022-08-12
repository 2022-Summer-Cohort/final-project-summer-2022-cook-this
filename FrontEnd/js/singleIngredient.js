export default function makeIngredientSection(ingredient) {
    return `
    <div id="ingredient-info">
        <figure class="ingredient-image">
            <article id="ingredient-description">
                <img class="img-fluid ingredient-img" src="${ingredient.imageUrl}" alt="Picture of ${ingredient.name}">
                <div id="ingredient-title">
                    <h1 class="title-header">${ingredient.name}</h1>
                    <h5>${ingredient.spicePeppers}</h5>
                </div>
                <br>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate impedit magni voluptatum, cupiditate ex possimus quos, sunt aperiam ipsum eaque omnis a? Vitae nam possimus blanditiis nihil eum commodi iusto?</p>
                    <a href="https://en.wikipedia.org/wiki/Cumin">Wikipedia article</a>
            </article>
        </figure>
    </div>
    `
}