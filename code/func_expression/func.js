let hello=function(){
    console.log("hello");
}
hello=function(){
    console.log("ritika");
}
let a=function(){
    console.log("namaste");
}

//function take argument as a function
function multiplegreet(func,count){
    for(let i=0;i<=count;i++){
        func();
    }
}
let greet =function(){
    console.log("hello");
}
multiplegreet(greet,10);
multiplegreet(function() {console.log("namaste")},10);

//higher order function return
function oddevenreturn(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}
let request="even";