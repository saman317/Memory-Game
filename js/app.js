// variables
let time= 45;
const timer = setInterval(function(){
    time--;
    countDown.textContent= `Time:${time}`
    if(time<=0){
        time = 0;
        clearInterval(timer);
        message.textContent= `Time's Up :(`



    }
},1000);


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

  matchSets.push(imgAlt)
  matchElements.push(event.currentTarget)
console.log(imgAlt)
if(matchSets.length === 2){
    match1()
}

}
function unFlip (element){
    console.log(element)
   element.classList.remove("flipped")
}
//constonants


//functions

const countDown=document.querySelector("#timer")
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

let matchSets=[]
let matchElements=[]

    function match1() {
 const cardImg1= matchSets[0]
 const cardImg2= matchSets[1]
 //console.log(matchSet[0])
        if (cardImg1 === cardImg2){
            matchTotal ++
            match.textContent= `Matches:${matchTotal}`
            
        }
        
        
         else{

            setTimeout(() => {
            unFlip(matchElements[0]);
            unFlip(matchElements[1]);
            }, 1500);
            
         
            
            
               
    }; 
    if( matchTotal=== 6){
        message.textContent= "You Win!!!!"
    }
    matchSets=[]
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
    

    

}

 document.querySelector("#resetButton").addEventListener("click",resetGame)


//addEventListeners

