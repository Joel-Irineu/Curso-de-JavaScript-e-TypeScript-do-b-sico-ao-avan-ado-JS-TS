/**
 * Aritimeticos
 * + adição / concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * ** potenciação
 * % resto da divisão
 */

const num = '5'; //string
const num1 = 10;
const num2 = 5;

console.log(num + num1);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// Os operadores possuem precedencia assim como a matematuca e () possui precedencia maior
// Ordem da precedencia () >> ** >> * / % >> + -
// Operadores de mesma procedencia são respeitado a ordem da esquerda pra direita
console.log(num1 + num2 * num1);
console.log((num1 + num2) * num1);


// O = é um operador de atribuição
// incrementar é somar + 1, decrementar é subtrair um
// o pré incremento não retem o valor e já adiciona na variavel, o pós ele adiciona após sua execução, do memo modo o decremento
let contador = 1;
contador++;
contador++;
++contador;
console.log(contador);
console.log(contador--);
console.log(contador);
// faça priemiro o incremento e depois use a variavel.
// outros operadores de atribuição
// *= /= += -=
contador+=3; // você pode incrementar mais de um valor usando += e decrementar usando -=, isso é o mesmo que contador = contador + 3;
console.log(contador);
contador *= 2;
console.log(contador);
contador /= 2;
console.log(contador);

// cuidado com os valores, é necessario ser number do contrario ira retornar NaN;
console.log("L5" - 2); // Retorna NaN(Not a Number)