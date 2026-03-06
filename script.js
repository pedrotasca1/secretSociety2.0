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

    // Check if the screen is mobile width
    if (window.innerWidth <= 900) {
        // Shifting UP to align with background
        trainCollage.style.transform = `translate(${offsetX}px, -40px)`;
    } else {
        trainCollage.style.transform = `translate(${offsetX}px, 0)`;
    }
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

// Responsive GSAP Settings
let mm = gsap.matchMedia();

// Horizontal Scroll GSAP
const sectionHorizontal = gsap.utils.toArray(".section-content-container");
const totalScrollWidth = (sectionHorizontal.length - 1) * 100;

mm.add("(min-width: 901px)", () => {
    // Desktop: with snapping
    gsap.to(sectionHorizontal, {
        xPercent: -100 * (sectionHorizontal.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            pin: true,
            scrub: 1,
            start: "top top",
            end: `+=${totalScrollWidth * 5}vw`,
            snap: {
                snapTo: (progress) => Math.round(progress * (sectionHorizontal.length - 1)) / (sectionHorizontal.length - 1),
            },
            anticipatePin: 1,
        },
    });
});

mm.add("(max-width: 900px)", () => {
    // Mobile: no snapping
    gsap.to(sectionHorizontal, {
        xPercent: -100 * (sectionHorizontal.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#section03",
            pin: true,
            scrub: 1,
            start: "top top",
            end: `+=${totalScrollWidth * 5}vw`,
            anticipatePin: 1,
        },
    });
});

const lines = gsap.utils.toArray(".line");

gsap.to(lines, {
    opacity: 1,
    y: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: "#section04",
        pin: true,
        scrub: 1,
        start: "bottom bottom",
        end: "+=800%",
    },
});

const sectionFive = document.querySelector(".horizontal-scroll-wrapper");

gsap.to(sectionFive, {
    xPercent: -100 * (sectionFive.children.length - 1),
    scrollTrigger: {
        trigger: "#section05",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=1440%",
        onLeave: () => {
            appendImage()
        }
    },
});

// Function to append the image
const appendImage = () => {
    // Create a new image element
    const newImage = document.createElement("img");
    newImage.src = "Assets/illustrations/white-tag.png"; // Replace with the image path
    newImage.classList.add("final-image");

    // Append the image to the section
    section05.appendChild(newImage);
    gsap.fromTo(newImage,
        { opacity: 0, scale: 0.2 }, // Initial state: hidden and small
        { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" } // End state: fully visible and at normal size
    );
};
