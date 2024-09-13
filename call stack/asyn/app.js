// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//    await getnum();
//     await getnum();
//     getnum();
// }

// async function greet(){
// throw "404 page not found";
// return hello;
// }
// greet()
// .then((result)=>{
//     console.log("promise was resolve");
//     console.log("Promise resolved:",result);
// })
// .catch((err)=>{
//     console.log("Promise rejected:",err);
// });

let h1=document.querySelector("h1")
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color=color;
            resolve("success color changed");
           },delay);
    })
    
}

async function demo(){
    try{
    await changecolor("red",1000);
    await changecolor("green",1000);
    await changecolor("yellow",1000);
    await changecolor("pink",1000);
    await changecolor("blue",1000);
    }
    catch(err){
        console.log("err caught");
        console.log(err);
    }
    let a=10;
    console.log(a);
    console.log("new number:",a+6);
}