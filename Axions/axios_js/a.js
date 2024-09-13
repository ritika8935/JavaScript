let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    // console.log("button was clicked");
    let facts= await getFacts();
    console.log(facts);
    let p=document.querySelector("p");
    p.innerText=facts;
});

let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res =await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        return res.data.fact;
    }catch(e){
        console.loh("error",e);
    }
}







