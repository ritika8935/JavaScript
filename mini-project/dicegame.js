let para1=document.querySelector(".p1");
let para2=document.querySelector(".p2");
let btn=document.querySelector("button");

let head1=document.createElement("h1");
let head2=document.createElement("h1");

let press=alert("For playing you need to press button");

let player1=prompt("Enter first player name");
    para1.innerText=player1;
    let player2=prompt("Enter second player name");
    para2.innerText=player2;

btn.addEventListener("click",function(){

    rand1=Math.floor(Math.random()*6)+1;
    rand2=Math.floor(Math.random()*6)+1;

    head1.innerText=rand1;
    para1.appendChild(head1);
 
    head2.innerText=rand2;
    para2.appendChild(head2);

 
   if(rand1===rand2){
    alert("game has been draw!");
  }
   else if(rand1>rand2){
    alert(`congrats,${player1} is winner!`);
  }
   else{
    alert(`congrats,${player2} is winner!`);
 }


});








 
