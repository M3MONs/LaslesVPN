//Navbar
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
})
//Fixed Navbar
const nav = document.getElementById("nav")
const navCenter = document.querySelector(".nav-center")

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navCenter.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
});

//Smoth Scroll
const scrollLinks = document.querySelectorAll(".link");
scrollLinks.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        console.log(navHeight);
        let position = element.offsetTop - navHeight;

        if (navHeight > 371) {
            position = position + containerHeight;
        } else if (navHeight < 42) {
            position = position - 100;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        if (navHeight > 300) {
            linksContainer.style.height = 0;
        }
    })
});