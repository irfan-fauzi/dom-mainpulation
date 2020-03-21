// insertbefore
// 1 buat elemen
const newli = document.createElement('li');
newli.style.backgroundColor = 'salmon';
const textNewLi = document.createTextNode('ini li baru bro');
// rangkai elemen
newli.appendChild(textNewLi);
// siapkan tempat elemen parent
const tempatNewli = document.querySelector('#b ul');
// siapkan elemen setelah nya (yang akan di taruh elemen baru)
const li2 = tempatNewli.querySelector('ul li:nth-child(3)');
// rangkai !!!
tempatNewli.insertBefore(newli, li2);