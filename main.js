// Dom selection
// document.getR

let p4 = document.getElementById('judul');
p4.style.background = 'red';

const paragraf = document.getElementsByTagName('p');
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.color = 'red';
}