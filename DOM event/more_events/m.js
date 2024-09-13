let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
});
let user=document.querySelector("#user");
user.addEventListener("change",function(event){
    console.log("changed event");
    console.log("final value=",this.value);
});
user.addEventListener("input",function(event){
      console.log("input");
      console.log("final value=",this.value);
})