const Oferta = prompt("Insira um codigo (HTML, CSS, GIT, JavaSCRIPT ,C##):");
let DescProduto = 0;

switch (Oferta) {
  case "HTML":
    DescProduto = 0.10;
    break;
  case "CSS":
    DescProduto = 0.20;
    break;
  case "GIT":
    DescProduto = 0.30;
    break;
  case "JavaSCRIPT":
    DescProduto = 0.40;
    break;
  case "C##":
    DescProduto = 0.50;
    break;
  default:
    console.log("Cupom não encontrado!");
    break;
}

if (DescProduto > 0) {
  const valorOriginal = 1500;
  const valorComDesconto = valorOriginal * (1 - DescProduto);
  console.log((DescProduto * 100) + "% de desconto aplicado.");
  console.log("Valor original: R$" + valorOriginal);
  console.log("Valor com desconto: R$" + valorComDesconto);
}

const numeroSorteado = Math.floor(Math.random() * 11);
let tentativas = 0;
let acertou = false;

while (!acertou) {
  const numero = prompt("Adivinhe um número de 0 a 10:");
  const NumeroAleatorio = parseInt(numero);

  if (NumeroAleatorio === numeroSorteado) {
    acertou = true;
    console.log("Finalmente!");
  } else {
    tentativas++;
    console.log("Tente outro número");
  }
}

console.log("Você teve " + tentativas + " tentativas até acertar.");