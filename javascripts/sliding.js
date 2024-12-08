
const slider1 = document.querySelector('.slider1');
const slides1 = slider1.querySelectorAll('li');

// Store the total number of images
const slideCount1 = slides1.length;
let activeSlide1 = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides1[activeSlide1].classList.remove('active');
  activeSlide1++;
  if (activeSlide1 === slideCount1) {
    activeSlide1 = 0;
  }
  slides1[activeSlide1].classList.add('active');
}, 1000);

const slider2 = document.querySelector('.slider2');
const slides2 = slider2.querySelectorAll('li');

// Store the total number of images
const slideCount2 = slides2.length;
let activeSlide2 = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides2[activeSlide2].classList.remove('active');
  activeSlide2++;
  if (activeSlide2 === slideCount2) {
    activeSlide2 = 0;
  }
  slides2[activeSlide2].classList.add('active');
}, 1000);