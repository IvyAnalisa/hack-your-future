// 1. print statement//
console.log("hello world!");
console.log("Ciao, mondo!");
console.log("Hola, mundo!");
// 2. consider following code//
console.log("I'm awesome");

// 3. Declare variable x//
var x;
console.log("the value of my variable x will be : undifined");
console.log("value of x:" +x);
x=4;
console.log("the value now is 4");
console.log("the real value is"+x);

// 4. assign different values to String variable//
var y="i love javascript";
console.log("the value of my string will be: i love javascript");
var y="bonjour";
console.log("bonjour");

// 5. number//
var z=7.25;
console.log(z);
var a = Math.round(z);
console.log(a);

//6. array//
var plurality=[];
console.log("it is an empty array");
console.log(plurality);

var MyFavoriteAnimals=["cat","bear","hamster"];
console.log(MyFavoriteAnimals);
MyFavoriteAnimals.push("babypig");
console.log(MyFavoriteAnimals);

// 7.string//
let myString="this is a test";
let blueString="hello world!";
console.log(blueString);
myString.length;
console.log(blueString.lenght);

//8.check the types of two variables//
let foo=3;
console.log('The value of my variable foo is:'+foo);

var a= 3;
var b="rabbit";
var c=false;
var d=10.6;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
if(typeof a!== typeof b){
    console.log("NOT SAME TYPE");
}
if(typeof a!==typeof d){
    console.log("SAME TYPE");
}

//9.//
var x=7;
x=x%3;

console.log("% is an arthimetic operator");
console.log(x);
console.log(20%3);

//10.//
var cars=["Porche","Volvo","Ford"];
console.log(cars);
