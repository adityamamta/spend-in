"use strict";

const navDropdowns = document.querySelectorAll(".dropdown-link");

navDropdowns.forEach((dropdown) => {

    const dropdownHeightElement = dropdown.querySelector(".nav-dropdown");
    const dropdownWidth = dropdownHeightElement.offsetWidth;

    const navList = dropdown.querySelector(".dropdown-height");
    navList.style.width = `${dropdownWidth}px`;

    dropdown.addEventListener("click", () => {
        const arrowDown = dropdown.querySelectorAll(".arrow-down");

        const dropdownHeightElement = dropdown.querySelector(".nav-dropdown");
        const dropdownHeight = dropdownHeightElement.offsetHeight;

        const navList = dropdown.querySelector(".dropdown-height");
        navList.classList.toggle("open-list");
        if (navList.classList.contains("open-list")) {
            arrowDown.forEach((arrow) => {
                arrow.classList.add("arrow-up");
            });

            navList.style.height = `${dropdownHeight}px`;
        } else {
            arrowDown.forEach((arrow) => {
                arrow.classList.remove("arrow-up");
            });

            navList.style.height = "0";
        }



    });
});


const switchBtn = document.querySelector(".switch-btn");
const storyTexts = document.querySelectorAll(".story");
const storyImgs = document.querySelectorAll(".story-img");


switchBtn.addEventListener("click", () => {
    switchBtn.classList.toggle("right-switch");



    storyTexts.forEach((storyText) => {
        storyText.classList.toggle("hidden");
    })
    storyImgs.forEach((storyImg) => {
        storyImg.classList.toggle("hidden");
    })
});



const mySwitch = document.querySelector(".my-switch");
const proPrice = document.querySelector(".pro-price");
const ultimatePrice = document.querySelector(".ultimate-price");

mySwitch.addEventListener("click", () => {
    mySwitch.classList.toggle("my-switch-on");

    if (mySwitch.classList.contains("my-switch-on")) {
        proPrice.textContent = "$10";
        ultimatePrice.textContent = "$29";
    } else {
        proPrice.textContent = "$12";
        ultimatePrice.textContent = "$33";
    }
});




// slide nav bar 

const slideNavIcon = document.querySelector(".phone-nav-icon");
const navigation = document.querySelector(".navigation");

slideNavIcon.addEventListener("click", () => {
    navigation.classList.toggle("slide-on");
})

window.addEventListener("scroll", () => {
    if (navigation.classList.contains("slide-on")) {
        navigation.classList.remove("slide-on");
    }
})








const swiper = new Swiper('.swiper', {
    loop: false,
    spaceBetween: 30,


    navigation: {
        nextEl: '.swiper-next-btn',
        prevEl: '.swiper-prev-btn',
    },

    breakpoints: {
        450: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
    },

    on: {
        slideChange: function () {
            const prevButton = document.querySelector('.swiper-prev-btn');
            const nextButton = document.querySelector('.swiper-next-btn');

            if (swiper.isBeginning) {
                prevButton.classList.add('carousel-disabled-btn');
            } else {
                prevButton.classList.remove('carousel-disabled-btn');
            }
            if (swiper.isEnd) {
                nextButton.classList.add('carousel-disabled-btn');
            } else {
                nextButton.classList.remove('carousel-disabled-btn');
            }
        }
    }

});




//   navbar scroll functioning

const body = document.body;
const navbarContainer = document.querySelector(".navbar-container");
const heroContainer = document.querySelector(".hero-container");
const logoImg = navbarContainer.querySelector(".logo");
const arrowdownNav = document.querySelectorAll(".dropdown-link .arrow-down");

const navigationLinks = document.querySelectorAll(".navigation a");


const phoneNavIcon = navbarContainer.querySelector(".phone-nav-icon img");
const heroSection = document.querySelector(".hero");
const heroHeight = heroSection.offsetHeight;

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > heroHeight) {
        navbarContainer.style.backgroundColor = "white";
        navbarContainer.classList.add("navbar-darkcolor-text");
        logoImg.src = "img/color-logo.png";
        phoneNavIcon.src = "img/dark-nav-icon.png";
        arrowdownNav.forEach((arrowdown) => {
            if (!arrowdown.classList.contains("show-arrow-down")) {
            arrowdown.src = "img/dark-arrow-down.png";
            }
        })

    } else {
        navbarContainer.style.backgroundColor = "#0D121F";
        navbarContainer.classList.remove("navbar-darkcolor-text");
        logoImg.src = "img/logo.png";
        phoneNavIcon.src = "img/nav-icon-btn.png";
        arrowdownNav.forEach((arrowdown) => {
            if (!arrowdown.classList.contains("show-arrow-down")) {
                arrowdown.src = "img/arrow-down.png";
            }
        }) 
    }


    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
    

});

navigationLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        setTimeout(() => {
        body.classList.remove("scroll-up", "scroll-down");
        body.classList.add("scroll-down");
        }, 10);
    });
});





