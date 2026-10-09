const cvPilt = document.querySelector('#cvPilt');

let pildiNumber = 1;

cvPilt.addEventListener('click', () => {
    if (pildiNumber === 1) {
        cvPilt.src = 'image/pilt2.jpg';
        pildiNumber = 2;
    } else {
        cvPilt.src = 'image/pilt1.jpg';
        pildiNumber = 1;
    }
});