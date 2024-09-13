let arr=[3,4,56,7,7,8,8,9,9,0,12,1,2];
console.log(...arr);
//it work similar for string also.
let nam="ritika singh";
console.log(...nam);

//coping old array to a new array
let num1=[1,2,3,4,5,6,6,7,9];
let num2=[...num1];
//similar with string 
let name1="riya";
let name2=[...name1];

//adding two array
let num3=[2,4,6,9,10];
let num4=[1,3,5,7,9];
let newarr=[...num4,...num3];

//object literals
const data={
    email:"ritikasingh@gmail.com",
    password:1234,
};
const newdata={...data,id:673,country:"India"};
let a1=[3,5,89,1,0];//array consist only value.
let obj={...a1};//object consist key and its value.
let obj2={..."hello"};