// function savetodb(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetodb("webcreation",()=>{
//     console.log("success: your data was saved");
//     savetodb("Ritika",()=>{
//         console.log("success2: saved");
//         savetodb("Ecommerce",()=>{
//             console.log("success3");
//         },()=>{
//             console.log("failure3");
//         })
//     },()=>{
//         console.log("failure2:weak connection");
//     });
// },()=>{
//     console.log("failure: weak network connection");
// });

//Refactoring with promises

function savetodb(data){
    return new Promise((resolve,reject)=>{//Promise is a object
        let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>4){
        resolve("success: data saved");
    }else{
        reject("failure:data not saved");
    }
    });
    
    
}
//The Promise onject represent the eventual completion(or failure) of an asynchronous operation and its resulting value.

//Then() and Catch method()

savetodb("riya")
.then((result)=>{
    console.log("data1 was saved");
    console.log("the result of Promise:",result);
    return savetodb("ritika");
})
.then((result)=>{
    console.log("data2 was saved");
    console.log("the result of Promise:",result);
    return savetodb("anu");
})
.then((result)=>{
    console.log("data3 was saved");
    console.log("the result of Promise:",result);
})
.catch((error)=>{
    console.log("rejected");
    console.log("the error of Promise:",error);
});
