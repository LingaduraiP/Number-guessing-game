const number=document.querySelector('.number')
const check= document.querySelector('.check')
const message= document.querySelector('.message')
const again= document.querySelector('.again')



let score= document.querySelector('.score')
let highscore= document.querySelector('.highscore')

let hscore=0
let value =20

score.textContent=value
highscore.textContent=hscore

const gameOver=()=>{
  document.querySelector('body').style.backgroundColor='#222'
  value=20;
  score.textContent=value
  message.textContent='Start guessing...'
   randomNum=Math.trunc(Math.random()*20)
   number.textContent=randomNum
   document.querySelector('.guess').value=''
   number.textContent='?'
}



// check function
  let randomNum=Math.trunc(Math.random()*20)
number.textContent='?'

check.addEventListener('click',()=>{
  const guess= document.querySelector('.guess').value


  if(!guess || guess>20)
  {
    message.textContent='Enter the valid number'
    document.querySelector('.guess').value=''
    
  }
  else if(guess>randomNum)
  {
    message.textContent='Value is high'
    value--;
    score.textContent=value
    document.querySelector('.guess').value=''
    if(value<=0){
      alert('Try again')
      gameOver()
    }
    
  }
  else if(guess<randomNum)
  {

    message.textContent='Value is low' 
    value--;
    score.textContent=value
    document.querySelector('.guess').value=''
    if(value<=0){
      alert('Try again')
      gameOver()
    }

  }
  else 
  {
    // winning statement
     message.textContent='🎉 Correct number'
    document.querySelector('body').style.backgroundColor='green'
    hscore=value>hscore?value:hscore
    highscore.textContent=hscore
    number.textContent=randomNum

    setTimeout(()=>{
      gameOver()
    },2000)
  }
})


// Reset Game


again.addEventListener('click',gameOver)

