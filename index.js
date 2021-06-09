const regType = document.querySelector(".reg");
const loginType = document.querySelector(".login");
const loginAction = document.getElementById("login-action");
const regAction = document.getElementById("reg-action");
const navLink = document.querySelectorAll(".nav-link");
const altenativeLogin = document.querySelector(".alt-login");
const alternativeReg = document.querySelector(".alt-reg");
const hideLogin = document.getElementById("hide-login");
// const heroBtn = document.querySelector(".hero-btn");
const hideHeroContainer = document.querySelector(".hero-container");
const slide = document.querySelector(".success-container");
const navToggle = document.querySelector(".toggle-nav");
const closeBtn = document.querySelector(".sidebar-close");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const sidebarLinks = document.querySelectorAll(".sidebar-link");
// cart
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".cart-close");
const toggleCartBtn = document.querySelector(".toggle-cart");

//section 
const featuredCenter = document.querySelector(".featured-center");
const sectionFeatured = document.querySelector(".section");

navLink[0].addEventListener("click", function() {
    let lastLink = navLink[3];
    this.classList.add("active");
    lastLink.classList.remove("active");
    hideLogin.classList.remove("active")
    hideHeroContainer.classList.remove("hide");
    sectionFeatured.classList.remove("active")
});

navLink[1].addEventListener("click", function() {
    // let homeActive = navLink[0];
    // let loginActive = navLink[3];
    // this.classList.add("active1")
    // loginAction.classList.remove("active");
    // homeActive.classList.remove("active");
    hideLogin.classList.remove("active");
});

navLink[2].addEventListener("click", function() {
    hideLogin.classList.remove("active");
});

navLink[3].addEventListener("click", function() {
    let firstLink = navLink[0]; 
    hideHeroContainer.classList.add("hide");
    this.classList.add("active");
    firstLink.classList.remove("active");
    hideLogin.classList.add("active");
    sectionFeatured.classList.add("active");
});

loginAction.addEventListener('click', openLoginPage);
regAction.addEventListener('click', openRegPage);
altenativeLogin.addEventListener('click', openLoginPage );
alternativeReg.addEventListener('click', openRegPage);

function openLoginPage() {
        regType.classList.remove("show-page");
        loginType.classList.add("show-page");
        loginAction.classList.add("show");
        regAction.classList.remove("show");
}

function openRegPage() {
    regType.classList.add("show-page");
    loginType.classList.remove("show-page");
    regAction.classList.add("show");
    loginAction.classList.remove("show");
}

navToggle.addEventListener("click", function() {
    sidebarOverlay.classList.add("show");
});

closeBtn.addEventListener("click", function() {
    sidebarOverlay.classList.remove("show");
});

sidebarLinks[0].addEventListener("click", function() {
    sidebarOverlay.classList.remove("show");
    hideLogin.classList.remove("active")
    hideHeroContainer.classList.remove("hide");
});

sidebarLinks[2].addEventListener("click", ()=> {
    sidebarOverlay.classList.remove("show");
});

sidebarLinks[3].addEventListener("click", function() {

    sidebarOverlay.classList.remove("show");

    hideHeroContainer.classList.add("hide");
    hideLogin.classList.add("active");
    
});


toggleCartBtn.addEventListener("click", ()=> {
    cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener("click", ()=> {
    cartOverlay.classList.remove('show');
});


