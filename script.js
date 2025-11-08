let boxes=document.querySelectorAll(".x");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach( (X)=>{
        X.addEventListener("click",()=>{
            console.log("box was clicked");
            if(turno){
                X.innerText="O";
                turno=false;
            }
            else{
                X.innerText="X";
                turno=true;
            }
            X.disabled=true;
            
            checkwinner(); 
        });
    }
);
const resetGame = () =>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const Disablebtn=()=>{//Disable fun definition 
    for(let b of boxes){
        b.disabled=true;
    }

};
const enableboxes=()=>{//Disable fun definition 
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }

};
const showinner = (win) => {
     msg.innerText=`congratulations , winner is ${win}`;
    // msg.innerText = 'Congratulation winner is ,${'win'}';
msgcontainer.classList.remove("hide");
Disablebtn();//disable fun call
};
const checkwinner =()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("winner", pos1);
           
            showinner(pos1);
        }
    }
    }
};
 newbtn.addEventListener("click", resetGame);
 reset.addEventListener("click" ,resetGame);
