

let flightTickets = [

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: center', 
        rangeDisplay1: 'display: none ;',
        rangeDisplay2: 'display: inline-block ;',
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: space-evenly', 
        rangeDisplay2: 'display: inline-block ;',
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: flex-end', 
        rangeDisplay1: 'display: inline-block ;',
        rangeDisplay2: 'display: none ;',
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content:center', 
        rangeDisplay1: 'display: none ;',
        rangeDisplay2: 'display: inline-block ;',
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: space-evenly', 
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: space-between', 
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
         rangeLocation: 'justify-content: center', 
         rangeDisplay1: 'display: none ;',
         rangeDisplay2: 'display: inline-block ;',
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: space-between', 
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: space-around', 
        totalHours: '7 Hours',
        price: '600$'
    },

    {
        image:"./images/G-airlines.png",
        provider:'Georgian Airlines',
        rangeLocation: 'justify-content: center', 
        totalHours: '7 Hours',
        rangeDisplay1: 'display: none ;',
        price: '600$'
    },

]

const flightDates = document.querySelector('.flightDates');

for (let i = 0; i < flightTickets.length; i++) {
    let flightDataElement = document.createElement('div');
    flightDataElement.classList.add('oneFlightInfo');

    let flightData = `
        <div class="aviaprovider">
            <img src="${flightTickets[i].image}" alt="">
            <p>${flightTickets[i].provider}</p>
        </div>

        <div class="flightDuration">
            <div class="flightTimes">
                <div class="landing">
                    <p>Take Off</p>
                    <p>Landing</p>
                </div>
                <div class="flightTime">
                    <div class="times">
                        <p>12:00</p>
                        <p>19:00</p>
                    </div>
                    <div class="rangeLines">
                        <div class="rangeSquares" style =" ${flightTickets[i].rangeLocation}">
                            <div class="rangeSquare1" style = "${flightTickets[i].rangeDisplay1}; "></div>
                            <div class="rangeSquare2" style = "${flightTickets[i].rangeDisplay2}"></div>
                        </div>
                        <div class="TimerangeLine"></div>
                    </div>
                </div>
            </div>
            <div class="totalHours">
                <p>${flightTickets[i].totalHours}</p>
            </div>
        </div>
        <div class="totalPriceDiv">
            <div class="totalPrice">
                <h3>Price</h3>
                <h3>${flightTickets[i].price}</h3>
            </div>
            <button>View Deal</button>
        </div>
    `;

    flightDataElement.innerHTML += flightData;
    flightDates.prepend(flightDataElement);
}