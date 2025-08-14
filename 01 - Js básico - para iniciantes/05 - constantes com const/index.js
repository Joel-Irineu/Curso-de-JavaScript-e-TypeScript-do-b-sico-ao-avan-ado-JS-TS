
/* REGRAS SOBRE CONSTANTES
1. Constantes são declaradas com a palavra-chave const e não podem ser reatribuídas.
2. Constantes devem ser inicializadas no momento da declaração.
3. O nome de uma constante deve seguir as mesmas regras de nomenclatura que variáveis (não pode começar com número, pode conter letras, números, $ e _).
4. Constantes são sensíveis a maiúsculas e minúsculas (ex: PI e pi são diferentes).
5. Use nomes descritivos para constantes, geralmente em letras maiúsculas, separando palavras com underscores (ex: MAX_VALUE).
6. Constantes têm escopo de bloco, assim como variáveis declaradas com let.
7. Não podemos redeclarar uma constante no mesmo escopo onde ela já foi declarada.
8. Constantes são úteis para valores que não devem ser alterados ao longo do tempo, como configurações ou valores fixos.
*/
const nome = 'João'; // Constante de string
const idade = 30;

console.log(`Nome: ${nome}, Idade: ${idade}`);