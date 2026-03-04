/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Dado um vetor contendo 10 números inteiros 
 * não ordenados e não repetidos, construa um algoritmo 
 * que consiga pesquisar dados no vetor, onde o usuário 
 * irá digitar um número e o programa deve exibir na tela 
 * a posição deste número no vetor. Caso o número não seja 
 * encontrado, a mensagem: “Não foi encontrado!” deve ser 
 * exibida na tela.
 */

//importacoes
import leia from 'readline-sync'

//variaveis e constantes
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let num = 0;
let encontrado = false;

//MENU
console.log("\n//========= EXERCÍCIO 7 =========//\n");
console.log("//-- PROCURANDO NO VETOR: --//\n");

//entrada
num = leia.questionInt("Digite o numero que voces deseja encontrar: ");

//for para procurar o valor
for(let i=0; i<vetor.length; i++){
    if(vetor[i] == num){
        console.log("O numero estah localizado na posicao: %d", i);
        encontrado = true;
    }
}

if(encontrado==false){
    console.log("O numero %d nao foi encontrado!", num);
}