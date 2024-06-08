console.log("hello jee");
 const chaal=['o','X'];

//  let [box1,box2,box3,box4,box5,box6,box7,box8,box9] =document.getElementsByClassName(".box");

let boxes=document.querySelectorAll(".box");
let playerInfo=document.querySelector(".heading");
let newButton=document.querySelector(".btn");

let currentPlayer;
let gameGrid;
const winningPositions=[
    [0.1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7]
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initial(){
   currentPlayer="X";
   gameGrid=["","","","","","","","",""];
 newButton.classList.remove("active");
 playerInfo.innerHTML=`Current player - ${currentPlayer}`;

boxes.forEach((box,index)=>{
    boxes[index].innerText="";
    boxes[index].classList.remove("win");
})
}
initial();

function handleClick(index){
     if(gameGrid[index]===""){
       boxes[index].innerHTML=currentPlayer;
       gameGrid[index]=currentPlayer;



        //player ko change karo
        swapPlayer();
        checkGameEnd();
    }
}
//niche wala function samajh nii aaya hai ache se--yaaha par ham 9 boxes ke liye eventlistner laga rhe hai
boxes.forEach((box,index) => //yaha par box aur index kaha defined hai??
  box.addEventListener("click",()=>{
    handleClick(index)
  }) );

 function swapPlayer(){
    if (currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    playerInfo.innerHTML=`current player-${currentPlayer}`;
  }

//   //niche wala function thoda challenging hai

// checkGameEnd

newButton.addEventListener("click",initial());
 
function checkGameEnd (){
    let answer=""
    winningPositions.forEach((position)=>{
        if((gameGrid[position[0]]!="" ||gameGrid[position[1]]!="" ||gameGrid[position[2]]!="") && (gameGrid[position[0]]===gameGrid[position[1]])  && (gameGrid[position[1]]===gameGrid[position[2]])){
        if(gameGrid[position[0]==="X"]){
            answer="X";
            console.log(position[0]);
        }
        else{
            answer="O";
            console.log(position[0]);
        }

        //winner positions ko hm green color se dikhayenge
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
        }
    })
}

