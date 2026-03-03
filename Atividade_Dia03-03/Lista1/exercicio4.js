/**
 * Autora: Beatriz Braga Silva
 * Data: 03/03
 * 
 * Atividade: Escreva um algoritmo que leia 3 palavras (string), que definem as características 
 * de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.
 * 
 */

//importacoes
import leia from 'readline-sync'

//variaveis
let palavra1;
let palavra2;
let palavra3;

//titulo
console.log("\n //======== ADIVINHA O TIPO DE ANIMAL =========//\n\n")

//entrada
console.log("Escreva 3 palavras que definem a caracteristica de um tipo de animal.")
console.log("Opcoes para a palavra 1: vertebrado e invertebrado");
console.log("Opcao para a palavra 2: ave, mamifero, inseto e anelídeo");
console.log("Opcao para a palavra 3: carnivoro, onivoro, herbivoro e hameatófago\n");
palavra1 = leia.question("Palavra 1: ");
palavra2 = leia.question("Palavra 2: ");
palavra3 = leia.question("Palavra 3: \n\n");

//processamento

//vertebrado
if (palavra1 == "vertebrado"){
   
    //ave
    if (palavra2 == "ave"){

        //carnivoro
        if(palavra3 == "carnivoro"){
            console.log("O animal eh: Aguia\n")  //--------------aguia
        //onivoro
        } else if(palavra3 == "onivoro"){ 
            console.log("O animal eh: Pomba\n")  //--------------pomba
        //qualquer outra opcao
        } else {
            console.log("Nao foi identificado nenhum tipo de animal com essas caracteristicas!\n")
        }
    
    //mamifero
    } else if (palavra2 == "mamifero"){ //eh mamifero

        //onivoro
        if(palavra3 == "onivoro"){
            console.log("O animal eh: Homem\n") //--------------homenm
        //herbivoro
        } else if (palavra3 == "herbivoro"){
            console.log("O animal eh: Vaca\n")  //--------------vaca
        //qualquer outra opcao
        } else {
            console.log("Nao foi identificado nenhum tipo de animal com essas caracteristicas!\n")
        }

    //Qualquer outra opcao
    } else {
        console.log("Nao foi identificado nenhum tipo de animal com essas caracteristicas!\n")
    }


//invertebrado
} else { 

    //inseto
    if (palavra2 == "inseto"){

        //hematofago
        if(palavra3 == "hematofago"){
            console.log("O animal eh: Pulga\n")  //--------------Pulga
        //herbivoro
        } else if(palavra3 == "herbivoro"){ 
            console.log("O animal eh: Lagarta\n")  //--------------Lagarta
        //qualquer outra opcao
        } else {
            console.log("Nao foi identificado nenhum tipo de animal com essas caracteristicas!\n")
        }
    
    //anelideo
    } else if (palavra2 == "anelideo"){ //eh mamifero

        //hematofago
        if(palavra3 == "hematofago"){
            console.log("O animal eh: Sanguessuga\n") //--------------Sanguessuga
        //onivoro
        } else if (palavra3 == "onivoro"){
            console.log("O animal eh: Minhoca\n")  //--------------Minhoca
        //qualquer outra opcao
        } else {
            console.log("Nao foi identificado nenhum tipo de animal com essas caracteristicas!\n")
        }

    //Qualquer outra opcao
    } else {
        console.log("Nao foi identificado nenhum tipo de animal com essas caracteristicas!\n")
    }
}