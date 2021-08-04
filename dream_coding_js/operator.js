// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
// console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// console.log(preIncrement);

// 4.Assignment operators
let x = 3;
let y = 5;
x += y;
console.log(x);

// 5. Comparsion operators
console.log(10 <= 6)

// 6. Logical operators: ||, &&, !
// or 연산, and 연산 모두 앞에 가벼운 연산, 뒤에 무거운 연산을 둘것

// 7. Equality: ==(동등 연산자), ===(일치 연산자)

console.log(0==false);  // true
console.log(0===false); // false
console.log(''==false); //true
console.log(''===false);//false

// 8. conditional operators: if
const user = "chae";
if (user === "chae"){
  console.log(`Welcome ${user}`);
}
else if (user === "coder"){
  console.log("You are amazing coder");
}
else{
  console.log("unknown");
}

// 9. Ternary operator : ?
// condition ? value1: value2;
console.log(user === 'chae' ? 'yes' : "no");

// 10. switch statement

const browser  = "IE";
switch(browser){
  case "IE":
    console.log("go away");
    break;
  case "chrome":
  case "firefox":
    console.log("love you");
    break;
  default:
    console.log("same all");
    break;
}

// 11. Loops

let count = 3;
while (count > 0){
  console.log(`while ${count}`);
  count--;
}

for (count=0; count < 5; count ++){
  console.log(`for ${count}`);
}

for(let i = 0; i<=10; i++){
  // 홀수일 경우
  if(i%2!==0)
    continue;
  console.log(i);
}

for(let i = 0; i < 100; i ++){
  console.log(i);
  if (i >= 9){
    break;
  }
}