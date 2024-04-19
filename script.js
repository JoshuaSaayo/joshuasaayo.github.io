const offScreenMenu = document.getElementById("off-screen-menu");
const menuToggle = document.getElementById("menu-toggle");
const serviceMenu = document.getElementById("service-menu");
const services = document.getElementById("services");
const preloader = document.getElementById("preloader");
const stripes = document.getElementById("stripes");
const preloadItem = document.getElementById("preload-item");
const letterD = document.getElementById("letter-d");
const letterA = document.getElementById("letter-a");
const letterT = document.getElementById("letter-t");
const letterA2 = document.getElementById("letter-a2");
const targetD = document.getElementById("target-d");
const targetA = document.getElementById("target-a");
const targetT = document.getElementById("target-t");
const targetA2 = document.getElementById("target-a2");
const targetLetter = document.querySelectorAll(".target-letter");
//const letter = document.querySelectorAll(".letter");
const fading = document.querySelectorAll(".fading");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

services.addEventListener("click", () => {
  serviceMenu.classList.toggle('active');
});

//const resizeObserver = new ResizeObserver(entries => {
//  for (let entry of entries) {
//    const width = entry.contentRect.width;
//    letter.forEach((letters) => {
//        letters.style.width = `${width}px`;
//    })
//  }
//});

//resizeObserver.observe(stripes);

window.addEventListener('load', () => {
  setTimeout(() => {
  const targetDItem = targetD; // Example: You want to move the element to item3
  const targetDRect = targetDItem.getBoundingClientRect();
  const elementDRect = letterD.getBoundingClientRect();
  const targetAItem = targetA;
  const targetARect = targetAItem.getBoundingClientRect();
  const elementARect = letterA.getBoundingClientRect();
  const targetTItem = targetT;
  const targetTRect = targetTItem.getBoundingClientRect();
  const elementTRect = letterT.getBoundingClientRect();
  const targetA2Item = targetA2;
  const targetA2Rect = targetA2Item.getBoundingClientRect();
  const elementA2Rect = letterA2.getBoundingClientRect();

  const offsetDX = targetDRect.left - elementDRect.left - 46;
  const offsetDY = targetDRect.top - elementDRect.top - 46;
  const offsetAX = targetARect.left - elementARect.left - 46;
  const offsetAY = targetARect.top - elementARect.top - 46;
  const offsetTX = targetTRect.left - elementTRect.left - 46;
  const offsetTY = targetTRect.top - elementTRect.top - 46;
  const offsetA2X = targetA2Rect.left - elementA2Rect.left - 46;
  const offsetA2Y = targetA2Rect.top - elementA2Rect.top - 46;

  console.log(offsetDY)
  letterD.style.transition = 'transform 0.5s ease-in-out';
  letterD.style.transform = `translate(${offsetDX}px, ${offsetDY}px) scale(0.56)`;
  letterA.style.transition = 'transform 0.5s ease-in-out';
  letterA.style.transform = `translate(${offsetAX}px, ${offsetAY}px) scale(0.56)`;
  letterT.style.transition = 'transform 0.5s ease-in-out';
  letterT.style.transform = `translate(${offsetTX}px, ${offsetTY}px) scale(0.56)`;
  letterA2.style.transition = 'transform 0.5s ease-in-out';
  letterA2.style.transform = `translate(${offsetA2X}px, ${offsetA2Y}px) scale(0.56)`;
  }, 4000);
});

window.addEventListener("load", function() {
    setTimeout(function() {

      fading.forEach((fadeOut) => {
        fadeOut.classList.add("fade-in");
        fadeOut.classList.remove("fade-out");
      });

  }, 4000); // 4000 milliseconds = 4 seconds
});