import {allProducts} from './src/productObeject.js';
import {getElement} from './src/productObeject.js';

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

// console.log(heroBtn);

window.addEventListener("load", ()=> {
    setTimeout(() => {
	    slide.classList.add("active");
    }, 25)
});

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

// heroBtn.addEventListener('click', ()=> {
//   hideHeroContainer.classList.add('hide');
//   hideLogin.classList.add("active");
// })
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

// open cart functionality
const openCart = () => {
    cartOverlay.classList.add('show');

};

// add to cart fuctionality
const addToCart = (id) => {
  console.log(id);
  openCart();
};

//window load activities 

const init =  ()=> {
    const products =  fetchProducts();
    console.log(products);
    if(products) {
    // add products to store
    setupStore(products);
    const featured = store.filter((product) => product.featured == true);
    // console.log(featured);
    display(featured, getElement(".featured-center"));    
    }
    
}
window.addEventListener('DOMContentLoaded', init);

// Fetch products
const fetchProducts = () => {
    // const response = await fetch(allProducts).catch((err) => console.log(err));
    // if(response) {
    //     return response.json();
    // }
    let response = allProducts;
    return response;
};

// local storage setup
const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if(storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  }
  else {
    storageItem = [];
  }
  return storageItem
}
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
}

// Utils
let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map((product)=> {
        const {id, fields:{featured, name,price,company,colors,image:img}} = product;

        const image = img[0].thumbnails.large.url;

        return {id,featured,name,price,company,colors,image}
    });
    setStorageItem('store', store);
};

// format price display
const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GHS',
  }).format((price / 100).toFixed(2));
  return formattedPrice;
}

// display products
const display = (products, element) => {
    element.innerHTML = products.map((product) => {
        const {id, name, image, price} = product;
        return `<article class="product">
          <div class="product-container">
            <img src="${image}" alt="${name}" class="product-img img">
          
            
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id=${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
          <p class="product-name">
            ${name}
          </p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
        </article>`;
    }).join('');
    element.addEventListener("click", function(e) {
        const parent = e.target.parentElement;
        if(parent.classList.contains('product-cart-btn')) {
            addToCart(parent.dataset.id);
        }
    });
};

