/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Com base na tabela abaixo, escreva um algoritmo que simule 
 * uma Calculadora simples. O programa deverá ler dois números reais: 
 * numero1 e numero2, e na sequência ler o Código da operação matemática 
 * (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da 
 * operação entre os 2 números. Caso o número da operação esteja fora do 
 * intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let numero1;
let numero2;
let operador;

//TABELA DE OPERADORES
console.log("\n//========= CALCULADORA DA BIIA =========//\n");


console.log("\n// TABELA DE OPERADORES //\n");
console.log(" CÓDIGO    OPERADOR")
console.log("  1.\t   Soma\n  2.\t   Subtracao\n  3.\t   Multiplicacao\n  4.\t   Divisao\n  5.\t   Porcentagem\n  6.\t   resto da divisao\n")

//entrada
numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");
operador = leia.questionInt("Digite o codigo do operador: ");

//switch case
switch(operador){
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        break;
    case 5:
        console.log(`${numero1} ** ${numero2} = ${numero1 ** numero2}`);
        break;
    case 6:
        console.log(`${numero1} % ${numero2} = ${numero1 % numero2}`);
        break;
    default:
        console.log("Opcao invalida!\n");
}