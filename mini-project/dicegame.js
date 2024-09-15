let press=alert("For playing you need to press button");

let player1=prompt("Enter first player name");
let player2=prompt("Enter second player name");

let random1=Math.floor(Math.random()*6)+1;
let random2=Math.floor(Math.random()*6)+1;

if(random1===random2){
    console.log("game has been draw!");
}
else if(random1>random2){
    console.log(`congrats,${player1} is winner!`);
}
else if(random2>random1){
    console.log(`congrats,${player2} is winner!`);
}
else{
    console.log("Try again!");
}