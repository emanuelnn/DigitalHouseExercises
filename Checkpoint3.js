//Passo 1 (1,5 pontos)

// Crie um objeto aluno que tenha como atributos: nome (string),
// Quantidade de faltas (number)
// Notas (array de números)
// Crie um construtor para ele e importe-o como o módulo aluno.

let alunos = {
  nome: "",
  qtdFaltas: 0,
  notas: [],
};

// Criação da função construtora

function Aluno(nome, qtdFaltas, notas) {
  this.nome = nome;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;
}

// acho que aqui tem que exportar, para importar em outro arquiv

const aluno1 = new Aluno("Lucas", 3, [10, 8, 6, 7, 5, 5], "");
const aluno2 = new Aluno("Roberta", 8, [9, 2, 3, 6, 10, 10], "");
const aluno3 = new Aluno("Carla", 14, [10, 2, 1, 1, 1, 5], "");
const aluno4 = new Aluno("Rodrigo", 2, [6, 5, 5, 5, 7, 9], "");
const aluno5 = new Aluno("Irineu", 18, [8, 8, 4, 7, 5, 5], "");
const aluno6 = new Aluno("Suellen", 23, [9, 3, 4, 5, 10, 10], "");
const aluno7 = new Aluno("Maria", 13, [8, 8, 8, 5, 7, 9], "");
const aluno8 = new Aluno("Matheus", 5, [10, 5, 6, 9, 9, 2], "");
const aluno9 = new Aluno("Claudiomar", 25, [10, 7, 7, 7, 5, 6], "");
const aluno10 = new Aluno("Sara", 00, [10, 8, 6, 7, 10, 5], "");

let listaAlunos = [
  aluno1,
  aluno2,
  aluno3,
  aluno4,
  aluno5,
  aluno6,
  aluno7,
  aluno8,
  aluno9,
  aluno10,
];

function somaMedia (){
    let media = 0
    for (let i = 0; i < listaAlunos.length; i++) {
        for (y = 0; y < listaAlunos[i].notas.length;y++){
            media = listaAlunos[y].notas + media
            media / listaAlunos[y].notas.length
        }
        return media
    }
}

console.log(somaMedia())
