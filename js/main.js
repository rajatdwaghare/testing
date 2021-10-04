$(document).ready(function () {
    $('#top-bar').owlCarousel({
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
            },
            600: {
                items: 1,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
            },
            1000: {
                items: 3,
                nav: false,
                autoplay: false,
                loop: false,
            }
        }
    })
    $("#certificate-icon").owlCarousel({
        loop: true,
        margin: 2,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 5,
                nav: true,
                loop: true,
            },
        },
    });
    $("#blog-list").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
            },
        },
    });
    $("#product-list").owlCarousel({
        loop: true,
        margin:20,
        responsiveClass: true,
        responsive: {
            0: {
                items:1.5,
                nav: false,
                margin: 15,
            },
            600: {
                items: 3,
                nav: true,
                margin: 15,
            },
            1000: {
                items:4,
                nav: true,
                loop: true,
            },
        },
    });
    $("#social-list").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: false,
                loop: true,
                margin: 0,
            },
            600: {
                items: 3,
                nav: false,
                loop: true,
                margin: 0,
            },
            1000: {
                items: 3,
                nav: false,
                loop: true,
                margin: 0,
            },
        },
    });
    $("#tones-list").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.4,
                nav: false,
                margin: 15,
            },
            600: {
                items: 2,
                nav: true,
                margin: 15,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
        },
    });
    $("#category-list").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items:1.4,
                nav: false,
                margin: 15,
            },
            600: {
                items: 3,
                nav: false,
                margin: 15,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            },
        },
    });
    $("#make-owl").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: false,
                margin: 15,
                autoplay: true,
                autoplayTimeout: 2000,
            },
            600: {
                items: 3,
                nav: false,
                margin: 15,
            },
            1000: {
                items: 4,
                nav: false,
                loop: true,
            },
        },
    });
    $("#ingridents").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                margin: 15,
            },
            600: {
                items: 3,
                nav: true,
                margin: 15,
            },
            1000: {
                items: 4,
                nav: false,
                loop: true,
            },
        },
    });
    var owl = $("#single-product").owlCarousel({
        dotsContainer: '#carousel-custom-dots',
        responsive: {
            0: {
                items: 1.2,
                nav: false,
                loop: true,
            },
            600: {
                items: 1.2,
                nav: false,
                loop: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
            }
        }
    });
    $('#carousel-custom-dots').on('click', 'li', function (e) {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});

function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function (everybutton) {

        everybutton.addEventListener('click', function (e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
    });

});




