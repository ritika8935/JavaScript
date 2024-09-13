//check if all the number in array are multiple of 10 or not.
let arr=[10,20,30,77,50,90];
let check=arr.every((el)=>{
    return el%10==0;
});
console.log(check);
//using array method function find minimun element in array.
let ar=[45,678,89,2,90,56];
let min=ar.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);