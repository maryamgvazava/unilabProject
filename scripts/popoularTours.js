// import selectLocation from "./selectLocation";

export default function popularTours (){


    let popularTours = [
        {
            image: "./images/popularToursImages/china_greatWall.jpg",
            title:"Barcelona, Spain",
            duration: "2 adults, 7 days",
            price:"2400$",
            type: "Family Vacation"
        },

        {
            image: "./images/popularToursImages/egypt.png",
            title:"Cairo, Egypt",
            duration: "4 adults, 8 days",
            price:"2700$",
            type: "Family Vacation"
        },
        {
            image: "./images/popularToursImages/france.png",
            title:"Paris, France",
            duration: "2 adults, 4 days",
            price:"2100$",
            type: "Family Vacation"
        },
        {
            image: "./images/popularToursImages/Georgia_martvili_Canyon.jpg",
            title:"Martvili, georgia",
            duration: "5 adults, 10 days",
            price:"3000$",
            type: "Family Vacation"
        },
        {
            image: "./images/popularToursImages/greece_mikonos.jpg",
            title:"Mykonos, Greece",
            duration: "5 adults, 7 days",
            price:"2900$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/india_Dehli.jpg",
            title:"Dehli, India",
            duration: "4 adults, 7 days",
            price:"1800$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/italy.png",
            title:"Rome, Italy",
            duration: "2 adults, 6 days",
            price:"2400$",
            type: "Cruises"
        },
        {
            image: "./images/popularToursImages/Lake_Lucerne_Switzerland.webp",
            title:"Lake Lucerne, Switzerland",
            duration: "3 adults, 7 days",
            price:"5200$",
            type: "Family Vacation"
        },
        {
            image: "./images/popularToursImages/Rothenburg_ob_der_Tauber.webp",
            title:"Rothenburg, Germany",
            duration: "6 adults, 7 days",
            price:"4000$",
            type: "Cruises"
        },
        {
            image: "./images/popularToursImages/spain.png",
            title:"Barcelona, Spain",
            duration: "2 adults, 5 days",
            price:"3200$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/Turkey_Antalya.jpg",
            title:"Antalya, Turkey",
            duration: "2 adults, 4 days",
            price:"2000$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/Twin-Towers-Malaysia.webp",
            title:"Malaisya, Malaisya",
            duration: "2 adults, 7 days",
            price:"3700$",
            type: "Family Vacation"
        }, {
            image: "./images/popularToursImages/china_greatWall.jpg",
            title:"Barcelona, Spain",
            duration: "2 adults, 7 days",
            price:"2400$",
            type: "Cruises"
        },

        {
            image: "./images/popularToursImages/egypt.png",
            title:"Cairo, Egypt",
            duration: "4 adults, 8 days",
            price:"2700$",
            type: "Family Vacation"
        },
        {
            image: "./images/popularToursImages/france.png",
            title:"Paris, France",
            duration: "2 adults, 4 days",
            price:"2100$",
            type: "Cruises"
        },
        {
            image: "./images/popularToursImages/Georgia_martvili_Canyon.jpg",
            title:"Martvili, georgia",
            duration: "5 adults, 10 days",
            price:"3000$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/greece_mikonos.jpg",
            title:"Mykonos, Greece",
            duration: "5 adults, 7 days",
            price:"2900$",
            type: "Family Vacation"
        },
        {
            image: "./images/popularToursImages/india_Dehli.jpg",
            title:"Dehli, India",
            duration: "4 adults, 7 days",
            price:"1800$",
            type: "Cruises"
        },
        {
            image: "./images/popularToursImages/italy.png",
            title:"Rome, Italy",
            duration: "2 adults, 6 days",
            price:"2400$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/Lake_Lucerne_Switzerland.webp",
            title:"Lake Lucerne, Switzerland",
            duration: "3 adults, 7 days",
            price:"5200$",
            type: "Family Vacation"
        },
        {
            image: "./images/popularToursImages/Rothenburg_ob_der_Tauber.webp",
            title:"Rothenburg, Germany",
            duration: "6 adults, 7 days",
            price:"4000$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/spain.png",
            title:"Barcelona, Spain",
            duration: "2 adults, 5 days",
            price:"3200$",
            type: "Cruises"
        },
        {
            image: "./images/popularToursImages/Turkey_Antalya.jpg",
            title:"Antalya, Turkey",
            duration: "2 adults, 4 days",
            price:"2000$",
            type: "Group Tours"
        },
        {
            image: "./images/popularToursImages/Twin-Towers-Malaysia.webp",
            title:"Malaisya, Malaisya",
            duration: "2 adults, 7 days",
            price:"3700$",
            type: "Family Vacation"
        },
        

    ]


    
const places = document.querySelector('.places');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
let bookNow = document.querySelector('.bookNow')
let selectedTours = document.querySelector('.SelectedTours')
let searchedOptions = document.querySelector('.searchedOptions')
const selectedType = document.querySelector('.selectedType')
const chooseStartDate = document.querySelector('.chooseStartDate')
const chooseEndDate = document.querySelector('.chooseEndDate')



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
            <p class="duration">${tour.duration}</p>
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
    let optionExists = Array.from(selectedTours.options).some(option => option.value === tour.title);
    if (!optionExists) {
        selectedTours.innerHTML+=` <option value="${tour.title}">${tour.title}</option>`
    }
});


displayTours(); 

bookNow.addEventListener('click', function(e) {
    
    const startDate = new Date(chooseStartDate.value);
    const endDate = new Date(chooseEndDate.value);
    let currentDate = new Date()
    console.log(currentDate)
if(startDate < endDate) {
    chooseStartDate.style.outline = "solid green 2px"
    chooseEndDate.style.outline = "solid green 2px"
} else {
    chooseStartDate.style.outline = "solid red 2px"
    chooseEndDate.style.outline = "solid red 2px"
}


    if (startDate < currentDate || endDate <  currentDate){
    alert("choose correct date")
}

console.log(startDate, endDate)





    e.preventDefault();
    searchedOptions.innerHTML = ""; 
    const selectedValue = selectedTours.value;
    const selectedTypeValue = selectedType.value; 
    
    

    popularTours.forEach(tour => {
        if (selectedValue === tour.title && selectedTypeValue === tour.type) {

            let tourcard = document.createElement("div");
            tourcard.classList.add("tourcard");
            tourcard.innerHTML = `
                <img src="${tour.image}" alt="${tour.title}">
                <h3>${tour.title}</h3>
                <p>Duration: ${tour.duration}</p>
                <p>Price: ${tour.price}</p>
                <p>Type: ${tour.type}</p>
            `;
            searchedOptions.appendChild(tourcard);
        }
    });

///ეს ნაწილი გასავლელია; 
//უნდა შედარდეს კალენდარში არჩეული დღეების რაოდენობას და იმის მიხედვით უნდა შევურჩიოთ ოპტიმალური ტური
// 
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
   
    console.log(differenceInDays)

    const duration = document.querySelector('.duration')
    let arrayOfDay = duration.textContent.split('')

    for (let i = arrayOfDay.length-1; i > 0; i--){
        let number = arrayOfDay[i]
    
        if (!isNaN(parseInt(number))) {
            console.log(number)
            if(number > differenceInDays){

            }
            break
        } 
    }
 



});


    return popularTours;
}
