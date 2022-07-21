// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de vinte é maior que cinquenta

// d) negação de (vinte é maior que cinquenta)
const operação1 = 5 > 20 && 20 < 2
console.log(operação1)

const operação2 = 5 === 5 ||  5 === "5"
console.log(operação2)

const operação3 = 20 > 50
console.log(operação3)

const operação4 = 20 > 50 && 50 < 20
console.log(operação4)