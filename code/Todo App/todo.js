let todo=[];
let req=prompt("enter your request");

while(true){
    if(req == "quite"){
        console.log("you just quite");
        break;
    }

if(req=="list"){
    console.log("--------------");
    for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
    }
    // for(task of todo){
    //     console.log(task);
    // }
    console.log("----------------");
}else if(req == "add"){
    let task=prompt("enter the list you want to add ");
    todo.push(task);
    console.log("task added")
    
    
}


else if(req == "delete"){
    let index=prompt("enter the task index");
    todo.splice(index,1);
    console.log("task deleted");
}
else{
    console.log("wrong request");
}
req = prompt("enter your request");
}

    
