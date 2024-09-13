let num=[1,2,3,4];
let val=num.every((el)=>{
    return el%2==0;
});
console.log(val);

//for sum function

let num1=[2,4,6,8];
 num1.some(even);
 function even(num1){
    return num1 % 2==0;
 }

const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}