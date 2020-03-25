// buat elemen tombol
const NewButton = document.createElement('button');
NewButton.setAttribute('id', 'ubahwarna');
const textButton = document.createTextNode('new button');
NewButton.appendChild(textButton);

// siapkan tempat elemen baru
const body = document.querySelector('body');
// elemen sebelum
const h1 = document.getElementsByTagName('h1')[0];
// taruh di bawah h1
body.appendChild(NewButton);
// --------------------------  function ubahwarna() -------------------
function ubahWarna() {
  const body = document.querySelector('body');
  body.classList.toggle('biru-muda');
}
NewButton.addEventListener('click', ubahWarna);
// --------------------- buat tombol lagi =--------------------
const bRandomColor = document.createElement('div');
bRandomColor.setAttribute('type', 'button');
bRandomColor.style.backgroundColor = 'salmon';
bRandomColor.style.border = 'solid 2px black';
bRandomColor.style.marginTop = '1rem';
bRandomColor.style.width = '200px';
bRandomColor.style.height = '50px';
bRandomColor.style.margin = '1rem 280px';
const textBRandom = document.createTextNode('Random color');

bRandomColor.appendChild(textBRandom);
// taruh di bawah new button
NewButton.after(bRandomColor);
// ----------------------------------------------------------

// fungsi acak warna 
function acakWarna() {
  const body = document.querySelector('body');
  const r = Math.random() * 255 + 1;
  const g = Math.random() * 255 + 1;
  const b = Math.random() * 255 + 1;
  body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
bRandomColor.addEventListener('click', acakWarna);