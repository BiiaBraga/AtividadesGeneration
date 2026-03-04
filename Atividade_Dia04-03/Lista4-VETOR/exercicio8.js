/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Elabore um algoritmo que leia 10 números 
 * inteiros e armazene em um vetor. Em seguida, mostre
 *  na tela:Todos os elementos dos índices ímpares do 
 * vetor,Todos os elementos do vetor que são números 
 * pares, A Soma de todos os elementos do vetor, A Média 
 * de todos os elementos do vetor, armazenada em uma 
 * variável do tipo real.
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis e constantes
const tam = 10;
const vetor = [tam];
let soma = 0;

//MENU
console.log("\n//========= EXERCÍCIO 8 =========//\n");
console.log("//-- VETOR: --//\n");
console.log("Insira os 10 numeros do vetor:");

//for para procurar o valor
for(let i=0; i<tam; i++){
    vetor[i] = leia.questionInt(`${i+1} numero: `);
}

//for para contar valores impares 
console.log("\nElementos nos indices impares: ")
for(let i=0; i<tam; i++){
    if(i%2==1){
        console.log(vetor[i]);
    }
    soma=soma+vetor[i];
}

//for para contar valores pares
console.log("\nElementos pares: ")
for(let i=0; i<tam; i++){
    if(vetor[i]%2==0){
        console.log(vetor[i]);
    }
}

console.log("Soma: %d", soma);
console.log("Media: %d", (soma/tam));