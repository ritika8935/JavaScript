//Array Method-
//push-add at end
// let months=["january","july","march","august"];
// months.push("dec");
// console.log(months);

//shift
// let months=["january","july","march","august"];
// console.log(months.shift());
// console.log(months.shift());
// console.log(months);

//unshift-add at starting,length will change dynamically
// let months=["january","july","march","august"];
// console.log(months.unshift("june"));
// console.log(months.unshift("july"));
// console.log(months);

//pop-for removing element from last of array.
// let months=["january","july","march","august"];
// months.pop();
// console.log(months);

// let months=["january","july","march","august"];
// console.log(months.splice(0,2,"july","june"));
// console.log(months);

//check the element is present or not,if element is not present it return -1.
// let months=["january","july","march","august"];
// console.log(months.indexOf("july"));

//includes()-if element present it return true otherwise false.
// let months=["january","july","march","august"];
// console.log(months.includes("july"));

//slice() and splice()
// let months=["january","july","march","august"];
// console.log(months.slice(2));//it remove element from starting of a array,if we give positive number.
// console.log(months.slice(-1));//last element remains and all other element will remove from array.
//splice()-sametime you can add or remove element.it has three value index,no.of element need to dlt and what to add.
let months=["january","july","march","august"];
months.splice(2,0,'may');
console.log(months);
months.splice(4,1,'jan');
console.log(months);
//concate-merge array.
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let mergearry=months.concat(myFish);
console.log(mergearry);


