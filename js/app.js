// variables

function flipCard(event) {
   event.currentTarget.classList.add("flipped");
// Step 1: Get the parent element of the clicked image
const cardFront = event.target.closest('div');
  console.log(event.target)
// Step 2: Get the next sibling element of the parent element
const cardBack = cardFront.nextElementSibling;
console.log(cardBack)
// Step 3: Find the image with the class 'creme-brulee' in the next sibling element
const image = cardBack.querySelector('img');

// Get the alt attribute of the creme-brulee image
const imgAlt = image.getAttribute('alt');

  matchSet.push(imgAlt)
  matchElements.push(event.currentTarget)
console.log(imgAlt)
if(matchSet.length === 2){
    match1()
}

}
function unFlip (element){
    console.log(element)
   element.classList.remove("flipped")
}
//constonants


//functions


const memory=document.querySelector(".memory")
const match=document.querySelector("#match")
const message=document.querySelector("#message")
const flip = document.querySelectorAll(".flipped")
const cards = document.querySelectorAll('.cards');
    cards.forEach(card => {
        card.addEventListener('click', flipCard)
});
    
   
    const cardFront=document.querySelectorAll(".card-front")
    const cardBack=document.querySelectorAll(".card-back")

let matchTotal= 0

let matchSet=[]
let matchElements=[]

    function match1() {
 const cardImg1= matchSet[0]
 const cardImg2= matchSet[1]
 //console.log(matchSet[0])
        if (cardImg1 === cardImg2){
            matchTotal ++
            match.textContent= `Matches:${matchTotal}`
            
        }
        
        
         else{
            
            unFlip(matchElements[0]);
            unFlip(matchElements[1]);
            
            
               
    }; 
    if( matchTotal=== 6){
        message.textContent= "You Win!!!!"
    }
    matchSet=[]
    matchElements=[]
        }
    
   
    //shuffle cards
 memory.innerHTML='';
//memory.append(...cards.toSorted(() => Math.random()- 0.5));

Array.from(cards).toSorted(() => Math.random()- 0.5).forEach((sort=>{
    memory.append(sort)
}))

//timer


//reset
function resetGame(){
    shuffleCards();
    
    

}

 document.querySelector("#resetButton").addEventListener("click",resetGame)


//addEventListeners

