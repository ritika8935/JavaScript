let std=[{
    name:"riya",
    marks:95,
},
{
    name:"ritika",
    marks:90,
},
{
    name:"priya",
    marks:80,
}];

// std.forEach((el)=>{
//     console.log(el.marks);
//     console.log(el.name);
// });
let gpa=std.map((el)=>{
    return el.marks/10;
});

let num=[3,4,5,1];
let double=num.map(function(el){
    return el*2;
});

let nums=[2,3,4,5,6,7,8,9,10];
let ans=nums.filter((el)=>{
    return el%2==0;//even-true  odd-false
});

//Reduce function 
let arr=[1,2,3,4,5,6,7];
let result=arr.reduce((res,el)=>{
    return res+el;
});
console.log(result);//this is used to sum all the element of array.