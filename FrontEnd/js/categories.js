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
                <div class="category-card">
                  <div class="card recipe-cards text-center category-btn" > 
                  <input class="category-id" type="hidden" value="${category.id}">

                    <a>
                      <img src="/images/ApplePie.jpg" class="card-img-top" alt="Delicious Apple Pie" />
                      <div class="card-body">
                        <h5 class="card-title">${category.title}</h5>
                        <p class="card-text">See all  ${category.title} recipes</p>
                      </div>
                    </a>
                  </div>
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
       ${openBookTabs()}
     </nav>
   </div>
 </div>


`}