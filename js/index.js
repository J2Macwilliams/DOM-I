const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Header----------------------------------


let navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];




const firstContent = document.createElement('a')
firstContent.textContent = "Energy";

const lastContent = document.createElement('a')
lastContent.textContent = "Sustainable";

const parentNav = document.querySelector('nav');

parentNav.prepend(firstContent);
parentNav.appendChild(lastContent);

const navColor = document.querySelectorAll("nav a");
navColor.forEach(element => {
  element.style.color = "#008000";
});

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA -------------------------------------------
const ctaTitle = document.querySelector(".cta-text h1");
ctaTitle.style.whiteSpace = 'pre';
ctaTitle.textContent = "DOM \n Is \n Awesome";

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


// Main Content-------------------------------------


const topTitle1 = document.querySelectorAll(".top-content .text-content h4")[0];
topTitle1.textContent = siteContent["main-content"]["features-h4"];

const topContent1 = document.querySelectorAll(".top-content .text-content p")[0];
topContent1.textContent = siteContent["main-content"]["features-content"];


const topTitle2 = document.querySelectorAll(".top-content .text-content h4")[1];
topTitle2.textContent = siteContent["main-content"]["about-h4"];

const topContent2 = document.querySelectorAll(".top-content .text-content p")[1];
topContent2.textContent = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const bottomTitle1 = document.querySelectorAll(".bottom-content .text-content h4")[0];
bottomTitle1.textContent = siteContent["main-content"]["services-h4"];

const bottomContent1 = document.querySelectorAll(".bottom-content .text-content p")[0];
bottomContent1.textContent = siteContent["main-content"]["services-content"];

const bottomTitle2 = document.querySelectorAll(".bottom-content .text-content h4")[1];
bottomTitle2.textContent = siteContent["main-content"]["product-h4"];

const bottomContent2 = document.querySelectorAll(".bottom-content .text-content p")[1];
bottomContent2.textContent = siteContent["main-content"]["product-content"];

const bottomTitle3 = document.querySelectorAll(".bottom-content .text-content h4")[2];
bottomTitle3.textContent = siteContent["main-content"]["vision-h4"];

const bottomContent3 = document.querySelectorAll(".bottom-content .text-content p")[2];
bottomContent3.textContent = siteContent["main-content"]["vision-content"];

// Contact ------------------------------------
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactInfo1 = document.querySelectorAll(".contact p")[0];
contactInfo1.style.whiteSpace = 'pre';
contactInfo1.textContent = "123 Way 456 Street \n Somewhere, USA";

const contactInfo2 = document.querySelectorAll(".contact p")[1];
contactInfo2.textContent = siteContent["contact"]["phone"];

const contactInfo3 = document.querySelectorAll(".contact p")[2];
contactInfo3.textContent = siteContent["contact"]["email"];

// Footer--------------------------------------
const footerInfo = document.querySelector("footer p");
footerInfo.textContent = siteContent["footer"]["copyright"];