//converting JSON data into JS object.
let jsonRes='{"fact":"Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!","length":98}';

let validRes=JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

//converting JS object into JSON data.

let student={
    name:"ritika",
    age:21,
};

let jsonconverting=JSON.stringify(student);
console.log(jsonconverting);