//JavaScript
//console.log('Hello world!');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // ↑縦移動の指示
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
