let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
});
// let btn=document.createElement("button");
// btn.innerText="click me!";
// document.querySelector("body").append(btn);
// btn.addEventListener("click",function(){
//    btn.style.backgroundColor="green";
// });
let h2=document.querySelector("h2");
let inp=document.querySelector("input");
inp.addEventListener("input",function(event){
   event.preventDefault();
   
   console.log(inp.value);
  h2.innerText=inp.value;
   
  
});