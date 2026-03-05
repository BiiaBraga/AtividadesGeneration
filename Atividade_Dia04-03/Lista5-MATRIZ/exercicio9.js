/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Elabore um algoritmo que leia uma Matriz 
 * 3×3 de números inteiros e em seguida, mostre na tela:
 * Todos os elementos da Diagonal Principal, Todos os 
 * elementos da Diagonal Secundária, A Soma de todos os 
 * elementos da Diagonal Principal e A Soma de todos os 
 * elementos da Diagonal Secundária
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis e constantes
const matriz = [[null, null, null],
                [null, null, null],
                [null, null, null]]
let somaPrincipal = 0;
let somaSecundaria = 0;
let j = 2;

//MENU
console.log("\n//========= EXERCÍCIO 9 =========//\n");
console.log("//-- DIAGONAL DA MATRIZ: --//\n");

//entrada
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        matriz[i][j] = leia.questionInt("Insira um valor: ");
    }
}

//diagonal Principal
console.log("Os valores da Diagonal Principal:");
for(let i=0; i<3; i++){
    somaPrincipal+=matriz[i][i];
    console.log(matriz[i][i]);
}

//diagonal Segundaria
console.log("Os valores da Diagonal Secundaria:");
for(let i=0; i<3; i++){
    somaSecundaria+=matriz[i][j];
    console.log(matriz[i][j]);
    j--;
}

//saida
console.log("Soma dos Elementos da Diagonal Principal: %d", somaPrincipal);
console.log("Soma dos Elementos da Diagonal Secundaria: %d", somaSecundaria);
