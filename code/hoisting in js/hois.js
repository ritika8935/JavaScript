//following two lines will run successfully due to javascript hoisting.
console.log(a);
greet()
function greet(){
  console.log("good morning");
}
var a=9;//declaration hoisted to the top but initialization is not.
//let a=10; , this will show error because i.e-cannot access 'a' before initialization.
console.log(a);