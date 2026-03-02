/**
 * Autora: Beatriz Braga Silva
 * Data: 02/03
 * 
 * Exercício: Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno,
 * as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido.
 *
 */

//constantes
const leia = require('readline-sync');

//variaveis
let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salaroLiquido;

//entrada
salarioBruto = leia.questionFloat("Digite o salario bruto: ");
adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
horasExtras = leia.questionFloat("Digite as horas extras: ");
descontos = leia.questionFloat("Digite os descontos: ");

//processamento
salaroLiquido = (salarioBruto + adicionalNoturno + (horasExtras*5) - descontos);

//saida
console.log("O salário liquido é de %d", salaroLiquido);