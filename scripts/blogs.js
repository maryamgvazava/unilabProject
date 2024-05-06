export default function blogsFunctions (){
    let serviceCards = [
        {
            image: "./images/blogImages/Fingals-Cave-Scotland.webp",
            title:"magnificent caves in Scotland",
        },
        {
            image: "./images/blogImages/Fly-Geyser-Nevada.webp",
            title:"Amazing Fly-Geyser in Nevada",  
        },
        {
            image: "./images/blogImages/hawaii.png",
            title:"Are There Volcanos In Hawaii?",   
        },
        {
            image: "./images/blogImages/iceland.png",
            title:"Winter in Iceland",   
        },
        {
            image: "./images/blogImages/tibet.png",
            title:"Interesting Tibetan Traditions",   
        },
        {
            image: "./images/blogImages/Skaftafell-Iceland.webp",
            title:"Skaftafell in Iceland",   
        },
    ]




    let blogSection = document.querySelector('.blogsDiv')



    for (let i = 0; i < serviceCards.length; i++){
        let card = document.createElement("div");
        card.classList.add("blogs");
        card.innerHTML=`
            <img class="serviceImg" src="${serviceCards[i].image}" alt="" >            
            <h3>${serviceCards[i].title}</h3>
            
        `
        blogSection.append(card)
    }





    return serviceCards;
}


