let tekst = ""
let selected_section = "inf"

function onPaiClicked(){
    selected_section = "pai"
    tekst = `<p>PAI</p>`
    addHtmlToMain()
}

function onInfClicked(){
    selected_section = "inf"
    tekst = `<p>Informatyka</p>`
    addHtmlToMain()
}

function addHtmlToMain(){
    document.getElementById('main_block').innerHTML = tekst 
}



