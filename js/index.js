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
navItem[0].textContent = "Services";
navItem[1].textContent = "Product";
navItem[2].textContent = "Vision";
navItem[3].textContent = "Features";
navItem[4].textContent = "About";
navItem[5].textContent = "Product";

const navColor = document.querySelectorAll("nav a");
navColor.forEach(element => {
  element.style.color ="#008000";
});

firstContent.textContent = "Energy";
lastContent.textContent = "Sustainable";



// cardTitle.forEach( element => {
//   console.log(element);
//   element.style.color = '#177B78';
// });

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA -------------------------------------------
const ctaTitle = document.querySelector(".cta-text h1");
ctaTitle.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


// Main Content-------------------------------------


const topContentTitle1 = document.querySelectorAll(".top-content .text-content h4")[0];
console.log(topContentTitle1);
topContentTitle1.textContent = 'Features';

const topContent1 = document.querySelectorAll(".top-content .text-content p")[0];
console.log(topContent1);
topContent1.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


const topContentTitle2 = document.querySelectorAll(".top-content .text-content h4")[1];

topContentTitle2.textContent = 'About';

const topContent2 = document.querySelectorAll(".top-content .text-content p")[1];

topContent2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const bottomTitle1 = document.querySelectorAll(".bottom-content .text-content h4")[0];

bottomTitle1.textContent = 'Services';

const bottomContent1 = document.querySelectorAll(".bottom-content .text-content p")[0];

bottomContent1.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomTitle2 = document.querySelectorAll(".bottom-content .text-content h4")[1];

bottomTitle2.textContent = 'Product';

const bottomContent2 = document.querySelectorAll(".bottom-content .text-content p")[1];

bottomContent2.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomTitle3 = document.querySelectorAll(".bottom-content .text-content h4")[2];
bottomTitle3.textContent = 'Vision';

const bottomContent3 = document.querySelectorAll(".bottom-content .text-content p")[2];
bottomContent3.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// Contact ------------------------------------
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = "Contact";

const contactInfo1 = document.querySelectorAll(".contact p")[0];
contactInfo1.textContent = "123 Way 456 Street \n Somewhere, USA";

const contactInfo2 = document.querySelectorAll(".contact p")[1];
contactInfo2.textContent = "1 (888) 888-8888";

const contactInfo3 = document.querySelectorAll(".contact p")[2];
contactInfo3.textContent = "sales@greatidea.io";

// Footer--------------------------------------
const footerInfo = document.querySelector("footer p");
footerInfo.textContent = "Copyright Great Idea! 2018";