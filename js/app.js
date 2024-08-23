// variables
let gameActive = true;
let time= 40;
let timer
let matchTotal= 0
let matchSets=[]
let matchElements=[]

// constonants 
const countDown=document.querySelector("#timer")
const memory=document.querySelector(".memory-container")
const match=document.querySelector("#match")
const message=document.querySelector("#message")
const flip = document.querySelectorAll(".flipped")
const cards = document.querySelectorAll('.cards');
const cardFront=document.querySelectorAll(".card-front")
const cardBack=document.querySelectorAll(".card-back")
let numberFlipped= 0
//functions

function timeSet(){
    if(!gameActive) return;
    clearInterval(timer);
     timer= setInterval(function(){
        if(!gameActive) return;
        time--;
        countDown.textContent= `Time:${time}`
        if(time<=0){
            time = 0;
            clearInterval(timer);
            gameActive = false;
            message.textContent= `Time's Up :(`
    
    
    
        }
    },1000);
}

function flipCard(event) {
    //timer
    if(gameActive=== false)return;
    if(numberFlipped===0){
        timeSet();
        numberFlipped++
    }
  

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
   // match1()
    setTimeout(() => {
        //console.log(self.matchElements)
            match1();
            }, 1000);
}

}
function unFlip (element){
    console.log(element)
   element.classList.remove("flipped")
}

const self= this
    function match1() {
        if(!gameActive) return;
 const cardImg1= matchSets[0]
 const cardImg2= matchSets[1]
 console.log(cardImg1,cardImg2)
        if (cardImg1 === cardImg2){
            matchTotal ++
            match.textContent= `Matches:${matchTotal}`
            
        }
        
         else{

            console.log("Time Out!")
           // setTimeout(() => {
      //  console.log(self.matchElements)
            unFlip(matchElements[0]);
            unFlip(matchElements[1]);
          //  }, 1500);
            
            
               
    }; 
    if( matchTotal=== 6){
        message.textContent= "You Win!!!!"
        gameActive = false;
    }
    //else{ message.textContent= "Try Again!"}
    matchSets=[]
    matchElements=[]
        }
    
   
    //shuffle cards
 function render (){memory.innerHTML='';
//memory.append(...cards.toSorted(() => Math.random()- 0.5));

Array.from(cards).toSorted(() => Math.random()- 0.5).forEach((sort=>{
    console.log(sort)
    if(sort.classList.contains("flipped")){
        unFlip(sort)
    }
    memory.append(sort);
}))
 }
 render()



//reset
function resetGame(){
        gameActive = true;
        time = 40; 
        matchTotal = 0;
        matchSets = [];
        matchElements = [];
        render();
        match.textContent= `Matches:${matchTotal}`
        clearInterval(timer);
        countDown.textContent= `Time:${time}`
        numberFlipped=0

        
    }





    



 


//addEventListeners
cards.forEach(card => {
    card.addEventListener('click', flipCard)
});
document.querySelector("#resetButton").addEventListener("click",resetGame)
