let a = 1;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
let n1 = 10;
let n2 = 5;
let n3 = 16;
if (n1 > n2 && n1 > n3) {
  console.log("n1 maior")
} else if (n3 > n2 && n3 > n1) {
  console.log("n3 maior")
} else {
  console.log("n2 maior")
};
let n4 = 6;
if (n4 > 0) {
  console.log("positive")
} else if (n4 < 0) {
  console.log("negative")
} else {
  console.log("zero")
}
let angulo1 = 65;
let angulo2 = 100;
let angulo3 = 15;
let somadosangulos = angulo1 + angulo2 + angulo3;
let angulospositive = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;
if (angulospositive) {
  if (somadosangulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
  } else {
    console.log("erro");
  }; 
