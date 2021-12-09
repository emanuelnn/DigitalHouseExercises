/*  
*Passo 1 (1,5 pontos)*
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. 
-----------------------------COMCLUÍDO
*Passo 2 (1,5 pontos)*
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
-----------------------------COMCLUÍDO
*Passo 3 (1,5 pontos)*
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
-----------------------------COMCLUÍDO

*Passo 4 (1,5 pontos)*
Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
-----------------------------COMCLUÍDO
*Passo 5 (2 pontos)*
Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
-----------------------------COMCLUÍDO
*Passo 6 (2 pontos)*
Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
-----------------------------COMCLUÍDO

*/
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
  this.faltas = function () {
    this.qtdFaltas+= 1;
  },
    this.calcMedia = function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }
}

const aluno1 = new Aluno("Lucas", 3, [10, 8, 6, 7], "");
const aluno2 = new Aluno("Roberta", 8, [9, 2, 3, 6], "");
const aluno3 = new Aluno("Carla", 14, [10, 2, 1, 1], "");
const aluno4 = new Aluno("Rodrigo", 2, [6, 5, 5, 5], "");
const aluno5 = new Aluno("Irineu", 18, [8, 8, 4, 7], "");
const aluno6 = new Aluno("Suellen", 23, [9, 3, 4, 5], "");
const aluno7 = new Aluno("Maria", 3, [8, 8, 8, 5], "");
const aluno8 = new Aluno("Matheus", 8, [10, 5, 6, 9], "");
const aluno9 = new Aluno("Claudiomar", 25, [10, 7, 7, 7], "");
const aluno10 = new Aluno("Sara", 00, [10, 8, 6, 7], "");

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

// calculo de média e aprovação / reprovação de alunos.
let curso = {
  nomeCurso: "Curso Js",
  notaMin: 6,
  maxFaltas: 20,
  listaEstudantes: [],
  novoAluno: function (estudante) {
    this.listaEstudantes.push(estudante);

  },
  listaAprovados: function () {
    let media = 0;
    for (let i = 0; i < listaAlunos.length; i++) {
      const reducer = (valor, newValue) => valor + newValue;
      media = listaAlunos[i].notas.reduce(reducer) / 4;
      if (media < 6 || media < 0) {
        console.log(
          listaAlunos[i].nome + " = " + media + " Avaliação: Reprovado"
        );
      } else
        console.log(
          listaAlunos[i].nome + " = " + media + " Avaliação: Aprovado"
        );
    }
    return;
  },
  avaliacao: function (aluno) {
    let media = aluno.calcMedia();
    let resultado = false;
    if (
      (aluno.qtdFaltas < this.maxFaltas && media >= this.notaMin) ||
      (aluno.qtdFaltas === this.maxFaltas && media > this.notaMin * 1.1)
    ) {
      resultado = true;
    }

    return resultado;
  },

}

curso.listaEstudantes.push(aluno1);
curso.listaEstudantes.push(aluno2);
curso.listaEstudantes.push(aluno3);
curso.listaEstudantes.push(aluno4);
curso.listaEstudantes.push(aluno5);

console.log(curso.listaAprovados());
console.log(curso.avaliacao(aluno1));
console.log(aluno1.calcMedia());
console.log(curso.avaliacao(aluno2));
console.log(aluno2.calcMedia());


console.log("Emanuel Nogueira - CTD")