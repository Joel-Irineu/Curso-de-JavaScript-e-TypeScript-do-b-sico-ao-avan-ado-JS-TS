let nome; //declarando variável
nome = 'Henrique'; //atribuindo valor à variável

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000,', nome,'conheceu Maria.');
console.log(nome, 'e Maria se casaram em 2012.');
console.log(nome, 'e Maria tiveram um filho em 2015.');
console.log('O filho de', nome,'se chama Eduardo.');


nome = 'João'; //reatribuindo valor à variável
console.log('O novo nome é', nome, 'e ele nasceu em 2018.');


/* REGRAS SOBRE VARIÁVEIS
1. Variáveis podem ser declaradas com let, var ou const.
2. Variáveis declaradas com let podem ser reatribuídas, enquanto const não pode.
3. Variáveis não podem começar com números, mas podem conter números após a primeira letra.
4. Variáveis podem conter letras, números, $ e _.
5. Variáveis são sensíveis a maiúsculas e minúsculas (ex: nome e Nome são diferentes).
6. Evite nomes de variáveis que sejam palavras reservadas do JavaScript.
7. Use nomes descritivos para facilitar a compreensão do código.
8. Variáveis declaradas com var têm escopo global ou de função, enquanto let e const têm escopo de bloco.
9. Não podemos redeclara uma variável com let no mesmo escopo onde ela já foi declarada.
*/