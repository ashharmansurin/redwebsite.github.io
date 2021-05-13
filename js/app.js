$(document).ready(function () {
    $(document).scroll(function () {
        var posTop = $(document).scrollTop();
        console.log(posTop);
        let header = document.querySelector('header');
        if (posTop >= 100) {
            console.log(header);
            header.classList.add('change_header');
        } else {
            header.classList.remove('change_header');
        }
    });
});

const toggleBtn = document.querySelector('.toggle_btn');
toggleBtn.addEventListener('click', function () {
    const nav = document.querySelector('nav');
    console.log(nav);
    nav.classList.toggle('explore');
});