let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayname);
}
function sayhello(){
    alert("hello");
};
function sayname(){
    alert("riya");
};