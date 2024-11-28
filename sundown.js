
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'), // target your scroll container
    smooth: true,
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    elems = document.querySelectorAll('.elem')
    elems.forEach(element => {
        element.addEventListener("mouseenter", function () {
            var image = element.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${image})`
        })
    });
}

page4Animation()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
