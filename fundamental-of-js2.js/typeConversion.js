//type-conversion
//String()
console.log(String(100));
console.log(String(null));//allow to convert into string
console.log(String(undefined));//allow to convert into string
console.log(String(true));
//toString()
console.log((123).toString());
//console.log(null.toString());//not allow to convert into string
//console.log(undefine.toString());//not allow to convert into string

//NUMBER()
console.log(Number('5'));
console.log(Number('value'));
console.log(Number(false));

//unary + operator---works on variable
let a='123';
console.log(+a);//+ convert string into number.but only numeric string can be converted not('123riihem')-op will be nan.

//parseInt()
console.log(parseInt('12345f'));//if it start with a number it convert string with numeric value into number.
//parseFloat()
console.log(parseFloat('123.45f'));

//boolean()
console.log(Boolean('782'));