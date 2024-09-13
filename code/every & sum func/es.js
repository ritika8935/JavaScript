let num=[1,2,3,4];
let val=num.every((el)=>{
    return el%2==0;
});
console.log(val);

//for sum function



const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}