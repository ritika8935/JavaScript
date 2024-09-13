//global and function scope.
let sum=54;//global scope
function calsum(a,b){
    let sum=a+b;//function scope
    console.log(sum);
}
calsum(10,5);

//block scope
for(let i=1;i<=5;i++){
    console.log(i);//block scope
}
//console.log(i); will not work beacause out of the block.

let age = 18;
if(age>=18){
    let str="adult";
    console.log(str);//block scope
}
//console.log(str); will not work.

//lexical scope
function outerfunc(){
    let x=10;
    let y=20;
function innerfunc(){
    let a=6;
    console.log(x);
    console.log(y);
}
//console.log(a);bhar se andar k taraf jate hai naki andar se bahar k taraf.
innerfunc();
}

//practice question
let greet="hello";//global scope
function changeGreet(){
    let greet="namaste";//function scope
    function innergreet(){
        console.log(greet);//lexical scope
    }
    innergreat();
}
console.log(greet);
changeGreet();
