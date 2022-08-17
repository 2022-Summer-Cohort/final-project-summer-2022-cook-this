export default function reviewsModal(recipe){
    return `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">${recipe.name} Reviews &nbsp;&nbsp;&nbsp;&nbsp; <span id="overall-rating">Overall Rating: ${recipe.avgRating} &starf;</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                        <section id="new-review">
                            <h6>Create New Review</h6>
                            <div class="row">
                                <div class="col-8">
                                    <input type="text" class="form-control" id="author-input" placeholder="Author Name ie. Lex Smith"/>
                                </div>
                                <div class="col d-flex">
                                    <span>Rating:</span><input type="number" class="form-control text-end" id="rating-input" min="1" max="5" placeholder="Rating"/>
                                </div>
                            </div>
                                <div class="mb-3" id="review-content-input">
                                    <label for="review-content" class="form-label">Write your review below:</label>
                                    <textarea class="form-control" id="review-content" rows="3"></textarea>
                                </div>
                                <button id="submitReview" class="btn btn-secondary">Submit</button>
                        </section>
                        <hr/>
                        <div class="reviews-list">

                        ${recipe.reviews.map(review =>{
                            return`
                                <div id="reviews-content">
                                        <h6 class="text-start">${review.author} <span class="avgRating">
                                    ${review.rating} &starf;</span>
                                     </h6>
                                     <p class="text-start">
                                        ${review.content}
                                     </p>
                                    <div class="hr-short"><hr/></div>
                                </div>
                                `
                             }).join("")}
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
`

}