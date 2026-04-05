    const convertButton = document.querySelector(".button1")
    const selectDocambio = document.getElementById("Select2")


function convert() {
    const valorPrimario = document.getElementById("valor-total").value
    const ValorAconverter = document.getElementById("valor-a-converter")
    const ValorConvertido = document.getElementById("valor-convertido")

    const DolarAtual = 5.16
    const EuroAtual = 5.95
    const BitcoinAtual = 0.0000029

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

    if (selectDocambio.value == "bitcoin") {
        ValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valorPrimario * BitcoinAtual)
    }


    ValorAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorPrimario)


    console.log(selectDocambio.value) 
    
}

function mudandoBandeiras() {
    const nomeResultado = document.getElementById("currency-name")
    const curranceyImg = document.getElementById("img3")



    if (selectDocambio.value == "dolar") {
        nomeResultado.innerHTML = "Dólar Americano"
        curranceyImg.src = "./assets/img/Eua.png"
    }
    
    if (selectDocambio.value == "euro") {
        nomeResultado.innerHTML = "Euro"
        curranceyImg.src = "./assets/img/Euro.png"
        curranceyImg.style.width = "45px"
        curranceyImg.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
    }

    if (selectDocambio.value == "bitcoin") {
        nomeResultado.innerHTML = "Bitcoin"
        curranceyImg.src = "./assets/img/Bitcoin.png"
        curranceyImg.style.width = "45px"
        curranceyImg.style.filter = "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
    }





    convert()


}


selectDocambio.addEventListener("change", mudandoBandeiras)
convertButton.addEventListener("click", convert)


const cores = ["#772FD3;", "#3c0286;", "#6c08af", "rgb(90, 1, 255)"]; // Suas cores
    let indice = 0;

    setInterval(() => {
    document.body.style.backgroundColor = cores[indice];
    indice = (indice + 1) % cores.length; // Volta ao início após a última cor
    }, 400); // Muda a cada 2000ms (2 segundos)
