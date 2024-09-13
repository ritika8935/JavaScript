// function sum(...args){
//     for(i=0;i<args.length;i++){
//         console.log("you give sum as",args[i]);
//     }
// }
//inbuilt function arguments in js
function min(){
    console.log(arguments);//it not an array it is a collection so methods of array will not work like push pop etc.
    console.log(arguments.length);
    //arguments.push(1); not work
}
//above problem can be solve if we pass an iterations
function sum(...args){
    return args.reduce((sum,el)=>(sum+el));
}

function min(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}