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