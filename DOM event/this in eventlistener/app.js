let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     //console.log(this);
//     console.log(this.innerText);
//     console.dir(this);
// });
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");

function changecolor(){
    console.log(this.innerText);
    this.style.background="skyblue";
}

btn.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
