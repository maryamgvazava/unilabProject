document.addEventListener('DOMContentLoaded', function() {

let stayplaces = [
    {
        image: "./images/hotelImages/hotelImage.png", 
        hotelName: "New Zealand Resort",
        hotelLocation: "New Zealand, Auckland", 
        hotelDistance: "1 km away from center",
        hotelDescription: "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        hotelPrice: "400$"
    },
    {
        image: "./images/hotelImages/hotelImage.png", 
        hotelName: "New Zealand Resort",
        hotelLocation: "New Zealand, Auckland", 
        hotelDistance: "1 km away from center",
        hotelDescription: "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        hotelPrice: "400$"
    },
    {
        image: "./images/hotelImages/hotelImage.png", 
        hotelName: "New Zealand Resort",
        hotelLocation: "New Zealand, Auckland", 
        hotelDistance: "1 km away from center",
        hotelDescription: "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        hotelPrice: "400$"
    },
    {
        image: "./images/hotelImages/hotelImage.png", 
        hotelName: "New Zealand Resort",
        hotelLocation: "New Zealand, Auckland", 
        hotelDistance: "1 km away from center",
        hotelDescription: "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        hotelPrice: "400$"
    },
    {
        image: "./images/hotelImages/hotelImage.png", 
        hotelName: "New Zealand Resort",
        hotelLocation: "New Zealand, Auckland", 
        hotelDistance: "1 km away from center",
        hotelDescription: "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        hotelPrice: "400$"
    },
    {
        image: "./images/hotelImages/hotelImage.png", 
        hotelName: "New Zealand Resort",
        hotelLocation: "New Zealand, Auckland", 
        hotelDistance: "1 km away from center",
        hotelDescription: "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        hotelPrice: "400$"
    },
    {
        image: "./images/hotelImages/hotelImage.png", 
        hotelName: "New Zealand Resort",
        hotelLocation: "New Zealand, Auckland", 
        hotelDistance: "1 km away from center",
        hotelDescription: "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        hotelPrice: "400$"
    },
]



let hotels = document.querySelector('.hotels');

for (let i = 0; i < stayplaces.length; i++) {
    let hotelInfo = document.createElement('div');
    hotelInfo.classList.add('hotelInfo');

    let hotelData = `
        <img src="${stayplaces[i].image}" alt="">
        <div class="SearchedHotels">
            <div class="hotelInfoSection">
                <div class="hotelDetails">
                    <h2>${stayplaces[i].hotelName}</h2>
                    <p class="hotelName">${stayplaces[i].hotelLocation}</p>
                    <p class="hotelDistance">${stayplaces[i].hotelDistance}</p>
                    <p class="hotelDesc">${stayplaces[i].hotelDescription}</p>
                </div>
                <div class="priceInfo">
                    <p class="ratingP">Rating</p>
                    <div class="stars">
                        <img src="./icons/starIcon.png" alt="">
                        <img src="./icons/starIcon.png" alt="">
                        <img src="./icons/starIcon.png" alt="">
                        <img src="./icons/starIcon.png" alt="">
                        <img src="./icons/starIcon.png" alt="">
                    </div>
                    <p class="priceP">Price:</p>
                    <h3>${stayplaces[i].hotelPrice}</h3>
                </div>
            </div>
            <button>Show Details</button>
        </div>
    `;
    
    hotelInfo.innerHTML += hotelData;
    hotels.prepend(hotelInfo);
}


})