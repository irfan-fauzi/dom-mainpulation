// let card = document.querySelector('.card');
let close = document.querySelectorAll('.close');
close.forEach(function (e) {
    e.addEventListener('click', function (event) {
        event.target.parentElement.style.display = 'none';
    })

});