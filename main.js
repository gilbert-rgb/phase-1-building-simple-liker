// Defining text characters for the empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';


const hearts = document.querySelectorAll('.heart');
const errorModal = document.getElementById('error-modal');
const errorMessage = document.getElementById('error-message');


function handleHeartClick(event) {
  const heart = event.target; 
  
  
  mimicServerCall()
    .then(() => {
      
      if (heart.classList.contains('empty')) {
        heart.innerHTML = FULL_HEART; 
        heart.classList.remove('empty'); 
        heart.classList.add('activated-heart'); 
      } else {
        heart.innerHTML = EMPTY_HEART; 
        
        heart.classList.remove('activated-heart'); 
        heart.classList.add('empty'); 
      }
    })
    .catch((error) => {
      
      errorMessage.innerText = error; 
      errorModal.classList.remove('hidden'); 
      
      
      setTimeout(() => {
        errorModal.classList.add('hidden'); 
      }, 3000);
    });
}


hearts.forEach(heart => {
  heart.addEventListener('click', handleHeartClick);
});
