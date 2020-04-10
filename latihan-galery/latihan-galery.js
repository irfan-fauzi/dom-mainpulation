const container = document.querySelector('.container');
const jumbotron = document.querySelector('.jumbotron');

container.addEventListener('click', function (event) {
    if (event.target.className == 'thumb') {
        jumbotron.src = event.target.src;
    }
});