const humbMenu = document.querySelector(".hamburger-menu")
const humbX = document.querySelector(".hamburger-x")
const overlay = document.querySelector(".nav-overlay")
const overlayX = document.querySelector(".overlay-x")
const overlayList = document.querySelector(".nav-overlay-list")

humbMenu.addEventListener("click", function(event) {
    humbMenu.style.opacity = "0";
    humbX.style.transform = "translate(0%)";
    overlay.style.transform = "translate(0%)";
    overlayX.style.transform = "translate(0%)";
    overlayList.style.transform = "translate(0%)";
});

humbX.addEventListener("click", function(event) {
    humbMenu.style.opacity = "1";
    humbX.style.transform = "translate(1000%)";
    overlay.style.transform = "translate(100%)";
    overlayList.style.transform = "translate(100%)";
    overlayX.style.transform = "translate(-100%)";
});

overlayX.addEventListener("click", function(event) {
    humbMenu.style.opacity = "1";
    humbX.style.transform = "translate(1000%)";
    overlay.style.transform = "translate(100%)";
    overlayX.style.transform = "translate(-100%)";    overlayList.style.transform = "translate(100%)";

})

const navLogo1 = document.querySelector("#nav-logo-1");

navLogo1.addEventListener("click", function(event) {
    window.open("../index.html", "_self")
})

const navLogo2 = document.querySelector("#nav-logo-2");

navLogo2.addEventListener("click", function(event) {
    window.open("../index.html", "_self")
})
