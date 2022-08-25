import openBookTabs from "./components/openBookTabs.js"

export default function allCategoriesView(categories){
   return `
   <div class="container open-container">
   <div id="open-border">
     <div id="open-book">
       <section class="left-page">
         <h2 class="text-center">Top Categories</h2>
         <br>
         <div class="left-page-flex">
           <section class="category-top-list">
            ${ categories.map(category =>{
                return`
                  <div class="card  recipe-cards text-center category-cards" > 
                  <input class="category-id" type="hidden" value="${category.id}">
                    <a class="category-btn">
                      <img src="${category.imageUrl}" class="card-img-top" alt="Image of Category" />
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
            <div class="position-relative mt-3">
                <img class="position-absolute top-100 start-50 translate-middle img-fluid page-logo"
                    src="/images/cookThisPotLogo.png" alt="">
            </div>
       </section>
       <section class="right-page">
        <h2 class="text-center mb-3">All Categories</h2>
        <section id="category-all-list">
        ${ categories.map(category =>{
          return`
            <div class="card  recipe-cards text-center category-cards" > 
            <input class="category-id" type="hidden" value="${category.id}">
              <a class="category-btn">
                <img src="${category.imageUrl}" class="card-img-top" alt="Image of Category" />
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
        <div class="position-relative mt-3">
            <img class="position-absolute top-100 start-50 translate-middle img-fluid page-logo"
              src="/images/cookThisPotLogo.png" alt="">
          </div>
       </section>
       
     </div>
     <nav class="book-tabs">
       ${openBookTabs()}
   </div>
 </div>
`}