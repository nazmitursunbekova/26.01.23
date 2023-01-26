function sayHello(){
  console.log("Hello")
}


sayHello();
sayHello();


function sayBye(){
  console.log("bye");
}


sayBye();
sayBye();
sayBye();

function sayHelloTo(name){
  console.log("Hello" + name)
}

sayHelloTo("Bakyt");
sayHelloTo("Dastan");

function myCity(city){
  console.log("I was born in " + city)
}

myCity("Bishkek"); // I was born in Bishkek
myCity("Karakol"); // I was born in Karakol 


function myFriend(friend){
  console.log("My best best friend is " + friend)
}

myFriend("Bakyt"); // My best best friend is Bakyt
myFriend("Dastan"); // My best best friend is Dastan


function printSum(a, b){
  let sum = a + b;
  console.log("The sum of "+ a +" and "+ b + " is "+ sum)
}

printSum(5,10); //  The sum of 5 and 10 is 15
printSum(-5, 0);
printSum(100, 125)




printDiff(5,10); // 5 - 10 = -5
printMultiply(5,10); // 5 * 10 = 50
printDivide(50,10); // 50 / 10 = 5




function printDiff(a, b){
  let sum = a - b;
  console.log("The diff of "+ a +" and "+ b + " is "+ sum)
}

function printMultiply(a, b){
  let sum = a * b;
  console.log("The multiplication of "+ a +" and "+ b + " is "+ sum)
}

function printDivide(a, b){
  let sum = a / b;
  console.log("The divition of "+ a +" and "+ b + " is " + sum)
}


function isWeekend(weekday){
  switch (weekday){
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thuesday":
  case "friday":
    console.log(weekday + "is not weekend");
    case "saturday":
    case "sunday":
      console.log(weekday + "is weekend");
      break;
}
}
isWeekend("monday");
isWeekend("tuesday");
isWeekend("sundayday");
isWeekend("friday");
isWeekend("wednesday");




isDivisibleBy(5, 2);// 5 is not divisible by 2
isDivisibleBy(4, 2);// 4 is  divisible by 2




isEven(5); // 5 is not even
isEven(2); // 5 is even
isEven("asd"); // asd is not a number
isEven(0); // 0 is not even


function isEven (a) {
  console.log(a + "is not even")
}
function isEven (a) {
  console.log(a + "is even")
}
function isEven (a) {
  console.log(a + "is not a number")
}
function isEven (a) {
  console.log(a + "is not even")
}