/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Escreva um algoritmo, que leia números inteiros via teclado, 
 * até que o número zero seja digitado. Ao final, mostre na tela a soma de 
 * todos os números digitados, que sejam positivos.
 */

//importacoes
import leia from 'readline-sync'

//variaveis e constantes
let num;
let somaPositivos = 0;

//MENU
console.log("\n//========= EXERCÍCIO 5 =========//\n");
console.log("//-- SOMANDO OS NUMEROS POSITIVOS: --//\n");

do{
    num = leia.questionInt("Digite um numero: ");
    if(num>0){
        somaPositivos+=num;
    }
}while(num!=0);

console.log("A soma dos numeros positivos eh: %d", somaPositivos);