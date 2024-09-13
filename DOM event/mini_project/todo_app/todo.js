let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

btn.addEventListener("click",function(){
let item=document.createElement("li");
item.innerText=inp.value;
ul.appendChild(item);

let dltbtn=document.createElement("button");
  dltbtn.innerText="delete";
  dltbtn.classList.add("delete");
  item.appendChild(dltbtn);
    console.log(inp.value);
    inp.value="";
});

// let dltbtns=document.querySelectorAll(".delete");//this will not work for newly added eventListener.
// for(dltbt of dltbtns){
//     dltbt.addEventListener("click",function(){
//         let par=this.parentElement;
//     par.remove();
//     });
    
// }
ul.addEventListener("click",function(event){
   // console.dir(event.target.nodeName);
    //console.log("deleted");
    if(event.target.nodeName=="BUTTON"){
       let listItem= event.target.parentElement;
       //console.log(listItem);
       listItem.remove();
        console.log("deleted");
    }else{
        console.log("click button");
    }
});