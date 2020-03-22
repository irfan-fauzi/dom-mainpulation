// event = sebuah kejadiian yang terjadi ddalam DOM
// kejadian tsb bisa dilakukan oleh user (mouse event, keyboard, dll)
// atau dilakukan ototmatis oleh API (animasi selesai dijalankan, halaman selesai diload)
//  caca mendengarkan event
// 1. event hendler (inline HTML Attribut, elemen method)
// 2. addEventListener()

// CONTOH 1 on click
// jika tombol paragraf 3 diklik maka warna akan berubah
// seleksi paragraf 3
const sectionA = document.getElementById('a');
const paragraf3 = document.querySelector('.paragraf3');

// membuat attribut onclick
const attOnclick = document.createAttribute('onclick');
attOnclick.value = "changeStyle()";
// set attribut on click pada paragraf 3
paragraf3.setAttributeNode(attOnclick);

function changeStyle() {
    paragraf3.style.backgroundColor = 'salmon';
}