// a <p> with red text and say hi i am red.
let para=document.createElement("p");
console.dir(para);
para.innerText="hey i am red";
document.querySelector("body").append(para);
para.classList.add("red");

//an <h3> with blue text and say hey i am blue.
let heading=document.createElement("h3");
heading.innerText="hey i am blue";
document.querySelector("body").append(heading);
heading.classList.add("h3");

//create div with black border and pink background and two insert two tags inside div.
let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");
h1.innerText="i am inside div";
para2.innerText="me too";
div.appendChild(h1);
div.appendChild(para2);
div.classList.add("div");
document.querySelector("body").append(div);//it will apply after script tag for applying before script tag use prepend instead of append.


