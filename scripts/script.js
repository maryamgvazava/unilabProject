
import servicesObject from './services.js';
import popularTours from './popoularTours.js';
import blogsFunctions from './blogs.js';
import selectLocation from './selectLocation.js';


document.addEventListener('DOMContentLoaded', function() {
    selectLocation();
    servicesObject();
    popularTours();
    blogsFunctions()

});


const header = document.querySelector("header");
const navComponent = document.querySelectorAll('.navComponent')
const loginLogo = document.querySelector('.loginLogo')
const loginToggle = document.querySelector('.loginToggle')
const logo = document.querySelector('.logo')


window.addEventListener('scroll', function(){
    
    navComponent.forEach(i=>{
        window.scrollY> 20 ? i.style.color = "#424244" : i.style.color = "#FFFFFF";
    })
    window.scrollY> 20 ? loginLogo.style.fill = "#424244" : loginLogo.style.fill = "#FFFFFF";
    window.scrollY> 20 ? logo.style.color = "#424244" : logo.style.color = "#FFFFFF";
    window.scrollY> 20 ? header.classList.add("header-scrolled"): header.classList.remove("header-scrolled");
})

loginLogo.addEventListener('click', function(){
    loginToggle.classList.toggle('showLoginToggle')
})







