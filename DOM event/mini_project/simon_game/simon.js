let gameseq=[];
let userseq=[];
let h2=document.querySelector("h2");
let btn=["pink","yellow","skyblue","green"];
let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
    
});

function gameFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelup(){
    level++;
    let h2=document.querySelector("h2");
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btn[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameFlash(randbtn);
}
function checkAns(){
    let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        console.log("same value");
    }else{
       
        h2.innerText=`Game Over!press any key to start.`;
    }
}
function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    //console.log(usercolor);
    userseq.push(usercolor);
    checkAns();
}
let allbtn=document.querySelectorAll(".btn");
for(btns of allbtn){
    btns.addEventListener("click",btnpress);
}