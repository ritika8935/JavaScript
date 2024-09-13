// for( i=1;i<=19;i=i+2){
//     console.log(i);
// }
// console.log("reverse");
// for( i=19;i>=1;i=i-2){
//     console.log(i);
// }
// console.log("even number");
// for(let i=2;i<=20;i=i+2){
//     console.log(i);
// }
// console.log("reverse of even number");
// for(let i=20;i>=2;i=i-2){
//     console.log(i);
// }

//Tables
let n=prompt("enter the number");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}
console.log("nested loop");
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}