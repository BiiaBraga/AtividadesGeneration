/**
 * Autora: Beatriz Braga Silva
 * Data: 02/03
 * 
 * Exercício: Elabore um algoritmo em JavaScript que leia 4 notas de um participante, 
 * exiba na tela a média final do participante. 
 *
 */

//constantes
const leia = require('readline-sync')

//variaveis
let nota1;
let nota2;
let nota3;
let nota4;
let media;

//entrada
nota1 = leia.questionFloat("Digite a nota 1: ");
nota2 = leia.questionFloat("Digite a nota 2: ");
nota3 = leia.questionFloat("Digite a nota 3: ");
nota4 = leia.questionFloat("Digite a nota 4: ");

//processamento
media = ((nota1 + nota2 + nota3 + nota4) / 4);

//saida
console.log("A média final é %f", media.toFixed(1));