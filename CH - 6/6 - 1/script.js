function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfvalue = Math.floor(splittedText.length / 2);

  var clutter = "";

  splittedText.forEach(function (e, i) {
    if (i < halfvalue) {
      clutter += `<span class="first">${e}</span>`;
    } else {
      clutter += `<span class="second">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

breakTheText();

gsap.from(".first" , {
    y: 100,
    duration : 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0,
})

gsap.from(".second" , {
    y: 100,
    duration : 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0,
})