$('.test-card-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.brand-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


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
// testimonial slider js
