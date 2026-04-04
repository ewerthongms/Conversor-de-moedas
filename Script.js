    const convertButton = document.querySelector(".button1")


function convert() {
    const valorPrimario = document.getElementById("valor-total").value
    const ValorAconverter = document.getElementById("valor-a-converter")
    const ValorConvertido = document.getElementById("valor-convertido")

    const DolarAtual = 5.16
    
    const valorAserConvertido = valorPrimario / DolarAtual

    ValorAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorPrimario)
    ValorConvertido.innerHTML = "US$" + valorAserConvertido.toFixed(2);
    console.log(valorAserConvertido) 
    
}
    

convertButton.addEventListener("click", convert)