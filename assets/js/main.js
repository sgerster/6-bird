var burger = document.querySelector("#burger");
var nav = document.querySelector("#mainNav");
var navLinks = document.querySelectorAll("#mainNav a");

Array.from(navLinks).forEach((a) =>
    a.addEventListener("click", () => {
        if (burger.classList.contains("toggle")) {
            burger.classList.remove("toggle");
        }
        if (nav.classList.contains("nav-active")) {
            nav.classList.remove("nav-active");
        }
    }));

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
});

window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance * 1}px)`;
    document.querySelectorAll(".parallax-1").forEach(item => {
        item.style.transform = `translateY(${distance * 0.2}px)`;
    })
    document.querySelectorAll(".parallax-2").forEach(item => {
        item.style.transform = `translateY(${distance * 0.5}px)`;
    })
})