// As variaveis devem ter no fim do codigo os valores comentados ao lado delas.
// Não pode redistribuir os valores, trabalhe com os que já tem, mas pode criar novas variaveis.
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(`os valores são ${varA}, ${varB} e ${varC}`);

// Codigo para reatirbuir
let varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(`os valores novos são ${varA}, ${varB} e ${varC}`);