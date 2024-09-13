let arr=["pretter","bruce","ambouce","unlam","abc","xyz"];
// let winner=arr[0];
// let runnerup=arr[1];
// let secondrunnerup=arr[2];

let[winner,runnerup,...other]=arr;//rest of element will store in other array.

//destructuring(objects)

let students={
    name:"Ritika",
    cls:"btech",
    age:23,
    subject:["dsa","java","web development"],
    email:"ritika@",
    password:123,
};
let {email,password}=students;
let {email:user,password:secret,city:palace="mumbai"}=students;