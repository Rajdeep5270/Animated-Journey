var path = "M 50 250 Q 500 250 1000 250"

var finalPath = "M 50 250 Q 500 250 1000 250"

var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets) {

  path = `M 50 250 Q ${dets.x} ${dets.y} 1000 250`;

  gsap.to("svg path", {
    attr: {d: path},
    duration: 0.3,
    ease: "power3.out",
  })

});

string.addEventListener("mouseleave", function() {
  gsap.to("svg path", {
    attr: {d : finalPath},
    ease : "elastic.out(1,0.2)"
  })
})