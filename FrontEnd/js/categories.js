export default function allCategoriesView(categories){
   return `
   <div class="container open-container">
   <div id="open-border">
     <div id="open-book">
       <section class="left-page">
         <h2 class="text-center">Select a Category</h2>
         <br>
         <div class="recipe-flex">
           <section class="recipe-list">
            ${ categories.map(category =>{
                return`
                <div class="card recipe-cards text-center" > 
                <input class="category-id" type="hidden" value="${category.id}">

                <a href="./category.html">
                <img src="/images/ApplePie.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                <div class="card-body">
                  <h5 class="card-title">${category.title}</h5>
                  <p class="card-text">See all  ${category.title} recipes</p>
                </div>
              </a>
              </div>
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
       <a href="#" class="side-tabs nav-tabs-0">
         <img src="/images/search-icon.png" alt="search icon" id="search-tab">
       </a>
       <a href="./home.html" class="side-tabs nav-tabs-1">
         <h2>Home</h2>
       </a>
       <a href="./categories.html" class="side-tabs nav-tabs-2">
         <h2>Categories</h2>
       </a>
       <a href="./ingredients.html" class="side-tabs nav-tabs-3">
         <h2>Ingredient Info</h2>
       </a>
       <a href="#" class="side-tabs nav-tabs-4">
         <h2>Submit a Recipe</h2>
       </a>
       <a href="./learn.html" class="side-tabs nav-tabs-5">
         <h2>Learn to Cook!</h2>
       </a>
       
       
     </nav>
   </div>
 </div>


`}