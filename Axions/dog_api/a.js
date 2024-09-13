let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    //console.log("clicked!");
    let link =await getImg();
    let img=document.querySelector("#random");
    img.setAttribute("src",link);
    console.log(link);
})


let url="https://dog.ceo/api/breeds/image/random";
async function getImg(){
    try{
        let res=await axios.get(url);
       return res.data.message;
    }
 catch(e){
    console.log("error!",e);
    return "Img Not Found";
}
}
