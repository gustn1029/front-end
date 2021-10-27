const number = document.querySelector('.number');
const count = number.getAttribute('data-count');
const countBtn = document.querySelector('.count_btn');
let num = Number(number.textContent);

function counting() {
    if(num < count) {
        num++;
    }
    return number.textContent = num;
}

function getCounting(){
    setInterval(counting, 10);
}

countBtn.addEventListener('click', getCounting);