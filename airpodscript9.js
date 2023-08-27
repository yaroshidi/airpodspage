import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Your GSAP and ScrollTrigger related code goes here

gsap.registerPlugin(ScrollTrigger);

// Animate the airpods-heading title
gsap.timeline({
scrollTrigger: {
trigger: ".section-header",
start: "top top",
end: "100% bottom",
scrub: 1,
}
})
.to(".heading-wrap", {
scale: 1.3,
duration: 0.9 // scale for almost the full duration
})
.to(".heading-wrap", {
opacity: 0,
duration: 0.1 // fade out faster at the end
});

// Animate the airpods-ribo: scale and move to bottom-right corner
gsap.to('.airpods-ribo', {
scale: 2.5,
x: "200%",
y: "120%",
scrollTrigger: {
trigger: '.section-header',
start: 'top top',
end: '100% bottom',
scrub: 1,
}
});

// Animate the airpods-leto: scale and move to top-left corner
gsap.to('.airpods-leto', {
scale: 2.5,
x: "-200%",
y: "-120%",
scrollTrigger: {
trigger: '.section-header',
start: 'top top',
end: '100% bottom',
scrub: 1,
}
});

// Fade out the text-size-regular subtitle
gsap.to('.text-size-regular', {
opacity: 0,
scrollTrigger: {
trigger: '.section-header',
start: '80% bottom',
end: '100% bottom',
scrub: 0.8,
}
});

// Fade out the airpods-ribo and airpods-leto
gsap.to(['.airpods-ribo', '.airpods-leto'], {
opacity: 0,
scrollTrigger: {
trigger: '.section-header',
start: '90% bottom', // start fading out when section-final is 90% scrolled
end: '100% bottom',
scrub: 1,
}
});

// Scale in the section-final from 0.5 to 1.2
gsap.fromTo('.section-final', {
scale: 0.8,
opacity: 0
}, {
scale: 1.2,
opacity: 1,
scrollTrigger: {
trigger: '.section-final',
start: 'top bottom', // start when section-final enters the viewport
end: 'bottom bottom',
scrub: 1,
}
});
  
