const select1 = document.getElementById("Select1")
const select2 = document.getElementById("Select2")
const convertButton = document.querySelector(".button1")

function convert() {
    const inputValue = Number(document.getElementById("valor-total").value)
    const convertedValue = document.getElementById("valor-convertido")
    const valorAConverter = document.getElementById("valor-a-converter")

    const rates = {
        real: 1,
        dolar: 5.10,
        euro: 5.96,
        bitcoin: 300000
    }

    const moedaOrigem = select1.value
    const moedaDestino = select2.value

    //  converte origem → real
    const valorEmReal = inputValue * rates[moedaOrigem]

    //  converte real → destino
    const valorFinal = valorEmReal / rates[moedaDestino]

    //  MOSTRA valor original corretamente
    valorAConverter.innerHTML = formatCurrency(inputValue, moedaOrigem)

    //  MOSTRA valor convertido corretamente
    convertedValue.innerHTML = formatCurrency(valorFinal, moedaDestino)

    if (select1.value === select2.value) {
        alert("Selecione moedas diferentes para converter")
        return
    }


}

function formatCurrency(value, currency) {
    if (currency === "bitcoin") {
        return value.toFixed(8) + " BTC"
    }

    const formats = {
        real: { locale: "pt-BR", currency: "BRL" },
        dolar: { locale: "en-US", currency: "USD" },
        euro: { locale: "de-DE", currency: "EUR" }
    }

    return new Intl.NumberFormat(formats[currency].locale, {
        style: "currency",
        currency: formats[currency].currency
    }).format(value)

}

function mudandoBandeiras2() {
    const NomeBand = document.getElementById("currency-name2")
    const bandeiras = document.getElementById("img3")

    if (select2.value == "dolar") {
        NomeBand.innerHTML = "Dólar americano"
        bandeiras.src = "./assets/img/Eua.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"

    }

    if (select2.value == "euro") {
        NomeBand.innerHTML = "Euro"
        bandeiras.src = "./assets/img/euro.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"

    }

    if (select2.value == "bitcoin") {
        NomeBand.innerHTML = "Bitcoin"
        bandeiras.src = "./assets/img/bitcoin.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"

    }

    if (select2.value == "real") {
        NomeBand.innerHTML = "Real Brasileiro"
        bandeiras.src = "./assets/img/Brasil.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"

    }

    convert()
}


function mudandoBandeiras1() {
    const nomeBand = document.getElementById("currency-name")
    const bandeiras = document.getElementById("img1")


    if (select1.value == "real") {
        nomeBand.innerHTML = "Real Brasileiro"
        bandeiras.src = "./assets/img/Brasil.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
    }

    if (select1.value == "dolar") {
        nomeBand.innerHTML = "Dólar americano"
        bandeiras.src = "./assets/img/Eua.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
    }

    if (select1.value == "euro") {
        nomeBand.innerHTML = "Euro"
        bandeiras.src = "./assets/img/euro.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
    }

    if (select1.value == "bitcoin") {
        nomeBand.innerHTML = "Bitcoin"
        bandeiras.src = "./assets/img/bitcoin.png"
        bandeiras.style.width = "45px"
        bandeiras.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
    }



    convert()


}
convertButton.addEventListener("click", convert)
select2.addEventListener("change", mudandoBandeiras2)
select1.addEventListener("change", mudandoBandeiras1)