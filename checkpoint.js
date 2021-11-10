/* - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário,
 exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

function microondas(prato, tempo) {
  // Identificar prato
  if (
    prato == "pipoca" ||
    prato == "macarrao" ||
    prato == "carne" ||
    prato == "feijao" ||
    prato == "brigadeiro"
    //conferir se o prato existe
  ) {
    if (prato == "pipoca") {
      prato = pipoca;
      verificarTempo(prato, tempo);
    } else if (prato == "macarrao") {
      prato = macarrao;
      verificarTempo(prato, tempo);
    } else if (prato == "brigadeiro") {
      prato = brigadeiro;
      verificarTempo(prato, tempo);
    } else if (prato == "carne") {
      prato = carne;
      verificarTempo(prato, tempo);
    } else if (prato == "feijao") {
      prato = feijao;
      verificarTempo(prato, tempo);
    }
  } else
    console.log(
      `${prato} não está disponível em nosso padrão de tempo pré-definido.`
    );
  // Verificar Tempo
  function verificarTempo(prato, tempo) {
    if (tempo < prato) {
      console.log("Tempo insuficiente\nPrato pronto, bom apetite!!!");
    } else if (tempo >= prato * 3) {
      console.log("Kabumm\nPrato pronto, bom apetite!!!");
    } else if (tempo > prato * 2) {
      console.log("A comida queimou\nPrato pronto, bom apetite!!!");
    } else if (tempo <= prato * 2) {
      console.log("Prato pronto, bom apetite!!!");
    }
  }
}

microondas("pipoca", 5);
microondas("macarrao", 10);
microondas("carne", 20);
microondas("feijao", 38);
microondas("brigadeiro", 40);
microondas("churrasco", 40);
