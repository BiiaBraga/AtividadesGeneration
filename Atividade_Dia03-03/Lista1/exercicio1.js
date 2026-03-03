/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e 
 * imprima na tela se a soma de A + B é maior, menor ou igual a C.
 * Na construção do Algoritmo, utilize os seguintes conteúdos: Entrada e Saída 
 * de dados, Operadores e Laço Condicional IF
 * 
 */

//importações
import leia from 'readline-sync'

//variaveis
let A;
let B;
let C;
let soma;

//entrada
A = leia.questionInt("Digite o numero A: ");
B = leia.questionInt("Digite o numero B: ");
C = leia.questionInt("Digite o numero C: ");

//processamento
soma = A + B;

if (soma < C){
    console.log("A soma de A + B é menor que C");
} else if (soma == C){
    console.log("A soma de A + B é igual a C");
} else {
    console.log("A soma de A + B é maior que C");
}