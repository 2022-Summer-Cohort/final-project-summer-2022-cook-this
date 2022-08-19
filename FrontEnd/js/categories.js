import openBookTabs from "./components/openBookTabs.js"

export default function allCategoriesView(categories){
   return `
   <div class="container open-container">
   <div id="open-border">
     <div id="open-book">
       <section class="left-page">
         <h2 class="text-center">Select a Category</h2>
         <br>
         <div class="left-page-flex">
           <section class="recipe-list">
            ${ categories.map(category =>{
                return`
                  <div class="card  recipe-cards text-center category-cards" > 
                  <input class="category-id" type="hidden" value="${category.id}">
                    <a class="category-btn">
                      <img src="/images/category-images/savory-category.png" class="card-img-top" alt="Delicious Savory Recipes" />
                      <div class="card-body">
                        <h5 class="card-title">${category.title}</h5>
                        <p class="card-text">See all  ${category.title} recipes</p>
                      </div>
                    </a>
                  </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //     <img src="/images/categories-images/dessert-category.png" class="card-img-top" alt="Delicious Dessert Recipes" />
                  //     <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //     <img src="/images/categories-images/crockpot-category.jpg" class="card-img-top" alt="Delicious CrockPot Recipes" />
                  //     <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //     <img src="/images/categories-images/meditteranean-category.png" class="card-img-top" alt="Delicious Meditteranean Recipes" />
                  //     <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //   <img src="/images/categories-images/appetizer-category.jpg" class="card-img-top" alt="Delicious Appetizer Recipes" />
                  //   <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //   <img src="/images/categories-images/sandwich-category.jpg" class="card-img-top" alt="Delicious Sandwich Recipes" />
                  //   <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //   <img src="/images/categories-images/bread-category.png" class="card-img-top" alt="Delicious Bread Recipes" />
                  //   <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //   <img src="/images/categories-images/healthy-category.jpg" class="card-img-top" alt="Delicious Healthy Recipes" />
                  //   <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //   <img src="/images/categories-images/glutenfree-category.jpg" class="card-img-top" alt="Delicious Gluten-Free Recipes" />
                  //   <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //   <img src="/images/categories-images/vegan-category.jpg" class="card-img-top" alt="Delicious Vegan Recipes" />
                  //   <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //   <img src="/images/categories-images/vegetarian-category.jpg" class="card-img-top" alt="Delicious Vegetarian Recipes" />
                  //   <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>

                  // <div class="card  recipe-cards text-center category-cards" > 
                  // <input class="category-id" type="hidden" value="${category.id}">
                  //   <a class="category-btn">
                  //     <img src="/images/categories-images/pasta-category.jpg" class="card-img-top" alt="Delicious Pasta Recipes" />
                  //     <div class="card-body">
                  //       <h5 class="card-title">${category.title}</h5>
                  //       <p class="card-text">See all  ${category.title} recipes</p>
                  //     </div>
                  //   </a>
                  // </div>
                `
            }) .join("")
        }
           </section>
         </div>
       </section>
       <section class="right-page">
         <br> <br>
       </section>
     </div>
     <nav class="book-tabs">
       ${openBookTabs()}
     </nav>
   </div>
 </div>
`}