// import selectLocation from "./selectLocation";

export default function popularTours (){
    let popularTours = [
        {
            image: "./images/popularToursImages/china_greatWall.jpg",
            title:"Barcelona, Spain",
            duration: "2 adults, 7 days",
            price:"2400$"
        },

        {
            image: "./images/popularToursImages/egypt.png",
            title:"Cairo, Egypt",
            duration: "4 adults, 8 days",
            price:"2700$"
        },
        {
            image: "./images/popularToursImages/france.png",
            title:"Paris, France",
            duration: "2 adults, 4 days",
            price:"2100$"
        },
        {
            image: "./images/popularToursImages/Georgia_martvili_Canyon.jpg",
            title:"Martvili, georgia",
            duration: "5 adults, 10 days",
            price:"3000$"
        },
        {
            image: "./images/popularToursImages/greece_mikonos.jpg",
            title:"Mykonos, Greece",
            duration: "5 adults, 7 days",
            price:"2900$"
        },
        {
            image: "./images/popularToursImages/india_Dehli.jpg",
            title:"Dehli, India",
            duration: "4 adults, 7 days",
            price:"1800$"
        },
        {
            image: "./images/popularToursImages/italy.png",
            title:"Rome, Italy",
            duration: "2 adults, 6 days",
            price:"2400$"
        },
        {
            image: "./images/popularToursImages/Lake_Lucerne_Switzerland.webp",
            title:"Lake Lucerne, Switzerland",
            duration: "3 adults, 7 days",
            price:"5200$"
        },
        {
            image: "./images/popularToursImages/Rothenburg_ob_der_Tauber.webp",
            title:"Rothenburg, Germany",
            duration: "6 adults, 7 days",
            price:"4000$"
        },
        {
            image: "./images/popularToursImages/spain.png",
            title:"Barcelona, Spain",
            duration: "2 adults, 5 days",
            price:"3200$"
        },
        {
            image: "./images/popularToursImages/Turkey_Antalya.jpg",
            title:"Antalya, Turkey",
            duration: "2 adults, 4 days",
            price:"2000$"
        },
        {
            image: "./images/popularToursImages/Twin-Towers-Malaysia.webp",
            title:"Malaisya, Malaisya",
            duration: "2 adults, 7 days",
            price:"3700$"
        },
        

    ]


    
const places = document.querySelector('.places');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
let bookNow = document.querySelector('.bookNow')
let selectedTours = document.querySelector('.SelectedTours')

let searchedOptions = document.querySelector('.searchedOptions')

const ToursPerPage = 4;
let currentPage = 0;

function displayTours() {
    places.innerHTML = ''; // Clear previous content
    const startIndex = currentPage * ToursPerPage;
    const endIndex = startIndex + ToursPerPage;
    const currentTours = popularTours.slice(startIndex, endIndex);

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



leftBtn.addEventListener('click', function () {
    currentPage = (currentPage + 1) % Math.ceil(popularTours.length / ToursPerPage);
    displayTours(); 
});

rightBtn.addEventListener('click', function () {
    currentPage = (currentPage + 1) % Math.ceil(popularTours.length / ToursPerPage);
    displayTours();
});





popularTours.forEach(tour => {
    console.log(Array.from(selectedTours.options))
    let optionExists = Array.from(selectedTours.options).some(option => option.value === tour.title);
    if (!optionExists) {
        selectedTours.innerHTML+=` <option value="${tour.title}">${tour.title}</option>`
    }
});

  
displayTours(); 

bookNow.addEventListener('click', function (e) {
    e.preventDefault();
    searchedOptions.innerHTML = ""; 
    const selectedValue = selectedTours.value;
    popularTours.forEach(tour => {
        if (selectedValue === tour.title) {
            let tourcard = document.createElement("div");
            tourcard.classList.add("tourcard");
            tourcard.innerHTML = `
                <img src="${tour.image}" alt="">
                <h3>${tour.title}</h3>
                <p>${tour.duration}</p>
                <p>${tour.price}</p>
            `;
            searchedOptions.appendChild(tourcard);
        }
    });
});
    



    return popularTours;
}
