/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas 
 * com idade entre 60 e 69 anos, só podem doar sangue se não for a sua 
 * primeira doação. Escreva um Algoritmo que leia via teclado o nome do 
 * doador (string), a idade (número inteiro) do doador e se já fez outras 
 * doações de sangue (boolean). Conforme as Regras para a doação de sangue 
 * citadas acima, mostre na tela se o doador está Apto ou Não Apto para 
 * doar sangue
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let nome;
let idade;
let jaDoou;

//MENU
console.log("\n\nBem vindo(a) a central de doação de sangue!"); 
console.log("Estamos muito feliz com o seu interesse em salvar vidas!");
console.log("Antes de iniciarmos a doação, preciso de alguns dados seus.\n");

nome = leia.question("Qual eh o seu nome? ");
idade = leia.questionInt("Qual eh a sua idade? " );
jaDoou = leia.keyInYN("Voce ja doou sangue antes? ");

if(idade>=18 && idade<=59){
    console.log(`${nome} esta apto(a) para doar sangue!`);
} else if (idade < 18){
    console.log (`Sinto muito ${nome}! Voce nao esta apto(a) para doar sangue, espero mais ${18-idade} anos!`);
} else if(jaDoou == true){
    console.log(`${nome} esta apto(a) para doar sangue!`);
} else {
    console.log (`Sinto muito ${nome}! Voce nao esta apto(a) para doar sangue!`);
}

