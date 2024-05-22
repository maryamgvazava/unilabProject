export default function servicesObject (){
    let serviceCards = [
        {
            image: "./images/servicesImages/bookflight.png",
            title:"Book Flight",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        },

        {
            image: "./images/servicesImages/bookhotel.png",
            title:"Book Hotels",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        },

        {
            image: "./images/servicesImages/bookcruises.png",
            title:"Book Cruises",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        }
        ,

        {
            image: "./images/servicesImages/bookvacation.png",
            title:"Book family Vacation",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        },
        {
            image: "./images/servicesImages/bookflight.png",
            title:"Book Flight",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        },

        {
            image: "./images/servicesImages/bookhotel.png",
            title:"Book Hotels",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        },

        {
            image: "./images/servicesImages/bookcruises.png",
            title:"Book Cruises",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        }
        ,

        {
            image: "./images/servicesImages/bookvacation.png",
            title:"Book family Vacation",
            description: "book memorable journey with our flight booking services! we're thrilled to present you flight options to suit your travel needs.",
        }
    ]


    const cards = document.querySelector('.cards');

  function defaultView(){
    for (let i = 0; i < 4; i++){
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
            <img class="serviceImg" src="${serviceCards[i].image}" alt="" >            
            <h3>${serviceCards[i].title}</h3>
            <p>${serviceCards[i].description}</p>
        `
        cards.append(card)
    }
  }

  defaultView()

  function seeFullServices(){
    for (let i = 0 ; i < serviceCards.length; i++){
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
            <img class="serviceImg" src="${serviceCards[i].image}" alt="" >            
            <h3>${serviceCards[i].title}</h3>
            <p>${serviceCards[i].description}</p>
        `
        cards.append(card)
    }

  }


let toggleConter = 2;

let seeAllServices = document.querySelector('.seeAllServices');




seeAllServices.addEventListener('click', function(e){
    e.preventDefault();
    toggleConter++

    if(toggleConter%2 == 0){
        cards.innerHTML = '';
        defaultView()
    } else {
        cards.innerHTML = '';
        seeFullServices()
    }
})
    return serviceCards;
}


servicesObject()