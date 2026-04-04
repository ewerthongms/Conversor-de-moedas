    const convertButton = document.querySelector(".button1")
    const selectDocambio = document.getElementById("Select2")


function convert() {
    const valorPrimario = document.getElementById("valor-total").value
    const ValorAconverter = document.getElementById("valor-a-converter")
    const ValorConvertido = document.getElementById("valor-convertido")

    const DolarAtual = 5.16
    const EuroAtual = 5.95

    //se o select estiver com a opção dolar selecionada, faça isso.
    if (selectDocambio.value == "dolar") {
        ValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorPrimario / DolarAtual)
    }
    //se o select estiver com a opção euro selecionada, faça isso.  
    if (selectDocambio.value == "euro") {
        ValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorPrimario / EuroAtual)
    }


    ValorAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorPrimario)


    console.log(selectDocambio.value) 
    
}
    

convertButton.addEventListener("click", convert)



