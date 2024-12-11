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

gsap.registerPlugin(ScrollTrigger);



// Horizontal Scroll GSAP
const sectionHorizontal = gsap.utils.toArray(".section03-content-container");

gsap.to(sectionHorizontal, {
    xPercent: -100 * (sectionHorizontal.length - 1),
    ease: "power1.inOut", 
    scrollTrigger: {
        trigger: "#section03",
        pin: true,
        scrub: 0.3,
        start: "center center",
        end: "+=1440%",
        immediateRender: true,
        snap: {
            snapTo: 1 / (sectionHorizontal.length - 1),
            ease: "ease.in",        
        },
        
    },
});





