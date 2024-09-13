//Qs1.Create a new input and button element on the page using JavaScript only.Set the text of button to“Clickme”;
//Qs2.Add following attributes to the element:-Change placeholder value of input to “username”-Change the id of button to “btn”.
let btn=document.createElement("button");
let input=document.createElement("input");
btn.innerText="click me!";
document.querySelector("body").append(input);
document.querySelector("body").append(btn);
//Qs2.Add following attributes to the element:-Change placeholder value of input to “username”-Change the id of button to “btn”.
input.setAttribute("placeholder","Username");
btn.setAttribute("class","btn");
//Qs3.Access the btn using the query Selector and button id.Change the button background color to blue  and text color to white.
let bt=document.querySelector(".btn");
bt.classList.add("btnstyl");
// //Qs4.Create an h1 element on the page and set its text to “DOMPractice” underlined.Change its color to purple.
let heading=document.createElement("h1");
heading.innerText="DOM Practice";
document.querySelector("body").append(heading);
heading.setAttribute("class","head");
let h1a=document.querySelector(".head");
h1a.classList.add("h1style");
// // Qs5.Create a p tag on the page and set its text to “Apna College Delta Practice”,where Delta is bold.
let p=document.createElement("p");
p.innerHTML="my first page using <b>javascript</b>";
document.querySelector("body").append(p);