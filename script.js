console.log("JS conected");
const ratingButtons = document.querySelectorAll('.rating-buttons button');
let selectedRating = null;
const selectedValueText = document.getElementById('selected-rating');
const submitButton = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.rating');
const thankYouCard = document.querySelector('.thank-you');

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedRating = button.textContent;
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        console.log(selectedRating)
        selectedValueText.textContent = selectedRating;
        });
          
    });

submitButton.addEventListener('click', () => {
  if (selectedRating === null) {
    return;
  }
  ratingCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
});

