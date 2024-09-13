let arr=[45,67,20,5];
// let max=-1;
// for(i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);

//max element using reduce funtion
let max=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max);