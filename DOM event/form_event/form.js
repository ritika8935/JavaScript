let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form);
    //alert("form submitted");
    let user=this.Elements[0];//form.Elemets[0]
    let pass=this.Elements[1];
    // let user=doucment.querySelector("#user");
    // let pass=doccument.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert(`hi ${user},your password is ${pass}`);
});