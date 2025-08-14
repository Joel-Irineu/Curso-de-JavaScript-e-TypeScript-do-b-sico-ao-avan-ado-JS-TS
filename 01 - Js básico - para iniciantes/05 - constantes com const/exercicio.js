// Faça o console imprimir a frase abaixo utilizando as variaveis e constantes
// Luiz Otávio Miranda tem 30 anos, pesa 84kh
// tem 1.80 de altura e seu IMC é de 25.925925925925924
// e nasceu em 01/01/1990

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const altura = 1.80;
const peso = 84;
const idade = 30;
let imc;
let dataNascimento;

imc = peso / (altura * altura);
dataNascimento = 2025 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`e nasceu em 29/01/${dataNascimento}`);