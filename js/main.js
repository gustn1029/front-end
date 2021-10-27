function moveTop() {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', function(e) {
        e.preventDefault();
        document.documentElement.offsetTop = 0;
    })
}

function getTitle() {
    const gnbLink = document.querySelectorAll('.gnb_link');
    const tit = document.querySelectorAll('.tit');
    for(let i = 0; i <gnbLink.length; i++) {
        tit[i].textContent = gnbLink[i].textContent;
    }
}

getTitle();

function getSection() {
    const container = document.getElementById('container');
    const sections = document.querySelectorAll('.section');
    const link = document.querySelectorAll('.gnb_link');
    const scrollTop = document.documentElement.scrollTop;
    
    for(let i = 0; i < sections.length; i++) {
        if(scrollTop >= sections[0].offsetTop && scrollTop <= container.offsetTop + container.scrollHeight) {
            let point = sections[0].offsetTop + Math.abs(sections[0].getBoundingClientRect().top);
            if(sections[i].offsetTop - 100 <= point) {
                if(i > 0) {
                    link[i-1].classList.remove('active');
                    link[i].classList.add('active');
                } else {
                    link[i].classList.add('active');
                }
            } else {
                link[i].classList.remove('active');
            }
        } else {
            link[i].classList.remove('active');
        }
    } 
}

function copy() {
    const conLink = document.querySelectorAll('.contact_link');
    conLink[0].addEventListener('click', function(e){
        e.preventDefault();
        const value = conLink[0].getAttribute('data-value');
        console.log(value);

        return document.execCommand('copy');
    })
}
copy();
window.addEventListener('scroll', getSection);