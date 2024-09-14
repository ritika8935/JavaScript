/*Now build a calculator application, and we have to implement basic arithmetic operations. Write a JavaScript program that takes two numbers as input, performs addition, subtraction, multiplication, and division, and displays the results.

Input:-
num1:20 
num2: 10

Output:-
Addition is: 30
Subtraction is: 10
Multiplication is: 200
Division is: 2


Test Cases:-
The final output has been printed correctly-

a- The function 'add' should return the sum of num1 and num2. Store the operation in the 'answer' variable. Use the type conversion to get the correct output. 
b- The function 'subtract' should return the subtraction of num1 and num2. Store the operation in the 'answer' variable.
c- The function 'multiply' should return the multiplication of num1 and num2. Store the operation in the 'answer' variable.
d- The function 'divide' should return the division of num1 and num2. Store the operation in the 'answer' variable.
 */

let num1=prompt("enter first number");
let num2=prompt("enter second number");
let add=num1+num2;
console.log(add);
let subtract=num1-num2;
console.log(subtract);
let multiply=num1*num2;
console.log(multiply);
let divide=num1/num2;
console.log(divide);

/* Develop a program to calculate the area of a triangle. The program takes the base and height of a triangle as input and calculates the area using the appropriate arithmetic operators for multiplication and division.

Input:-
Base of the triangle: 10
Height of Triangle: 20

Output:-
Area of the triangle: 100

Test Cases:-
The final output should be printed correctly.

num1 and num2 are the base and height of the triangle respectively. Use the appropriate formula to evaluate the area of a triangle by using them and store it in the variable name 'answer'. 
 */


/*Your next task is to create a program to determine whether a Student is eligible for an Award or not if they are eligible store true in the answer else store false. Before getting eligible for the award he needs to be either eligible for a scholarship or should be participating in the Science fair function.

Given below are the eligibility criteria for the Scholarship, Science Fair Particion, and the Award.



Scholarship Eligibility:


A student is eligible for a scholarship if they score above 80 in at least two out of the three subjects.

Science Fair Participation:
To participate in a science fair, a student must have a total score of at least 250 across all three subjects.


Overall Eligibility for Award:
An award ceremony is approaching, and students are eligible for an award if they meet either the scholarship eligibility criteria or qualify for the science fair.


Input:-
English: 77
Maths:   84
Science: 93

Output:-
true

Explanation
The student is Eligible for a Scholarship.
The student is Eligible to participate in the Science Fair.
Since the student is eligible for a Scholarship as well as the science fair award they are eligible for the Award.
Test Cases:-
The final output should be printed correctly.

a- Check if the student is eligible for the scholarship.
b- Check if the student is eligible for the science fair award
c-Check if the student is eligible for the Award or not*/
