let boxes=document.querySelectorAll(".box");
turnReturn=0;

boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
    console.log("clicked");
    if(turnReturn ===0){
        turn="X";
    }
    else{
        turn="O";
    }
    box.innerText=turn ;
    turnReturn ++;
    turnReturn=turnReturn%2;  
})  
})

const winningPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];