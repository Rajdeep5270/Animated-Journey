let tl = gsap.timeline();

tl.from("#name",{
    opacity: 0,
    y: -20,
    duration: 0.50,
    delay: 1,
})

tl.from("h2",{
    opacity: 0,
    y: -20,
    duration: 0.50,
    stagger: 0.3
})

tl.from("#logo",{
    opacity: 0,
    y: -20,
    duration: 0.50,
})