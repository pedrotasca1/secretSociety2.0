const heroSection = document.querySelector(".hero-section");
const heroCollage = document.querySelector(".hero-collage");
const canCollage = document.querySelector(".can-animated");
const trainCollage = document.getElementById("train-collage");

const section02 = document.getElementById("section02");
const linkCamera = document.querySelector(".section02-image");


// Hero Section Effects
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // CHAT GPT HELPED ME WITH THIS
    const maxScroll = 600;
    const opacity = Math.max(0, Math.min(1, 1 - scrollY / maxScroll));

    heroCollage.style.opacity = opacity;
});

// CHAT GPT CODING HELP
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const offsetX = scrollY / 1;

    trainCollage.style.transform = `translate(${offsetX}px, 0)`;
});

document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const offsetX = scrollY / 1;
    const offsetY = scrollY / 1;

    const rotation = scrollY * 0.4;

    canCollage.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`;
});

const verticalScroll = gsap.utils.toArray(".vertical-scroll");

gsap.to(verticalScroll, {
    xPercent: -100 * (verticalScroll.length - 1),
    scrollTrigger: {
        trigger: "#section02",
        pin: true,
        scrub: 1,
    },
})

// Horizontal Scroll GSAP
const sectionHorizontal = gsap.utils.toArray(".section-content-container");
const totalScrollWidth = (sectionHorizontal.length - 1) * 100;


gsap.to(sectionHorizontal, {
    xPercent: -100 * (sectionHorizontal.length - 1), // Moves sections horizontally
    ease: "none",
    scrollTrigger: {
        trigger: "#section03", 
        pin: true, 
        scrub: 1,
        start: "top top",
        end: `+=${totalScrollWidth * 5}vw`,
        snap: {
            snapTo: (progress) => Math.round(progress * (sectionHorizontal.length - 1)) / (sectionHorizontal.length - 1), 
            // ease: "ease.inOut", // Smooth easing for snapping
        },
        anticipatePin: 1,
        markers: true,
    },
});

const lines = gsap.utils.toArray(".line");

gsap.to(lines, {
    opacity: 1, // Make each line visible
    y: 0, // Move the text to its original position (from off-screen)
    stagger: 1, // Delay between each line animation
    scrollTrigger: {
        trigger: "#section04", // Trigger when #section04 comes into view
        pin: true, // Pin the section during scroll
        scrub: 1, // Smooth scrolling effect
        start: "bottom bottom", // Start when section04 enters the viewport
        end: "+=800%", // Extend the scroll trigger to fit all lines
    },
});

const sectionFive = document.querySelector(".horizontal-scroll-wrapper"); // Container to move horizontally

gsap.to(sectionFive, {
    xPercent: -100 * (sectionFive.children.length - 1), // Move based on the number of sections
    scrollTrigger: {
        trigger: "#section05", // Trigger when section05 comes into view
        pin: true, // Pin the #section05 while the animation happens
        scrub: 1, // Smooth scrolling effect
        start: "top top", // Start when the top of section05 hits the top of the viewport
        end: "+=1440%", // End when the entire horizontal scroll is completed
    },
});