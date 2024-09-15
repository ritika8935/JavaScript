/*Create a JavaScript function called lastDigit that takes two numbers, num1 and num2, as arguments. The function should determine whether the last digit of both numbers is equal. If the last digits are equal, the function should return true; otherwise, it should return false.

Expected Input
num1 = 29
num2 = 19
Expected Output
true
Expected Output
num1 = 12
num2 = 24
Expected Output
false
Test Cases
Define a function with the name lastDigit
Find out the last digits of both the numbers
Check if the numbers are equal 
If they are equal store true in the answer else store false*/

function lastdigit(num1,num2){
    let lastdigitnum1=num1%10;
    let lastdigitnum2=num2%10;
    if(lastdigitnum1===lastdigitnum2){
        return true;
    }else{
        return false;
    }
}

let a=lastdigit(34,64);
console.log(a);

/*Develop a JavaScript function called commonDigits that accepts two positive integers, num1, and num2, as parameters. The function should determine whether the numbers have an equal number of digits or not. If they have an equal number of digits then store true in the answer else store false.

Note

Use Math.floor when dividing the number by 10 to ensure that it returns data type number.
Expected Input
num1 = 78574
num2 = 78392
Expected Output
true
Expected Input
num1 = 74847
num2 = 781
Expected Output
false
Test Cases
Make a function named commonDigits
Take two numbers as arguments
Count the number of digits in both the numbers
Check if both the numbers have equal numbers of digits
If they are equal return true else return false */

function commonDigits(nu3,nu4){
   let ctnu3=0;
   let tempn3=nu3;
   while(tempn3>0){
    tempn3=Math.floor(tempn3/10);
    ctnu3++;
   }
   let ctnu4=0;
   let tempn4=nu4;
   while(tempn4>0){
    tempn4=Math.floor(tempn4/10);
    ctnu4++;
   }

   if(ctnu3===ctnu4){
    return true;
   }
   else{
    return false;
   }
}
let b=commonDigits(35,178);//return statement must store in variable.
console.log(b)

/*You're building a basic expense tracker program. The idea is to add new expenses, provided as a number, to the existing array of expenses. After doing this, the program should give you the updated array.

Expected Input
[340 , 567 , 434 , 653]
newExpense = 543
Expected Output
 [340 , 567 , 434 , 653 , 543]
Test Cases
 You should add a new expense to the existing array */

 let arr1=[546,28,296,287,738];
 arr1.push(890);
 console.log(arr1);

