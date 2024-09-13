//delte all occurance of 2 in a given array.
let arr=[1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0;i<arrlength;i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
    
}
console.log("all occurance of 2 in arr is delted");
console.log(arr);

//count the number of digit in a given number.
let number=12478895;
let count=0;
let copy = number;
while(copy > 0){
    count++;
    copy=math.floor(copy/10);
}
console.log(count);
