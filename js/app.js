// variables


//constonants


//functions


//addEventListeners



const memory=document.querySelector("memory")
const visibility = document.querySelectorAll(".flipped")
const cards = document.querySelectorAll('.cards');
    cards.forEach(card => {
        card.addEventListener('click', function(){
            card.classList.toggle("flipped")
        }
    );
    });
   
    const cardFront=document.querySelectorAll(".card-front")
    const cardBack=document.querySelectorAll(".card-back")

