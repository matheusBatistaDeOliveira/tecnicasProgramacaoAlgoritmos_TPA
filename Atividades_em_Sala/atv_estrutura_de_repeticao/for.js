/* for (let i = 1; i <= 10; i = i + 1) {
    console.log("3 x " + i + " = " + (3 * i));
  }
 */
var input = require('readline-sync');
var input;
var opcao = input;



while (opcao != 0) {
    opcao = input.questionInt('Digite uma opcao: (se digitar(0) = Sair): ');
    if (opcao == 1)
        console.log("Vou fazer a rotina da opcao 1")
    else if (opcao == 2)
        console.log("Vou fazer a rotina da opcao 2")
    else {
        console.log("Opção Inválida")
    }
}
console.log("Sistema Encerrado");