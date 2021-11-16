console.log("Utilizando FOR")

for (let i = 0; i <= 50; i++) {
    console.log(i);
}

// for (let i = 0 => Aqui está sendo declarado a variável i e seu valor.
//  for (let i = 0; i <= 50;  => Agora está sendo definida acondição, ou seja, enquanto i for menor ou = a 50 o código será repetido.
//  for (let i = 0; i <= 50; i++ => e por final está sendo dito a ação que se deverá adotar, i será acrescentado de 1 dígito enquanto form < ou = a 50.

let alunos = ["Bruno", "Carlos", "Anna", "Lucas","Paola","Rodrigo","Alice","Roberto",""]
console.log(alunos)
let x = 0
for (let a = "Lista de Alunos"; a != "";x++){
    a = alunos[x]
    if (a == "Rodrigo") {
        console.log(a)
        break
    }
}



console.log("Repetir como um papagaio")
//Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for (i = 0; i<=5; i++){
    console.log("olá mundo!")
}


console.log("Contando números ímpares")
//Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. 
//Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.


for (i = 0; i <= 10; i++) {
    if (i == 1 || i== 3 || i == 5 || i == 7 || i == 9){console.log(i)}
}


console.log("Criando a tabuada")
//Crie uma tabuada utilizando o for.
//Dica: Para essa tarefa você irá precisar utilizar dois loops (for).


for (let a = 0; a <= 10; a++){
for (let b = 0; b <= 10; b++){console.log(`${a}*${b}=${a*b}`) }
}

