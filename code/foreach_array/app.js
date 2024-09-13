let arr=[3,4,2,1,7,85,8];
arr.forEach(function(el){
    console.log(el);
});
//arrow function
arr.foreach ((el)=>{
   console.log(el);
});
// let print=function(el){
//     console.log(el);
// }
// arr.forEach(print);

//foreach function for objects
const student=[{
    name:"Ritika",
    marks:98,
},{
    name:"Riya",
    marks:92,
},{
    name:"krishna",
    marks:99.5,
}];
student.foreach((stud)=>{
    console.log(stud.name);
});