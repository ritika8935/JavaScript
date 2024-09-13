let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolorchange){
//     setTimeout(()=>{
//      h1.style.color=color;
//      if(nextcolorchange) nextcolorchange();
//     },delay);
// }
// changecolor("red",1000,()=>{
//     changecolor("green",1000,()=>{
//         changecolor("yellow",1000,()=>{
//             changecolor("pink",1000,()=>{
//                 changecolor("skyblue",1000);
//             });
//         });
//     });
// });
//callbacks nesting -> callback hell

//modifying above code with Promise object.
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("success color changed");
           },delay);
    })
    
}
changecolor("red",1000)
.then((result)=>{
    console.log("color1 changed");
    console.log("Promise result",result);
    return changecolor("green",1000);
})
.then((result)=>{
    console.log("color2 changed");
    console.log("Promise result",result);
    return changecolor("yellow",1000);
})
.then((result)=>{
    console.log("color3 changed");
    console.log("Promise result",result);
    return changecolor("blue",1000);
})
.catch((error)=>{
    console.log("failure:not changed");
    console.log("promise error",error);
});