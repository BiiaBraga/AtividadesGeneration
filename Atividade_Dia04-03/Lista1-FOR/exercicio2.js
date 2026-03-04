/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Escreva um algoritmo, que leia 10 números 
 * inteiros via teclado e mostre na tela quantos números 
 * são pares e quantos número são ímpares
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let num;
let pares = 0;
let impares = 0;

//MENU
console.log("\n//========= EXERCÍCIO 2 =========//\n");
console.log("//-- QUANTOS PARES E QUANTOS IMPARES: --//");

//entrada
console.log("Para iniciar é necessário inserir 10 valores!");

//for para inserir os valores e calcular quantidade de pares e impares
for(let i=1; i<=10; i++){
    num = leia.questionInt(`Digite o ${i} numero: `);
    if (num%2==0) {
        pares+=1;
    }else{
        impares+=1;
    }
}

//saida
console.log("\nTotal de numeros pares: %d", pares);
console.log("Total de numeros impares: %d", impares);