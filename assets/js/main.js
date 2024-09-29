var burger = document.querySelector("#burger");
var nav = document.querySelector("nav");
var navLinks = document.querySelectorAll("#mainNav a");

Array.from(navLinks).forEach((a) =>
    a.addEventListener("click", () => {
        if (burger.classList.contains("toggle")) {
            burger.classList.remove("toggle");
        }
        if (nav.classList.contains("open-nav")) {
            nav.classList.remove("open-nav");
        }
    }));

burger.addEventListener("click", () => {
    nav.classList.toggle("open-nav");
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

window.addEventListener("mousemove", function(e) {
    var xPos = e.pageX;
    var yPos = e.pageY;
    document.getElementById("mouse").animate({
        top: `${yPos}px`,
        left: `${xPos}px`
    }, {duration: 0, fill:"forwards"}); 
    document.getElementById("mouse-outline").animate({
        top: `${yPos}px`,
        left: `${xPos}px`
    }, {duration: 1000, fill:"forwards"});
})