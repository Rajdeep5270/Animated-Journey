let tl = gsap.timeline();

tl.from("#nav h2", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: -30,
});

tl.from("#nav ul li", {
  opacity: 0,
  y: -30,
  duration: 1,
  stagger: 0.5,
});

tl.from("#banner .banner-content h1", {
  opacity: 0,
  x: -100,
  duration: 1,
});

tl.from("#banner .banner-content p", {
  opacity: 0,
  x: 100,
  duration: 1,
});

gsap.to("#animation h2", {
  xPercent: -140,
  scrollTrigger: {
    trigger: "#animation",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
