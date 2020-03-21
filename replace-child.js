// replace child
// siapkan parent elemennya
const sectionB = document.getElementById('b');
//  seleksi elemen yang akan diganti
const parag4 = sectionB.querySelector('p');
// --------------------------------------------------------

// buat elemen baru -------------------------
const h2New = document.createElement('h2');
const textH2New = document.createTextNode('hahahaha');
h2New.style.color = 'red';
h2New.appendChild(textH2New);
// ------------------------------------- //

// lakukan pergantian
// replaceChild(elemen baru, elemen lama)
sectionB.replaceChild(h2New, parag4);