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
    if(gameActive=== false)return;
    if(numberFlipped===0){
        timeSet();
        numberFlipped++
    }

   event.currentTarget.classList.add("flipped");

const cardFront = event.target.closest('div');
  console.log(event.target)
const cardBack = cardFront.nextElementSibling;
console.log(cardBack)
const image = cardBack.querySelector('img');
const imgAlt = image.getAttribute('alt');

  matchSets.push(imgAlt)
  matchElements.push(event.currentTarget)
console.log(imgAlt)
if(matchSets.length === 2){
    setTimeout(() => {
            match1();
            }, 500);
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
           
            unFlip(matchElements[0]);
            unFlip(matchElements[1]);
          
            
            
               
    }; 
    if( matchTotal=== 6){
        message.textContent= "You Win!!!!"
        gameActive = false;
    }
    
    matchSets=[]
    matchElements=[]
        }
    
   
 function render (){memory.innerHTML='';
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
        message.textContent= " "

        
}



//addEventListeners
cards.forEach(card => {
    card.addEventListener('click', flipCard)
});
document.querySelector("#resetButton").addEventListener("click",resetGame)
