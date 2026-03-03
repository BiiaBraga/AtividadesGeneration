/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Desenvolva um algoritmo que simule as operações básicas 
 * de uma Conta Bancária. O programa deverá ler o tipo da operação a 
 * ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) 
 * e o valor a ser depositado ou sacado (somente nas opções 2 e 3). 
 * Considere que um saque só pode ser realizado caso haja saldo 
 * suficiente. Ao final de cada operação, exiba o novo Saldo na tela. 
 * A variável saldo (número real), será inicializada com o valor de 
 * R$ 1000.00. Caso o número da operação esteja fora do intervalo 
 * entre 1 e 4, mostre a mensagem na tela Operação Inválida!
 * 
 */

//importacoes
import leia from 'readline-sync'

//TABELA DE OPERACOES DO BANCO
console.log("\n//========= BANCO DOS BRAGAS =========//\n");

console.log("\n// TABELA DE OPERACOES //\n");
console.log(" CÓDIGO    OPERACAO")
console.log("  1.\t   Saldo\n  2.\t   Saque\n  3.\t   Deposito\n")

//variaveis
let saldo = 1000.00;
let valor;
let operacao;

//entrada
console.log("Bem vindo(a) ao Banco dos Bragas!");
operacao = leia.questionInt("Indique o codigo da operacao que deseja realizar: ");

switch(operacao){
    case 1:
        console.log(`Saldo: R$ ${saldo}`);
        break;
    case 2:
        valor = leia.questionFloat("Valor: ");
        if(valor>saldo){
            console.log("Saldo Insuficiente!\n");
        } else {
            saldo = saldo - valor;
            console.log(`Novo saldo: R$${saldo}`);
        }
        break;
    case 3:
        valor = leia.questionFloat("Valor: ");
        saldo = saldo + valor;
        console.log(`Novo saldo: R$${saldo}`);
        break;
    default:
        console.log("Opcao invalida!\n");
}