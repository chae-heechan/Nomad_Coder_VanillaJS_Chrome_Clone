// parameter
function showMessage(...args){
  // 3개 다 같은 기능
  for (let i = 0; i < args.length; i++){
    console.log(args[i]);
  }

  for (const arg of args){
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

showMessage("hello", "chae");

// Local scope
let globalMessage = "global";
function printMessage(){
  let message = "local";
  console.log(message);
  console.log(globalMessage);
}

printMessage();

// return a value
function sum(a, b){
  return a + b;
}

const result = sum(1,2);
console.log(`sum: ${result}`);

// early return, early exit
function badUpgrade(user){
  if(user.point > 10){
    // upgrade logic
  }
}

function goodUpgrade(user){
  if(user.point <= 10){
    return;
  }
  // upgrade logic
}

// function expression
const print = function () {  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// Callback function
function randomQuiz(answer, printYes, printNo){
  if (answer === "love you"){
    printYes();
  }
  else{
    printNo();
  }
}

// anonymous funtion
const printYes = function (){
  console.log("Yes");
};

// named function 
const printNo = function print(){
  console.log("No");
}

randomQuiz("love me", printYes, printNo);
randomQuiz("love you", printYes, printNo);


// Arrow function
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const compute = add(1, 2);
console.log(compute);

// IIFE : 즉시 실행 함수 표현
(function IIFE(){
  console.log("IIFE");
})();

const calculate = function(command, a, b){
  switch(command){
    case "add":
      console.log(a+b);
      break;
    case "substract":
      console.log(a-b);
      break;
    case "divide":
      console.log(a/b);
      break;
    case "multiply":
      console.log(a*b);
      break;
    case "reminder":
      console.log(a%b);
      break;
    default:
      console.log("please enter right operator");
      break;
  }
}

const user = calculate("multiply", 3, 2);