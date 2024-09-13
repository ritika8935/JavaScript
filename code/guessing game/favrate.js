let favmovie="avatar";
let guess=prompt("enter my favrate movie");
while((guess != favmovie)){
    if(guess == "queit"){
        console.log("you just quiet the guessing");
        break;
    }
    guess=prompt("wrong guess.please try again");

}
if(guess == favmovie){
    console.log("congrats you guess right movie");
}
