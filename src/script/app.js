let slides = document.querySelectorAll(".slide");
let btns = document.querySelectorAll(".btn");
let currSlide = 0;
let autoPlayInterval = null;

// ===> Manual SlideShow Function <===
const slideShow = (manual) => {
    slides.forEach((sld) => {
        sld.classList.remove("active");
        btns.forEach((btn) => {
            btn.classList.remove("active")
        })
    });

    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        slideShow(i);
        currSlide = i;
    })
})



// ===> Auto Play SlideShow Function <===
const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        currSlide++;
        if (currSlide >= 5) {
            currSlide = 0;
        }
        slideShow(currSlide);
    }, 3500);
}

const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
}

startAutoPlay();

btns.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        stopAutoPlay();
    });
});

btns.forEach((btn) => {
    btn.addEventListener("mouseout", () => {
        startAutoPlay();
    });
});
