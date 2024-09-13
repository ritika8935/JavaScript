let arr1=[1,3,4]
let obj1={...arr1}
console.log(obj1);

function sum(v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr1));

let obj2={
    name:"ritika",
    company:"xyz",
    address:"abc"
}
console.log({...obj2,name:"riya"})
console.log({name:"riya",...obj2})//this will print the obj2 without changing any value.