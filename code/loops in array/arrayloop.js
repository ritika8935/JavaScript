// let fruits=["mango","apple","banana","litchi","orange"];
// for(let i=0;i<=fruits.length-1;i++){
//   console.log(i,fruits[i]);
// }
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

//nested loop in array

let fruit=[["mango","apple","banana"],["litchi","orange","pineapple"]];
for(let i=0;i<fruit.length;i++){
    console.log(`list ${i}`);
    for(let j=0;j<fruit[i].length;j++){
        //console.log(j,fruit[j]);
        //console.log(fruit[i][j]);
        console.log(`j=${j},${fruit[i][j]}`);
    }
}
//for of loop
let f=["mango","apple","banana"];
for(fr of f){
  console.log(fr);
}

for(char of "RITIKA"){
    console.log(char);
}
//nested for of loop
let nam=[["mango","apple","banana"],["litchi","orange","pineapple"]];
for(list of nam){
    for(name of list){
    console.log(name);
    }
}
