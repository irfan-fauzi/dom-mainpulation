// create input range
// range 1
const slider1 = document.createElement('input');
slider1.setAttribute('type', 'range');
slider1.setAttribute('name', 'red');
// range 2
const slider2 = document.createElement('input');
slider2.setAttribute('type', 'range');
slider2.setAttribute('name', 'green');
// range 3
const slider3 = document.createElement('input');
slider3.setAttribute('type', 'range');
slider3.setAttribute('name', 'blue');

// siapkan tempat
const h1 = document.querySelector('h1');
// letakkan setelah h1
h1.after(slider1);
slider1.after(slider2);
slider2.after(slider3);
// -------------------------------------------------------
// tangkap setiap slider
function randomColorRed() {
    const body = document.querySelector('body');
    const sliderMerah = document.getElementsByName('red')[0];
    const sliderGreen = document.getElementsByName('green')[0];
    const sliderBlue = document.getElementsByName('blue')[0];
    const b = sliderBlue.value;
    const g = sliderGreen.value;
    const r = sliderMerah.value;
    body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';

}

function randomColorGreen() {
    const body = document.querySelector('body');
    const sliderMerah = document.getElementsByName('red')[0];
    const sliderGreen = document.getElementsByName('green')[0];
    const sliderBlue = document.getElementsByName('blue')[0];
    const b = sliderBlue.value;
    const g = sliderGreen.value;
    const r = sliderMerah.value;
    body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';
}

function randomColorBlue() {
    const body = document.querySelector('body');
    const sliderMerah = document.getElementsByName('red')[0];
    const sliderGreen = document.getElementsByName('green')[0];
    const sliderBlue = document.getElementsByName('blue')[0];
    const b = sliderBlue.value;
    const g = sliderGreen.value;
    const r = sliderMerah.value;
    body.style.backgroundColor = 'rgb(' + r + ', ' + g + ',' + b + ')';

}
// supaya slider nya live . gunakan event 'select'
slider1.addEventListener('input', randomColorRed);
slider2.addEventListener('input', randomColorGreen);
slider3.addEventListener('input', randomColorBlue);