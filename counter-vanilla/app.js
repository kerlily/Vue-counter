const countValue = document.querySelector('#value');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');

let count = 0;

decreaseBtn.addEventListener('click', () => {
    count = count - 1;
    countValue.textContent = count;
});

increaseBtn.addEventListener('click', () => {
    count = count + 1;
    countValue.textContent = count;
});