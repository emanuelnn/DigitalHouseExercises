let volta = 0;
while (volta <= 5) {
  console.log("volta número:" + volta);
  volta++;
}

// DO WHILE THE
do {
  console.log("Volta número:" + volta);
  volta++;
} while (volta < 5);

console.log("\n1. Programa em Javascript que mostra os números ímpares")
//Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100. */
let numero = 0;
do {
  if (numero % 2 === 1) {
    console.log(numero + " é Impar");
  }
  numero++;
} while (numero <= 100);

console.log("\n2. Programa em Javascript que mostra os números pares")
//Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.*/
numero = 0;
do {
  if (numero % 2 === 0) {
    console.log(numero + " é Par");
  }
  numero++;
} while (numero <= 100);

console.log("\n*3. Programa em Javascript que mostra os números pares e ímpares")
//Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
function ParOuImpar(limite) {
  numero = 0;
  do {
    if (numero % 2 === 0) {
      console.log(numero + " é Par");
    }
    if (numero % 2 === 1) {
      console.log(numero + " é Impar");
    }
    numero++;
  } while (numero <= limite);
}
ParOuImpar(50)

console.log("\n4. Programa em Javascript que calcula a média das notas de uma turma")
//Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
//Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
function MediaDeNotas(alunos,notas){

}
