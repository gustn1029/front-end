const thisBtn = document.querySelector('.thisBtn');
const showBox = document.querySelector('.showBox');
const sns = document.querySelectorAll('.sns');

    document.addEventListener('click', function(e) {
        if(e.target.classList.contains('thisBtn')) {
            e.preventDefault();
        }
        if(e.target.classList.contains("thisBtn")) {
            showBox.classList.toggle("on");
        } else if(e.target.classList.contains("showBox") || e.target.classList.contains("sns")) {
            return 
        } else {
            if(showBox.classList.contains("on")) {
                showBox.classList.remove("on");
            }
        }
    })