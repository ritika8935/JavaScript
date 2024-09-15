//how many time and where are going to be use.it is a reusable block of code.

// function poem(){
//     console.log("twinkle twinkle little star");
//     console.log("how i wonder what you are");
// }
// poem();

// function dice(){
//     let random=Math.floor(Math.random()*6)+1;
//     console.log(random);
// }
// dice();
// dice();
// dice();
// dice();

//function with arguements..
// function avg(a,b,c){
//     avg=(a+b+c)/3;
//     console.log(avg);
// }
// avg(5,5,5);

// //Table of any number..
// function Table(n){
//     for(i=1;i<=n*10;i+=10){
//         console.log(i);
//     }
// }
// Table(2);
// Table(9);

//return value
// function sum(a,b){
//     return a+b;
//}
//console.log(sum(sum(10,10),10));

//practice sum of n number
function getsum(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
//concatinate array
let str=["hello","ritka","how","are","you"];
function concate(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
}

//for practice

function greetuser(username,mediums){
 console.log(`Hello ${username} welcome to our ${mediums}!`);
}
greetuser("Ritika","website");

function printdetail(name){
    console.log(`Name: ${name}`);
    calculatebirth(2001);
}
function calculatebirth(birthyear){
    console.log(2024-birthyear);
}
printdetail("Riya");

//default parameter
function sum(num1=0,num2=0){
    console.log(`Total sum is: ${num1+num2}`);
}
sum(4);
sum();
sum(6,2);