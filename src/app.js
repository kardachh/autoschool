console.log("test")
const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
                nextEl: `.review-next`,
                prevEl: `.review-prev`,
              },
});

console.log(swiper)