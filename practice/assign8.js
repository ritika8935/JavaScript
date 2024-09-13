//JS(Part8)PracticeQuestionsQs1.Square and sum the array elements using the arrow function and then find the average of the array.
let arr=[1,2,3,4,5,6];
let sum=arr.reduce((accumulator,element)=>{
    return accumulator+element;
});
console.log(sum);
let avg=sum/arr.length;
console.log(avg);

//Qs2.Create a new array using the map function whose each element is equal to the original element plus 5.
let arr1=[1,2,5,10];
let newarr=arr1.map((el)=>{
    return el+5;
});
console.log(newarr);

//Qs3.Create a newarray whose elements are in uppercase of words present in the original array.
let nam=["riya","ritika","anu","yashika","prachi"];
let newar=nam.map((el)=>{
    return el.toUpperCase();
});
console.log(newar);

//Qs4.Write a function called doubleAndReturnArgs whicha ccepts an array and a variable number  of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs=(arrg,...args)=>[
    ...arrg,
    ...args.map((el)=>el*2),
];
doubleAndReturnArgs([2,3,4],4,4);//(1,2,3,8,8)
doubleAndReturnArgs([1],3,4,5);
//Qs5.Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
let obj=(obj1,obj2)=>({...obj1,...obj2});
obj({a:1,b:2,c:3},{d:5,e:6,f:7});


