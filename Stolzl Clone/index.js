"use strict";
const links = document.querySelectorAll(".nav--link");
const heroImg = document.querySelector(".hero-img");
const selectorSingle = [
  ".about-para",
  ".about-heading",
  ".hero-img",
  ".header--para-box",
  ".nav--link",
  ".header--heading",
  ".about",
];
const selectors = [
  ".projects--row--heading",
  ".project-para",
  ".projects--row--heading",
  ".projects--link--wrapper",
  ".projects--link",
  ".project-wrapper",
];
const observerAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add your logic for when the element is intersecting
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = 1;
      observerAnimation.unobserve(entry.target);
    }
  });
});
selectors.forEach((selector) => {
  const elementsToObserve = document.querySelectorAll(selector);
  elementsToObserve.forEach((element) => {
    observerAnimation.observe(element);
  });
});
selectorSingle.forEach((selector) => {
  const elementObserved = document.querySelector(selector);
  observerAnimation.observe(elementObserved);
});

const observerLinks = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
    } else {
      entry.target.style.transform = "translateY(0)";
    }
  });
});
let i = 1;
links.forEach((link) => {
  // link.style.transform = 'translateY(100%)'
  link.style.transform = `translateY(${i * 100}%)`;
  link.style.transition = `transform ${i * 300}ms ease-in-out`; // Corrected the transition property
  i++;
  observerLinks.observe(link);
});

const observerImg = new IntersectionObserver((entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.style.transform = "translateY(0)";
    entry.target.style.opacity = 1;
  }
});
observerImg.observe(heroImg);
