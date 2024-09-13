function sum(a,b=2){
    return a+b;
}
sum(1);//1 assign in a and default value for b is 2 so the ans will be 3.
sum(1,4);// ans is 5
//default value is apply at last because parameter assignment is done in order way.
function sum(a=2,b){
    return a+b;
}
sum(1)//ans will be NAN because for b there is no value assignment.
sum(3,4)//7