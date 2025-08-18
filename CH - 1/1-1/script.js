gsap.to("#box1", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  backgroundColor: "blue",
  borderRadius: "50%",
  yoyo: true,
});


gsap.from(".box2",{
    x: 1200,
    duration: 2,
    delay: 1,
    repeat: -1,
    rotate: 180,
    backgroundColor : "red",
    borderRadius: "500%",
    yoyo: true,
})

gsap.from("h1",{
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 30,
    color : "white",
    stagger : 0.5,
})