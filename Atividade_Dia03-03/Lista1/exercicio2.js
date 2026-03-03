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

//importacoes
import leia from 'readline-sync'

//variaveis
let numero;
let ehPar;
let ehPositivo;

//entrada
numero = leia.questionInt("Digite um numero: ");

//processamento

//verifica se eh par 
if (numero%2 == 0){
    console.log("O numero %d eh par e ", numero);
} else {
    console.log("O numero %d eh impar e ", numero);
}

//verifica se eh negativo
if (numero>=0){
    console.log("positivo");
} else {
    console.log("negativo");
}