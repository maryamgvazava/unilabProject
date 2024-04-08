// const ham = document.querySelector('.ham')
// const ul = document.querySelector('ul')
// const nav = document.querySelector('nav')



// ham.addEventListener('click', function(){
//     ul.style.display = "flex";
//     ul.style.flexDirection = "column"
//     nav.classList.toggle('hamburgerTogle')
// })
import servicesObject from './services.js';
import popularTours from './popoularTours.js';
import blogsFunctions from './blogs.js';
// import selectLocation from './selectLocation.js'
const serviceCards = servicesObject();
const Tours = popularTours();
const blogCards = blogsFunctions()
// selectLocation()
import selectLocation from './selectLocation.js';

// Ensure DOM is fully loaded before executing the function
document.addEventListener('DOMContentLoaded', function() {
    selectLocation();
});


const header = document.querySelector("header");
const navComponent = document.querySelectorAll('.navComponent')
const loginLogo = document.querySelector('.loginLogo')
const loginToggle = document.querySelector('.loginToggle')

window.addEventListener('scroll', function(){
    
    navComponent.forEach(i=>{
        window.scrollY> 20 ? i.style.color = "#424244" : i.style.color = "#FFFFFF";
    })
    window.scrollY> 20 ? loginLogo.style.fill = "#424244" : loginLogo.style.fill = "#FFFFFF";
    window.scrollY> 20 ? header.classList.add("header-scrolled"): header.classList.remove("header-scrolled");
})

loginLogo.addEventListener('click', function(){
    loginToggle.classList.toggle('showLoginToggle')
})









const cards = document.querySelector('.cards');

for (let i = 0; i < serviceCards.length; i++){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
        <img class="serviceImg" src="${serviceCards[i].image}" alt="" >            
        <h3>${serviceCards[i].title}</h3>
        <p>${serviceCards[i].description}</p>
    `
    cards.append(card)
}


const places = document.querySelector('.places');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
const ToursPerPage = 4;
let currentPage = 0;

function displayTours() {
    places.innerHTML = ''; // Clear previous content
    const startIndex = currentPage * ToursPerPage;
    const endIndex = startIndex + ToursPerPage;
    const currentTours = Tours.slice(startIndex, endIndex);

    currentTours.forEach(tour => {
        let tourcard = document.createElement("div");
        tourcard.classList.add("tourcard");
        tourcard.innerHTML = `
            <img src="${tour.image}" alt="">
            <h3>${tour.title}</h3>
            <p>${tour.duration}</p>
            <p>${tour.price}</p>
        `;
        places.appendChild(tourcard);
    });
}

displayTours(); 

leftBtn.addEventListener('click', function () {
    currentPage = (currentPage + 1) % Math.ceil(Tours.length / ToursPerPage);
    displayTours(); 
});

rightBtn.addEventListener('click', function () {
    currentPage = (currentPage + 1) % Math.ceil(Tours.length / ToursPerPage);
    displayTours();
});



let blogSection = document.querySelector('.plogsDiv')

blogCards

for (let i = 0; i < blogCards.length; i++){
    let card = document.createElement("div");
    card.classList.add("blogs");
    card.innerHTML=`
        <img class="serviceImg" src="${blogCards[i].image}" alt="" >            
        <h3>${blogCards[i].title}</h3>
        
    `
    blogSection.append(card)
}