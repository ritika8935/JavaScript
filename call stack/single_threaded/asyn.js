let a=10;
console.log(a);
let b=20;
console.log(b);
console.log(a+b);//synchronous nature(sequence wise).

setTimeout(()=>{
    console.log("have fun and");
},2000);
setTimeout(()=>{
    console.log("keep learning");
},2000);
console.log("hello");//asynchronous nature of js.although js is single threaded language but in  js all waiting work is done by the browser.
