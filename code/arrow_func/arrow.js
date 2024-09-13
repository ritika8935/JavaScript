let sum=(a,b)=>{
    console.log(a+b);
};
let pow=(a,b)=>{
    return a**b;
};
const cube=(n)=>{  //singal argument can work without paranthesis.cube=n=>{}
    return n*n*n;
};
const hello=()=>{console.log("hello world")}; //there is no arguemnt and if we remove paranthesis error will occure.hello= =>{}//error

//arroe funtion singal line return
let mul=(a,b)=>a*b;
let sub=(a,b)=>a-b;