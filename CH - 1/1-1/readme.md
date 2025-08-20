# 🎬 GSAP Animated Journey

This project is a fun demo showcasing the power of **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)**.  
It brings life to boxes and text with smooth transitions, infinite loops, color morphing, and staggered effects. ✨

---

## 🎥 Live Demo

Here’s a sneak peek of the animation in action 👇  

![GSAP Animation Demo](https://github.com/Rajdeep5270/Animated-Journey/blob/master/CH%20-%201/1-1/1-1.gif?raw=true)

*(If the GIF doesn’t load, [click here](https://github.com/Rajdeep5270/Animated-Journey/blob/master/CH%20-%201/1-1/1-1.gif?raw=true) to view it directly.)*

---

## 🚀 Features

- ⚡ Smooth, hardware-accelerated animations with **GSAP**
- 🎯 **Box 1**:
  - Moves horizontally across the screen
  - Rotates a full **360°**
  - Morphs into a circle with color transitions
  - Loops infinitely with **yoyo effect**
- 🟥 **Box 2**:
  - Slides in from the right
  - Rotates **180°**
  - Turns into rounded shapes
  - Infinite looping with **yoyo effect**
- 📝 **Heading (`h1`)**:
  - Fades in from opacity `0`
  - Slides down smoothly
  - Animated in a staggered sequence

---

## 📂 Code Example

```javascript
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

gsap.from(".box2", {
  x: 1200,
  duration: 2,
  delay: 1,
  repeat: -1,
  rotate: 180,
  backgroundColor: "red",
  borderRadius: "500%",
  yoyo: true,
});

gsap.from("h1", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 30,
  color: "white",
  stagger: 0.5,
});
