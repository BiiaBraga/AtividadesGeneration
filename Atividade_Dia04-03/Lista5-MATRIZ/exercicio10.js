/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Elabore um algoritmo que leia as notas de uma turma 
 * com 10 participantes, dos 4 bimestres de um ano. As 4 notas de 
 * cada participante serão armazenadas em uma linha de uma matriz 
 * de números reais, logo cada linha da matriz representará as 
 * notas de um participante. Em um vetor de números reais, armazene 
 * as médias de cada participante e exiba as médias de cada um na tela.
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis e constantes
const matriz = [[null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]]
let vetor = [10];
let soma = 0;

//MENU
console.log("\n//========= EXERCÍCIO 10 =========//\n");
console.log("//-- NOTAS DA MATRIZ: --//\n");

//entrada
for(let i=0; i<10; i++){
    console.log("\nAluno %d:", i+1)
    for(let j=0; j<4;j++){
        matriz[i][j] = leia.questionFloat(`Nota ${j+1}: `);
        soma+=matriz[i][j];
    }
    vetor[i]= Number(soma/4).toFixed(1);
    soma = 0;
}

//saida
console.log(vetor);
