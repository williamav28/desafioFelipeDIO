const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resolve));
}

async function main() {
  const nomeHeroi = await perguntar("Digite o nome do herói: ");
  const expHeroi = parseInt(await perguntar("Digite a experiência do herói: "));

  let nivelHeroi = '';

  if (expHeroi <= 1000) {
    nivelHeroi = "Ferro";
  } else if (expHeroi > 1000 && expHeroi <= 2000) {
    nivelHeroi = "Bronze";
  } else if (expHeroi > 2000 && expHeroi <= 5000) {
    nivelHeroi = "Prata";
  } else if (expHeroi > 5000 && expHeroi <= 7000) {
    nivelHeroi = "Ouro";
  } else if (expHeroi > 7000 && expHeroi <= 8000) {
    nivelHeroi = "Platina";
  } else if (expHeroi > 8000 && expHeroi <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (expHeroi > 9000 && expHeroi <= 10000) {
    nivelHeroi = "Imortal";
  } else {
    nivelHeroi = "Radiante";
  }

  console.log("O Herói de nome: " + nomeHeroi + " está no nível de " + nivelHeroi);

  rl.close();
}

main();