//let btn=document.querySelector("button");
//console.dir("btn");
// btn.onclick=function () {
//     //console.log('Button was clicked!');
//     alert("button was click");
// };

let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onclick=sayhello;//sayhello()-not allow beacause function already executed not even we click the button.
     btn.onclick=sayname;
    // btn.onmouseenter=function(){
    //     console.log("you entered a button");
    // }
    
    
}

function sayhello(){
    //alert("hello!");
    console.log("hello");
};
function sayname(){
    //alert("hello!");
    console.log("riya");
};
//onclick function execute only one action it can not execute multiple action at a time.instead of onclick we use even listener.

