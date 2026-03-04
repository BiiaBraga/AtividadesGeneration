/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Escreva um algoritmo, que leia a idade de 
 * várias pessoas (números inteiros), via teclado e mostre 
 * na tela o total de pessoas cuja idade seja menor que 21 
 * anos e o total de pessoas cuja idade, seja maior que 50 
 * anos. A leitura dos dados deve ser finalizada ao digitar 
 * uma idade negativa.
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let maiores50 = 0;
let menores21 = 0;
let idade;
let i = 1;
let continuar = true;

//MENU
console.log("\n//========= EXERCÍCIO 3 =========//\n");
console.log("//-- MENOR QUE 21 E MAIOR QUE 50: --//");
console.log("O programa para ao colocar uma idade invalida (<=0)!\n");

//while para inserir os valores e calcular quantidade de pares e impares
while(continuar){
    idade = leia.questionInt("Digite uma idade: ");
    if (idade<=0){
        continuar = false
    }else if (idade>50) {
        maiores50+=1;
    }else if(idade<21){
        menores21+=1;
    }
}

//saida
console.log("\nTotal de pessoas menores de 21 anos: %d", menores21);
console.log("Total de pessoas maiores de 50 anos: %d", maiores50);