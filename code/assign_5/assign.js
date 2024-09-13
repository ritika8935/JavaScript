// let random = Math.floor(Math.random()*5)+20;
// console.log(random);

let user=prompt("enter any no between which random number will be generated");
let random=Math.floor(Math.random()*user)+1;
let guess=prompt("guess the random number");
while(true){
if(guess == random){
    console.log("congrats,you guess the write number");
    break;
}


else if(guess == "quite"){
    console.log("you quite the game");
    break;
}
else if(guess < random){
    guess=prompt("hint: your guess is too small,try again");
}
else{
    guess=prompt("hint: your guess is too big,try again");
}
// else{
//     console.log("your guess is wrong,try again");
//     guess=prompt("enter the guessing number");
// }
}