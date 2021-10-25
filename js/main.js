const header = document.getElementById('header');
const nav = document.getElementById('nav');

function getTitle() {
    const gnbLink = document.querySelectorAll('.gnb_link');
    const tit = document.querySelectorAll('.tit');
    for(let i = 0; i <gnbLink.length; i++) {
        tit[i].textContent = gnbLink[i].textContent;
    }
}

getTitle();
