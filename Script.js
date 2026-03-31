

    const BRL = document.getElementById("moeda-local")
    const moedaConvertida = document.getElementById("moeda-ext")
    const Resultado = document.getElementById("valor-total")



function convert() {

    const realConversor = document.querySelector(".soueu")
    
    realConversor.textContent = Resultado.value


}

function trocarImagem() {
    let imagem2 = document.getElementById("img2")
   let imagem = document.getElementById('img1');
  if (imagem.src.match("img1")) {
    imagem2.src = "img2"; // Troca para a nova imagem
  } else {
    imagem.src = "img1"; // Volta para a original
  }
}
 