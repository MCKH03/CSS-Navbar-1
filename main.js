"use strict";

// Selecting elements
const activeIndic = document.querySelector(".indicator");
const nav = document.querySelector(".nav");
const allNavBtns = document.querySelectorAll(".nav-btn");
const plusBtn = document.querySelector(".plus-btn");
const plusIcon = document.querySelector(".plus");
const allSubBtns = document.querySelectorAll(".sub-btn");

// Event Listeners
nav.addEventListener("click", function (e) {
  // Selecting the clicked nav-btn
  if (e.target.closest(".nav-btn")) {
    // Activating the clicked nav-btn
    const clicked = e.target.closest(".nav-btn");
    allNavBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    clicked.classList.add("active");

    // Finding the gap between nav-btns
    const position = clicked.dataset.position;
    const clickedWidth = clicked.getBoundingClientRect().width;
    const navPadding =
      parseFloat(getComputedStyle(nav).getPropertyValue("padding-left")) * 2;
    const navWidth = nav.getBoundingClientRect().width;
    const plusWidth = plusBtn.getBoundingClientRect().width;
    const gap = (navWidth - navPadding - plusWidth - clickedWidth * 4) / 4;

    // Moving the active indicator to the correct position
    if (position < 2) {
      activeIndic.style.transform = `translateX(${
        (gap + clickedWidth) * position
      }px)`;
    } else {
      activeIndic.style.transform = `translateX(${
        (gap + clickedWidth) * position + gap + plusWidth
      }px)`;
    }
  }
});

plusIcon.addEventListener("click", function () {
  plusIcon.classList.toggle("active");

  allSubBtns.forEach((btn) => btn.classList.toggle("active"));
});
