//3.1
function foo(func){
return func();
}
function bar(){
    console.log('Hello, I am bar!');
}
foo(bar);

//3.2
function divisionThree(){
    console.log("Is divisible by 3");
}
function divisionFive(){
    console.log("Is divisible by 5");
}
function threeFive(startIndex, stopIndex,threeCallback,fiveCallback){
    const values=[];
    for(i=startIndex; i<=stopIndex;i++){
values.push(i);
if(i%3===0){
    console.log(i)
}
else if(i%5===0){
    console.log(i);
}
    }
console.log(values);
}
threeFive(10,15,sayThree,sayFive);
//3.3
function repeatStringNumTimes(str, num) {
   if(num<0)
   return"";
   if(num===1)
   return str;
   else
   return str+ repeatStringNumTimes(str,num-1);
  }
  
  repeatStringNumTimes("abc", 3);
  
//3.4
var MotorBike = function() {
    this.wheels=4;
    this.engines=1;
      this.seats=2;
    };

//3.5

 //3.6
 const arr=[1,2,3];
 const arr2d=[[1,2],[3,4],[5,6]];
 //3.7
 const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
// First function f1 is passed by value of"x" and fucntion has a copy variable. "x" won't be effect with any change inside function.
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
// Second funtion f2 is calling reference of "x" in the object .And value of x will be changed by fucntion

//step 4
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

let array=['a','b','c','d','e','f','g'];
