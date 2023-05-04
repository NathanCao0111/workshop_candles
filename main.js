import sliderLogo from './src-path.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Slider logo list
let newSliderLogo = sliderLogo.map(function(element) {
 return `
   <div class="slider__logo-container">
   <div class="slider__logo" style="background-image: url(${element.url})">
   </div>
   </div>
 `;
});

$('.slider__container').innerHTML = newSliderLogo.join('');


// Btn trigger reset
$('.hero__btn').addEventListener('mousedown', function() {
  $('.hero__btn').style.color = '#fff';
})