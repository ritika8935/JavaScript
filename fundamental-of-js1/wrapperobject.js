//wrapper object are automatic created when primitive datatype are written,except null and undefine.
let num=10;
const nam="ritika";
let bool=false;
let bn=10n;

console.log(num.__proto__);//__proto__ to check the wrapper obj.
console.log(nam.__proto__);
console.log(bool.__proto__);
console.log(bn.__proto__);