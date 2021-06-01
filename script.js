console.log("hello");
const number = Math.random ();
console.log(number)
const num = Math.random ()*100;
console.log(num)

console.log("1")
console.log("2")

let i = 1;
while(i < 10){
  console.log(i)
  i = i + 1;
}

let j = 2;
while(j <= 10){
  console.log(j)
  j = j + 1;
}

for (k=0; k<10; k=k+1){
  console.log(k)
}

for (a=0; a<10; a=a+2){
  console.log(a)
}

const floor = Math.floor(number);
console.log(floor)

if(floor%2 ==0){
  console.log("even");
}

if(floor %2==0){
  console.log("even");
} else {
  console.log("odd");
} 

let b = number;
switch (b) {
  case 5:
    console.log("Buzz");
    break;
    case 0:
      console.log("Zero");
      break;
      default:
      console.log("Fizz");
}

for (let i = 0; i < 10; i++){
  if (i==5){
    break;
  }
  console.log(i);
}