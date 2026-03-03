/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Escreva um algoritmo que leia um número inteiro via teclado 
 * e mostre na tela uma mensagem indicando se este número é par ou ímpar 
 * e se o número é positivo ou negativo.
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
if (numero%2 == 0){
    if (numero>=0){
        console.log("O numero %d eh par e positivo!", numero);
    } else {
        console.log("O numero %d eh par e negativo!", numero);
    }
} else {
    if (numero>=0){
        console.log("O numero %d eh impar e positivo!", numero);
    } else {
        console.log(" O numero %d eh impar e negativo!", numero);
    }
}