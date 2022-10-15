// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorMessage = document.querySelector("div#modal")
errorMessage.classList.add("hidden");

 let heartButton = document.querySelectorAll(".like-glyph")
 for(const element of heartButton) {
  element.addEventListener("click", likeClick)
 }
 function likeClick(e){
  const heart = e.target
  if (heart.innerHTML === FULL_HEART){
    heart.classList.remove("activated-heart")
    heart.innerHTML = EMPTY_HEART
  } else {
  mimicServerCall()
  .then(() => {
    heart.innerHTML = FULL_HEART
    heart.classList.add("activated-heart")
  })
  .catch((result) => {
    errorMessage.classList.remove("hidden")
    let errorMessage2 = document.querySelector("#modal-message")
    errorMessage2.innerHTML = result
    setTimeout(() => remove(), 3000)
  })
 }}

function remove(){
  errorMessage.classList.add("hidden");
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
