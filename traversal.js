// Dom traversal
// let card = document.querySelector('.card');
// let close = document.querySelectorAll('.close');
// close.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//         event.target.parentElement.style.display = 'none';
//     });

// });
// let name = document.querySelector('.nama');
// console.log(name.nextElementSibling);

// Prevent devault
// adalah method dari object event yang berfungsi menghentikan aksi default yang dilakukan oleh elemen html
// contoh

// let close = document.querySelectorAll('.close');
// close.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//         event.target.parentElement.style.display = 'none';
//         // preventDefault untuk menghentikan aksi href
//         event.preventDefault();
//     });
// });
// Event Bubling
// ketika kita membuat event kepada satu elemen,secara tidak langsung sebenarnya kita menseleksi keseluruhan parent elemen nya, sehingga ketika kita memberikan 2 (lebih dari satu) event, walaupun berbeda elemen, kedua event tersebut akan bentrok
// let card = document.querySelectorAll('.card');
// card.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//         alert('ok')
//     });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    // cek kondisi : apakah ada class bernama 'close' di dalam class 'container'
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    } else {
        alert('ok');
    }
});