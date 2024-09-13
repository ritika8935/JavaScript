let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*el;
});

//filter function
let fil=[3,4,5,1,5,67,8];
let aArr=fil.filter((el)=>{
    return !(el % 2) == 0;
});