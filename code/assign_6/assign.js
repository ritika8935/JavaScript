let arr=[2,4,5,6,7,8,9,3,2,1,0,4];
let num=5;
//element larger than a number num.
function arrelement(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
arrelement(arr,num);

//function to get string with all unique elements
let str="abchdgabjdkf";
function getunique(str){
let ans="";
for(let i=0;i<str.length;i++){
    let currchar=str[i];
    if(ans.indexOf(currchar)==-1){
        ans += currchar;
    }
}
return ans;
}
getunique(str);

//find longest length of a country name in array using function
let country=["america","germany","united state of america","india"];
let startInd=0;
function longest_name(country){
  for(let i=0;i<country.length;i++){
    let camp1=country[startInd].length;
    let camp2=country[i].length;
    if(camp2>camp1){
        startInd=i;
    }
  }
  return country[startInd];
}
longest_name(country);

//count number of vowel in string argument
let vol="ritika";
function vowel(vol){
    let count=0;
   for(let i=0;i<vol.length;i++){
    if(
        vol.charAt(i) == "a" ||
        vol.charAt(i) == "e" ||
        vol.charAt(i) == "i" ||
        vol.charAt(i) == "o" ||
        vol.charAt(i) == "u" 

    ){
    count++;}
   }
}
return count;

//generat random number between start and end using function
let start=10;
let end=20;
function rand(start,end){
    diff=end-start;
    let no=Math.floor(Math.random()*diff)+start;
    return no;
}
