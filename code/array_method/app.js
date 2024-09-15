// let arr=[3,4,2,1,7,85,8];
// arr.forEach(function(el){
//     console.log(el);
// });
// //arrow function
// arr.foreach ((el)=>{
//    console.log(el);
// });
// let print=function(el){
//     console.log(el);
// }
// arr.forEach(print);

// foreach function for objects
// let ar=[{
//     name:"Ritika",
//     marks:98,
// },{
//     name:"Riya",
//     marks:92,
// },{
//     name:"krishna",
//     marks:99.5,
// }];
// ar.foreach((student)=>{
//     console.log(student.name);
// });

const arr=[
    'riya',
    'rahul',
    'rema',
    'rikesh'
];
for(let i=0;i<arr.length;i++){
  console.log(`Roll No ${i+1}: ${arr[i]}`);
}