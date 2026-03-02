/**
 * Autora: Beatriz Braga Silva
 * Data: 02/03
 * 
 * Exercício: Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença 
 * do produto entre o n1 e n2 pelo produto entre o n3 e o n4
 *
 */

//constantes
const leia = require('readline-sync');

//variaveis
let n1;
let n2;
let n3;
let n4;
let diferenca;

//entrada
n1 = leia.questionFloat("Digite o primeiro numero: ");
n2 = leia.questionFloat("Digite o segundo numero: ");
n3 = leia.questionFloat("Digiite o terceiro numero: ");
n4 = leia.questionFloat("Digite o quarto numero: ");

//processamento
diferenca = ((n1*n2) - (n3*n4));

//saida
console.log("A diferença é de %f", diferenca)