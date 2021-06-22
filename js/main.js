
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const bodyTag = document.getElementsByTagName("header");
var clicked = false;
function myFunction() {
    let subNav = document.querySelector(".sub-nav");
    if (clicked) {
        document.getElementById("plusBtn").innerText = "+";
        subNav.style.position = "absolute";
        subNav.style.visibility = "hidden";
        subNav.style.transitionDelay = "1s";
        subNav.style.display = "none";
        document.getElementById("plusBtn").style.top = "40%";
        document.getElementById("plusBtn").style.right = "-105px";
        clicked = false;
    } else {
        document.getElementById("plusBtn").innerText = "-";
        subNav.style.position = "relative";
        subNav.style.visibility = "visible";
        subNav.style.transitionDelay = "1s";
        subNav.style.display = "block";
        document.getElementById("plusBtn").style.top = "20px";
        document.getElementById("plusBtn").style.right = "-80px";
        clicked = true;
    }
}
menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
    document.getElementById("plusBtn").style.display = "block";
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    document.getElementById("plusBtn").style.display = "none";
}
bodyTag.onclick = () => {
    console.log("Allah Mohan")
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
//  Frequently Asked Question Section
jQuery(document).ready(function () {
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });
})