//operator in js:-
//Assignment operator(=)
let a=10;
let c=a=10;
console.log(c);
//Arthimetic operator(+,-,*,%,/)
console.log(10+2);
//more Arthimetic operator(++,--,+(unary +),-(unary -),**)
let i=10;
i++;
++i;
i--;
console.log(i);
console.log(i**2);
//Argument Assignment Operator(*=,+=,-=,/=)
//i=i+3;
i += 3;

//comparison operator(<,><=,>=,!=,==,===,!==)

console.log('5'==5);
console.log('5'===5);
console.log('6'!=6);
console.log('6'!==6);

let birth=17;
let righttovote=birth>=18;
console.log(righttovote);

//logical operator
console.log(1 && 3 && 8 && 2 && 0 && 9 && 10 && null);//it will return first fasly value.i.e 0
console.log(1 && 3 && 8 && 2 && 30 && 9 && 10 && null);//return null

console.log(0 || null || undefine || false || nan);//return last fasly value.
console.log(0 || "string" || undefine || false || nan);//return string because it find true value.