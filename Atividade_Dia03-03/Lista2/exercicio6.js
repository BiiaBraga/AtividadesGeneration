/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Com base na tabela abaixo, escreva um algoritmo que leia o 
 * Nome do Colaborador (string), o Código do Cargo do Colaborador (número 
 * inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela 
 * o Nome do Colaborador, o Cargo e o novo Salário reajustado.
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let nome;
let salario = 0;
let cargo;

//TABELA DE CARGOS
console.log("\n//========= TABELA DE CARGOS =========//\n");
console.log(" CÓDIGO DO CARGO      CARGO")
console.log("\t1.\t     Gerente\n\t2.\t     Vendedor\n\t3.\t     Supervisor\n\t4.\t     Motorista\n\t5.\t     Estoquista\n\t6.\t     Tecnico de TI\n")

//entrada
console.log("Parabéns, voce recebeu um aumento de salário!\nInsira seus dados para descobrir seu novo salario.\n");
nome = leia.question("nome: ");
salario = leia.questionFloat("Seu salario atual: ");
cargo = leia.questionInt("O codigo do seu cargo: ");

//switch
switch (cargo){
    case 1:
        salario = salario + ((10/100)*salario);
        break;
    case 2:
        salario = salario + ((7/100)*salario);
        break;
    case 3:
        salario = salario + ((9/100)*salario);
        break;
    case 4:
        salario = salario + ((6/100)*salario);
        break;
    case 5:
        salario = salario + ((5/100)*salario);
        break;
    case 6:
        salario = salario + ((8/100)*salario);
        break;
    default:
        console.log("Insira um código de cargo valido!\n");
}

console.log("Parabéns, agora seu novo salario eh de R$%f", salario);