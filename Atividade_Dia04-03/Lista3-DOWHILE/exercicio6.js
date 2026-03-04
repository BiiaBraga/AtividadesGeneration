/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Escreva um algoritmo, que leia números inteiros 
 * via teclado, até que o número zero seja digitado. Ao final, 
 * mostre na tela a média de todos os números digitados, que 
 * sejam múltiplos de 3
 */

//importacoes
import leia from 'readline-sync'

//variaveis e constantes
let num;
let soma = 0;
let qtd = 0;

//MENU
console.log("\n//========= EXERCÍCIO 6 =========//\n");
console.log("//-- SOMANDO OS NUMEROS MULTIPLOS DE 3: --//\n");

do{
    num = leia.questionInt("Digite um numero: ");
    if(num==0){
        break;
    }else if(num%3==0){
        soma+=num;
        qtd++;
    }
}while(num!=0);

console.log(`A media dos numeros multiplos de 3 eh: ${soma/qtd}`);