var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var image = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  });
});

image.addEventListener("mouseenter", function() {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#000000aa",
    })
})

image.addEventListener("mouseleave", function() {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff",
    })
})