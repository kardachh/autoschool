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

const toggleEdVisAid = (el) => {
    el = el.currentTarget
    const descriptionEl = el.children.namedItem("description")
    const imageInactiveEl = el.children.namedItem("image-inactive")
    const imageActiveEl = el.children.namedItem("image-active")
    descriptionEl.classList.toggle("hidden")
    imageInactiveEl.classList.toggle("hidden")
    imageActiveEl.classList.toggle("hidden")
}

Array.from(document.querySelectorAll(".edVisAid")).forEach(el=>el.addEventListener("click",toggleEdVisAid))