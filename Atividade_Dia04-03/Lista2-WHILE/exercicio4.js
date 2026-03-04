/**
 * Autora: Beatriz Braga Silva
 * Data: 04/03
 * 
 * Atividade: Uma empresa desenvolveu uma pesquisa interna 
 * para conhecer os colaboradores da área de Desenvolvimento 
 * e precisam de um sistema para analisar os dados. Escreva 
 * um algoritmo, que leia via teclado as seguintes informações 
 * de cada colaborador: idade, identidade de genero, pessoas
 * desenvolvedora. Após digitar o Tipo de Pessoa Desenvolvedora, 
 * o sistema deverá perguntar ao usuário se ele deseja continuar 
 * a leitura dos dados de um novo colaborador ou não (S/N)
 */

//importacoes
import leia from 'readline-sync'

//variaveis e constantes
let idade, genero, pessoaDev;
const lista = [];
let continuar = true;
let listaTam = 0;
let qtdBackend = 0;
let qtdMulheresFront = 0;
let qtdHomens40 = 0;
let qtdBin30Full = 0;
let qtdPessoas = 0;
let idadeTotal = 0;

//MENU
console.log("\n//========= EXERCÍCIO 4 =========//\n");
console.log("//-- CONHECENDO OS COLABORADORES DEVS: --//\n");

//for para entrada 
while(continuar){
    idade = leia.question("Qual eh a sua idade? ");
    console.log(" CÓDIGO      GENERO")
    console.log("1.\t     Mulher Cis\n2.\t     Homem Cis\n3.\t     Nao Binario\n4.\t     Mulher Trans\n5.\t     Homem Trans\n6.\t     Outros\n")
    genero = leia.question("Qual eh o seu genero? ");
    console.log(" CÓDIGO        PESSOA DESENVOLVEDORA")
    console.log("1.\t     Backend\n2.\t     Frontend\n3.\t     Mobile\n4.\t     FullStack\n")
    pessoaDev = leia.question("Qual eh o seu cargo como desenvolvedor(a)? ");
    lista.push({idade, genero, pessoaDev});
    listaTam++;
    continuar = leia.keyInYN("\nDeseja continuar a leitura dos dados de um novo colaborador? ");
    if(continuar){console.log("\n======================================================================\n")}
}

console.log(lista);

//saida
for(let i=0; i<listaTam; i++){
    //Backend 
    if(lista[i].pessoaDev == 1){
        qtdBackend++;
    }
    
    //Mulheres FrontEnd 
    if((lista[i].genero == 1 || lista[i].genero == 4) && lista[i].pessoaDev == 2){
        qtdMulheresFront++;
    }
    // Homens >40
    if((lista[i].genero == 2 || lista[i].genero == 5) && lista[i].idade > 40){
        qtdHomens40++;
    }
    // Binarios <30 FullStack
    if(lista[i].genero==3 && lista[i].idade<30 && lista[i].pessoaDev==4 ){
        qtdBin30Full++;
    }
    // Pessoas que responderam
    qtdPessoas++;

    // Média de idade
    idadeTotal=idadeTotal+parseInt(lista[i].idade);
}

console.log("\nTotal de pessoas desenvolvedoras Backend: %d", qtdBackend);
console.log("Total de Mulheres Cis e Trans desenvolvedoras Frontend: %d", qtdMulheresFront);
console.log("Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: %d", qtdHomens40);
console.log("Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: %d", qtdBin30Full);
console.log("O número total de pessoas que responderam à pesquisa: %d e o Total de idade eh %d", qtdPessoas, idadeTotal);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${idadeTotal/qtdPessoas}`);