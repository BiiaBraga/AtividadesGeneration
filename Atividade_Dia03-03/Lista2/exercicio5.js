/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Com base na tabela abaixo, escreva um algoritmo que leia o código de um item 
 * (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir,
 *  mostre na tela o valor total da conta e o nome do produto que foi comprado.
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let opcao;
let quantidade;
let somaTotal = 0;
let finalizado = false;

//CARDAPIO
console.log("\n//========= BEM VINDO AO BIA'S RESTAURANTS =========//\n");
console.log("\t\t//-- CARDAPIO: --//")
console.log("CÓDIGO DO PRODUTO      PRODUTO\t\tPRECO")
console.log("\t1.\t     Cachorro Quente  \tR$10,00\n\t2.\t\tXsalada\t\tR$15,00\n\t3.\t\tXbacon\t\tR$18,00\n\t4.\t\tBauru\t\tR$12,00\n\t5.\t      Refrigerante\tR$8,00\n\t6.\t     Suco de laranja\tR$13,00\n")

//laço para acrescentar varios itens no pedido
while(finalizado == false){

    opcao = leia.questionInt("Insira o codigo do produto: ");
    quantidade = leia.questionInt("Quantidade deste produto: ");
    
    switch(opcao){
        case 1:
            somaTotal = somaTotal + (quantidade * 10);
            break;
        case 2:
            somaTotal = somaTotal + (quantidade * 15);
            break;
        case 3:
            somaTotal = somaTotal + (quantidade * 18);
            break;
        case 4:
            somaTotal = somaTotal + (quantidade * 12);
            break;
        case 5:
            somaTotal = somaTotal + (quantidade * 8);
            break;
        case 6:
            somaTotal = somaTotal + (quantidade * 13);
            break;
        default:
            console.log("Insira um código válido!\n");
    }

    finalizado = leia.keyInYN("Digite Y se finalizou o pedido ou N para adicionar outro produto.\n");    
}

console.log("\nO seu pedido deu R$%d", somaTotal);