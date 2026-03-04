/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Escreva um algoritmo, que leia 2 números inteiros via teclado, 
 * onde o primeiro número deve ser menor do que o segundo número. Caso contrário, 
 * deve ser exibida uma mensagem na tela informando que o intervalo é inválido e 
 * sair do programa. No intervalo informado, mostre na tela todos os números que 
 * são múltiplos de 3 e 5
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let num1, num2;
let valido = false;

//MENU
console.log("\n//========= EXERCÍCIO 1 =========//\n");
console.log("//-- ENCONTRE OS MULTIPLOS DE 3 E 5: --//");

//While para o usuario escolher um intervalo valido.
while(valido == false){

    //entrada
    console.log("Para iniciar é necessário inserir 2 valores para ditar o intervalo!\nO primeiro valor deve ser menor que o segundo!");
    num1 = leia.questionInt("Primeiro valor: ");
    num2 = leia.questionInt("Segundo valor: ");

    //if para verifica se o intervalo é invalido
    if (num1>=num2){
        console.log("\nIntervalo inválido!\nINSIRA OUTROS VALORES!\n");
    } else {
        valido = true;
    }
}

console.log(`No intervalo entre ${num1} e ${num2}:`);

//for para calcular os multiplos de 3 e 5 no intervalo 
for (let i=num1; i<=100; i++){
    if((i%3 == 0) && (i%5 == 0)){
        console.log(`${i} é multiplo de 3 e 5`);
    }
}
