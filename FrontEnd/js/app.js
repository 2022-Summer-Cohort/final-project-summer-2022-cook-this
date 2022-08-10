/*  show 1 - hide 1  */

import singleVideoView from "./learn-videos/singleVideo";

// $('.show-1-yes').click(function() {
//     $('#target-1').show(500);
//     $('.show-1-yes').hide(0);
//     $('.hide-1-yes').show(0);
// });
// $('.hide-1-yes').click(function() {
//     $('#target-1').hide(500);
//     $('.show-1-yes').show(0);
//     $('.hide-1-yes').hide(0);
// });



/*  show 2 - hide 2  */

// $('.show-2-yes').click(function() {
//     $('#target-2').show(500);
//     $('.show-2-yes').hide(0);
//     $('.hide-2-yes').show(0);
// });
// $('.hide-2-yes').click(function() {
//     $('#target-2').hide(500);
//     $('.show-2-yes').show(0);
//     $('.hide-2-yes').hide(0);
// });

const learnBtn = document.querySelector(".recipe-cards")
learnBtn.addEventListener("click", () =>{
    const learnIdEl = document.querySelector(".learn-card-id");
    singleVideoView(learnIdEl.value);
})



const openKnifeSafetyVideo = container.querySelector("#knife-safety")
openKnifeSafetyVideo.addEventListener("click", () => {
  popup.classList.add(".open-popup");
});
