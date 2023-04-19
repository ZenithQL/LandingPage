const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector(".intro-text");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector(".intro-text");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 800,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);


//Video Animation
let accelamount = 0.45;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 2200;
  intro.style.width = '100%';
  text.style.width = '40%';
  text.style.zIndex='1';
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
