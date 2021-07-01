document.addEventListener('DOMContentLoaded', function(){


    const swiper = new Swiper('.clients-slider', {
        autoplay:true,
        speed: 400,
        loop:true,
        // centeredSlides:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides:true
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1366:{
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });
    const swiper_gallery = new Swiper('.gallery_slider', {
        autoplay:true,
        speed: 400,
        loop:true,
        autoHeight: true,
        // slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            1366:{
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });

    let open_modal = document.querySelectorAll('.open_modal');
    open_modal.forEach(x => x.addEventListener('click',function () {
        document.getElementById("modal").style.display='flex';
        document.body.style.overflow="hidden";
    }));

    let close_modal = document.querySelectorAll('.close_modal');
    close_modal.forEach(x => x.addEventListener('click',function () {
        document.getElementById("modal").style.display='none';
        document.body.style.overflow="";
    }));

    let scroll = document.querySelectorAll('a[href^="#"');
    scroll.forEach(x => x.addEventListener('click', function () {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    }));
})

var bLazy = new Blazy({
    
});

// const swiper = new Swiper('.clients-slider', {
//     autoplay:true,
//     speed: 400,
//     loop:true,
//     // centeredSlides:true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//             centeredSlides:true
//         },
//         // when window width is >= 480px
//         480: {
//             slidesPerView: 3,
//             spaceBetween: 30
//         },
//         // when window width is >= 640px
//         640: {
//             slidesPerView: 3,
//             spaceBetween: 40
//         },
//         1366:{
//             slidesPerView: 4,
//             spaceBetween: 40
//         }
//     }
// });
// const swiper_gallery = new Swiper('.gallery_slider', {
//     autoplay:true,
//     speed: 400,
//     loop:true,
//     autoHeight: true,
//     // slidesPerView: 2,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 20
//         },
//         // when window width is >= 480px
//         480: {
//             slidesPerView: 3,
//             spaceBetween: 20
//         },
//         // when window width is >= 640px
//         640: {
//             slidesPerView: 3,
//             spaceBetween: 60
//         },
//         1366:{
//             slidesPerView: 4,
//             spaceBetween: 40
//         }
//     }
// });
//
// let open_modal = document.querySelectorAll('.open_modal');
// open_modal.forEach(x => x.addEventListener('click',function () {
//     document.getElementById("modal").style.display='flex';
//     document.body.style.overflow="hidden";
// }));
//
// let close_modal = document.querySelectorAll('.close_modal');
// close_modal.forEach(x => x.addEventListener('click',function () {
//     document.getElementById("modal").style.display='none';
//     document.body.style.overflow="";
// }));
//
// let scroll = document.querySelectorAll('a[href^="#"');
// scroll.forEach(x => x.addEventListener('click', function () {
//     let href = $(this).attr('href');
//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 1000,
//         easing: "swing"
//     });
//     return false;
// }));





