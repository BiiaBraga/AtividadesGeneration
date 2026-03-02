/**
 * Autora: Beatriz Braga Silva
 * Data: 02/03
 * 
 * Exercício: Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo na Linguagem JavaScript. 
 */


//constantes
const leia = require('readline-sync');

//variaveis
let salario;
let abono;
let novoSalario;

//entrada
salario = leia.questionFloat("Digite o salario: ");
abono = leia.questionFloat("Agora digite o abono: ");

//processamento
novoSalario = salario + abono;

//saida
console.log("O novo salario é de %f", novoSalario);
