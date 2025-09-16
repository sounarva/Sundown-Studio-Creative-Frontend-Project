// Initialize Lenis -->
const lenis = new Lenis({
    duration: 2.2,    // Increase this value for smoother transitions
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 2,
    infinite: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Listen for the scroll event
lenis.on('scroll', (e) => {
    // console.log(e);
});

// Animation Functions -->

function containerAnimation() {
    var elemContainer = document.querySelector("#elem-container");
    var fixedImageBox = document.querySelector("#fixed-image");

    elemContainer.addEventListener("mouseenter", () => {
        fixedImageBox.style.display = "block";
    })
    elemContainer.addEventListener("mouseleave", () => {
        fixedImageBox.style.display = "none";
    })

    var elems = document.querySelectorAll(".elem");
    elems.forEach((elem) => {
        var image = elem.getAttribute("data-image");
        elem.addEventListener("mouseenter", () => {
            fixedImageBox.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}

function menuAnimation() {
    var fullScreenNav = document.querySelector("#full-scr")
    var navImg = document.querySelector("#nav-part-1 img")
    var menu = document.querySelector("#menu")
    var flag = 0

    menu.addEventListener("click", () => {
        if (flag == 0) {
            fullScreenNav.style.top = 0
            navImg.style.opacity = 0
            flag = 1
        } else {
            fullScreenNav.style.top = "-100%"
            navImg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader-div");
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 5000)
}

containerAnimation();
swiperAnimation();
menuAnimation();
loaderAnimation();