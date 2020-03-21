// querySelector
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';

// const li2 = document.querySelector('#b ul li:nth-child(2)');
// li2.style.color = 'red';

// const psemua = document.querySelectorAll('p');
// for (let i = 0; i < psemua.length; i++) {
//     psemua[i].style.color = 'blue';
//     psemua[i].style.backgroundColor = 'salmon';
// }

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'red';
// set attribut untuk menambah atribut pada elemen html
// get attribut untuk mengetahui attribut
p4.setAttribute('class', 'p4');

// --------------------------- method khusus class  -------------------------------------------------
// untuk menambahkan class baru
Element.classList.add()
//untuk menghapus class yang ada
Element.classList.remove()
// jika sebuah elemen tidak memiliki class tertentu >> maka ia akan menambahkan class secara otomatis
// tetapi jika elemen tsb sudah ada class, maka otomatis class yang ada akan di hapus
Element.classList.toggle()
// untuk mengetahui nama class didalam elemen jika el memiliki 2 atau lebih class
Element.classList.item()
// dalam sebuah elemen ada tidak class tertentu ?
Element.classList.contains()
// untuk mengganti class dalam suatu elemen
Element.classList.replace()