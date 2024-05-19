// SCROLL TRIGGER CODEPEN JS FILE ....

function locomotiveCodepen() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiveCodepen();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// YOUR JS CODE WRITE BELOW :-- BE REMEMBER =>  DO NOT TOUCH ABOVE CODE OR ANY CHANGES...

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.65,
});

gsap.from("#nav>.left>h2 , #nav > h2", {
  stagger: 0.3,
  y: 11,
  duration: 1.8,
  ease: Power2,
  opacity: 0,
});

gsap.from("#box2>h1", {
  y: -50,
  duration: 1.6,
  ease: Power2,
  opacity: 0,
});

gsap.from(".box", {
  y: 30,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

Shery.imageEffect("#box2>img ,#page3>.left>img , #page3>.right>img", {
  style: 3,
  config: {
    uFrequencyX: { value: 11, range: [0, 100] },
    uFrequencyY: { value: 4, range: [0, 100] },
    uFrequencyZ: { value: 42.75, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 18 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.796569855942951 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.58, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#box1>img", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.71, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.31, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("#box2>img", {
  z: -3,
  opacity: 0,
  duration: 2,
  ease: Expo.easeInOut,
});

Shery.imageEffect(".image-Effect", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.75, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.891885970176909 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.71, range: [1, 15] },
    durationOut: { value: 0.59, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.15, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.76, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 14 } },
    discard_threshold: { value: 0.41, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.43, range: [0, 2] },
    noise_scale: { value: 11.45, range: [0, 100] },
  },
  gooey: true,
});

function videoButtonAnimation() {
  var page5Box = document.querySelector("#page5 .box");
  var clip = document.querySelector("#page5 > video");

  page5Box.addEventListener("mouseover", function () {
    clip.play();
    gsap.to(clip, {
      opacity: 1,
      duration: 0.2,
      ease: Power1,
    });
  });

  page5Box.addEventListener("mouseleave", function () {
    clip.pause();
    gsap.to(clip, {
      opacity: 0,
      ease: Power1,
    });
  });
}
videoButtonAnimation();
