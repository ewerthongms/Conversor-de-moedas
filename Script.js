const select1 = document.getElementById("Select1")
const select2 = document.getElementById("Select2")
const convertButton = document.querySelector(".button1")

function convert() {
    const inputValue = Number(document.getElementById("valor-total").value)
    const convertedValue = document.getElementById("valor-convertido")
    const valorAConverter = document.getElementById("valor-a-converter")

    const dolar = 5.16
    const euro = 5.35 
    const bitcoin = 0.0000047
    const real = 1


    if (select1.value == "dolar") {
        valorAConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolar)
    }
        if (select1.value == "euro") {
        valorAConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro)
    }
        if (select1.value == "bitcoin") {
        valorAConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue * bitcoin)
    }

        if (select1.value == "real") {
        valorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(real * inputValue)

    if (select2.value == "bitcoin") { 
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue * bitcoin)
    }
    
    if (select2.value == "real") {
        convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * real)
    }


}
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