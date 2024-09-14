let userScore=0;
let compScore=0;
const choices  = document.querySelectorAll('.images')
const msg = document.querySelector('.msg')
const userScorepara= document.querySelector('#user-score')
const compScorepara= document.querySelector('#comp-score')


const showWinner= (userWin,compChoice,userChoice)=>
{   if(userWin){
   // console.log('You win')  
   userScore++ 
   userScorepara.innerText=userScore
    msg.innerText=(`Congratulations! your ${userChoice} beats ${compChoice}`)
    msg.style.backgroundColor = 'green'
    
} else{
    compScore++
    compScorepara.innerText=compScore
   // console.log('You loose')   
    msg.innerText=(`Oops! ${userChoice} beats your ${compChoice}`)
    msg.style.backgroundColor = 'Red'

}
}


const drawgame = () =>{
    //console.log('game was draw')
    msg.innerText=('Game Draw!Play again')
    msg.style.backgroundColor = 'grey'

}

const gencompChoice=()=>{
    const options = ['rock','paper','scissors']
    const randomindex= Math.floor(Math.random()*3)
    return options[randomindex]
}

const playgame = (userChoice)=>{
    //user choice
    console.log('user choice=',userChoice)
    //computer choice
    const compChoice=gencompChoice()
    console.log('computer choice =',compChoice)

    if (userChoice===compChoice){
        //game draw
        drawgame()
    } else {
        let userWin = true
        if(userChoice==='rock'){
            //paper,scissors
            userWin = compChoice=== 'paper' ? false : true
        } else if(userChoice==='paper'){
            //rock , scissors
            userWin = compChoice==='rock' ? true : false
        }else{
            
                //rock , paper
                userWin = compChoice==='rock' ? true : false            
            }
            showWinner(userWin,compChoice,userChoice)
        }
    }

 
choices.forEach((images)=>
{
    images.addEventListener('click',()=>{
        const userChoice = images.getAttribute('id')
        //console.log("image was clicked",userChoice)
        playgame(userChoice)

        
    })
})