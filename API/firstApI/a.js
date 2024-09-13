let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{//requested
    return res.json();//request catched and return in form of json.
})
.then((data)=>{
    console.log(data);//data printed
    console.log("data1",data.fact);
    return fetch(url);
})
.then((res)=>{//another request
    return res.json();//request catched and return in form of json.
})
.then((data2)=>{//second data printed.
    console.log("data2",data2.fact);
})
.catch((err)=>{
    console.log("ERROR:",err);
});