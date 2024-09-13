let btn =document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked");
});

let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    // console.log("key",event.key);
    console.log("code",event.code);
    // console.log("they key was pressed");
    if(event.code=="Arrowup"){
        console.log("move upwards");
    }else if(event.code=="Arrowdown"){
        console.log("move downwards");
    }else if(event.code=="Arrowleft"){
        console.log("move left");
    }else if(event.code=="Arrowright"){
        console.log("move right");
    }
});

// let inp=document.querySelector("input");
// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// });

