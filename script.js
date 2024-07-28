// const slider = document.querySelector(".intro-slider_slider-wrapper");
// const cards = document.querySelectorAll(".card");
// const ease = 0.05; // Slower reaction to scroll

// let currentX = 0;
// let targetX = 0;

// const lenis = new Lenis({
//     duration: 1.2, // Smooth scrolling duration
//     easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function for smoother scroll
//     smooth: true,
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// const getScaleFactor = (position, viewportWidth, isMobile) => {
//     const quarterWidth = viewportWidth / 4;
//     if (position < 0 || position > viewportWidth) {
//         return 0;
//     } else if (position < quarterWidth) {
//         return isMobile ? lerp(0.7, 1.0, position / quarterWidth) : lerp(0.7, 1.0, position / quarterWidth); // Adjusted scaling
//     } else if (position < 2 * quarterWidth) {
//         return isMobile ? lerp(1.0, 1.1, (position - quarterWidth) / quarterWidth) : lerp(1.0, 1.1, (position - quarterWidth) / quarterWidth); // Adjusted scaling
//     } else if (position < 3 * quarterWidth) {
//         return isMobile ? lerp(1.1, 1.0, (position - 2 * quarterWidth) / quarterWidth) : lerp(1.1, 1.0, (position - 2 * quarterWidth) / quarterWidth); // Adjusted scaling
//     } else {
//         return isMobile ? lerp(1.0, 0.7, (position - 3 * quarterWidth) / quarterWidth) : lerp(1.0, 0.7, (position - 3 * quarterWidth) / quarterWidth); // Adjusted scaling
//     }
// };

// const updateScales = () => {
//     const viewportWidth = window.innerWidth;
//     const isMobile = viewportWidth <= 992;
//     cards.forEach((card) => {
//         const cardRect = card.getBoundingClientRect();
//         const cardCenter = cardRect.left + cardRect.width / 2;
//         const scaleFactor = getScaleFactor(cardCenter, viewportWidth, isMobile);
//         const imgScaleFactor = scaleFactor * (isMobile ? 1.1 : 1.05); // Adjusted scaling for images
//         const img = card.querySelector("img");
//         card.style.transform = `scale(${scaleFactor})`;
//         img.style.transform = `scale(${imgScaleFactor})`;
//     });
// };

// const lerp = (start, end, t) => {
//     return start * (1 - t) + end * t;
// };

// const easeInOutQuad = (start, end, t) => {
//     t = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//     return start * (1 - t) + end * t;
// };

// const update = () => {
//     currentX = lerp(currentX, targetX, ease);
//     slider.style.transform = `translateX(${currentX}%)`;
//     updateScales();
//     requestAnimationFrame(update);
// };

// lenis.on("scroll", ({ scroll }) => {
//     const maxScroll = document.body.scrollHeight - window.innerHeight;
//     const scrollProgress = scroll / maxScroll;
//     targetX = -scrollProgress * 30; // Slower scroll effect
// });

// update();

const slider = document.querySelector(".intro-slider_slider-wrapper");
const cards = document.querySelectorAll(".card");
const ease = 0.05;

let currentX = 0;
let targetX = 0;

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const getScaleFactor = (position, viewportWidth, isMobile) => {
    const quarterWidth = viewportWidth / 4;
    if (position < 0 || position > viewportWidth) {
        return 0;
    } else if (position < quarterWidth) {
        return isMobile ? lerp(0.7, 1.0, position / quarterWidth) : lerp(0.7, 1.0, position / quarterWidth);
    } else if (position < 2 * quarterWidth) {
        return isMobile ? lerp(1.0, 1.1, (position - quarterWidth) / quarterWidth) : lerp(1.0, 1.1, (position - quarterWidth) / quarterWidth);
    } else if (position < 3 * quarterWidth) {
        return isMobile ? lerp(1.1, 1.0, (position - 2 * quarterWidth) / quarterWidth) : lerp(1.1, 1.0, (position - 2 * quarterWidth) / quarterWidth);
    } else {
        return isMobile ? lerp(1.0, 0.7, (position - 3 * quarterWidth) / quarterWidth) : lerp(1.0, 0.7, (position - 3 * quarterWidth) / quarterWidth);
    }
};

const updateScales = () => {
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 992;
    cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const scaleFactor = getScaleFactor(cardCenter, viewportWidth, isMobile);
        const imgScaleFactor = scaleFactor * (isMobile ? 1.1 : 1.05);
        const img = card.querySelector("img");
        card.style.transform = `scale(${scaleFactor})`;
        img.style.transform = `scale(${imgScaleFactor})`;
    });
};

const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
};

const update = () => {
    currentX = lerp(currentX, targetX, ease);
    slider.style.transform = `translateX(${currentX}%)`;
    updateScales();
    requestAnimationFrame(update);
};

lenis.on("scroll", ({ scroll }) => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = scroll / maxScroll;
    targetX = -scrollProgress * 46;
});

update();
