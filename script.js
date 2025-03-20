const code_inf = [
    {
            "Title": "Sortowanie bąbelkowe",
            "Description": "Lepsze .sort()",
            "Codes": [
                    `import random

                    n = int(input("Podaj wielkość zbioru: "))
                    wart_min = int(input("Podaj najmniejszą możliwą liczbę: "))
                    wart_max = int(input("Podaj największą możliwą liczbę: "))

                    A = []
                    for i in range(n):
                        A.append(random.randint(wart_min, wart_max))
                    print(A)

                    for i in range(1, n):
                        for j in range(0, n - i):
                            if A[j] > A[j + 1]:
                                A[j], A[j + 1] = A[j + 1], A[j]
                    
                    print(A)`
            ]
    },
    {
            "Title": "Szyfr kolumnowy",
            "Description": "Szyfr jakiś",
            "Codes": [
                    `import random

                    n = int(input("Podaj wielkość zbioru: "))
                    x = int(input("Podaj szukaną: "))
                    komunikat = f"Nie znaleziono {x}"

                    A = []
                    for i in range(n):
                        A.append(random.randint(-10, 10))
                    print(A)

                    for i in range(n):
                        if A[i] == x:
                            komunikat = f"Znaleziono {x} o indeksie {i}"
                            break

                    print(komunikat)`,
                    `import random

                    n = int(input("Podaj wielkość zbioru: "))
                    x = int(input("Podaj szukaną: "))
                    komunikat = f"Nie znaleziono {x}"

                    A = []
                    for i in range(n):
                        A.append(random.randint(-10, 10))
                    print(A)

                    for i in range(n):
                        if A[i] == x:
                            komunikat = f"Znaleziono {x} o indeksie {i}"
                            break

                    print(komunikat)`
            ]
    }
]

function onInfClicked(){
    changeButtonState("inf")
    let tekst = ``
    for(let i = 0; i < code_inf.length; i++){
        tekst += `
            <section class="python">
                <h1>${code_inf[i].Title}</h1>
                <article>
                    `
        for(let j = 0; j < code_inf[i].Codes.length; j++){
            tekst += `
                <p class="code">
                    ${colorPythonCode(code_inf[i].Codes[j])}
                </p><br>`
        }
        tekst +=
                    `<p>
                        ${code_inf[i].Description}
                    </p>
                </article>
            </section>
            <br><br>
            `
    }
    addHtmlToMain(tekst)
}

function onPaiClicked(){
    changeButtonState("pai")
    let tekst = `
        PAI - kodzik
    `
    addHtmlToMain(tekst)
}

function addHtmlToMain(tekst){
    document.getElementById('main_block').innerHTML = tekst 
}

function changeButtonState(type){
    let buttons = document.getElementsByClassName('button')
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].classList.contains(type)){
            buttons[i].id = "clicked"
            continue
        }
        buttons[i].id = "unclicked"
    }
}


//TODO do poprawki, użyj biblioteki
function colorPythonCode(code){
    let new_code = ""
    for(let i = 0; i < code.length; i++){
        if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] == " for "){
            new_code += '<span id="kwd"> for </span>'
            i += 4
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] == "input"){
            new_code += '<span id="fun">input</span>'
            i += 4
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] == "break"){
            new_code += '<span id="kwd">break</span>'
            i += 4
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] == "range"){
            new_code += '<span id="fun">range</span>'
            i += 4
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] + code[i+5] == "import"){
            new_code += '<span id="kwd">import</span>'
            i += 5
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] == "print"){
            new_code += '<span id="fun">print</span>'
            i += 4
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] + code[i+5] + code[i+6] == ".append"){
            new_code += '.<span id="fun">append</span>'
            i += 6
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] + code[i+4] + code[i+5] + code[i+6] + code[i+7] == ".randint"){
            new_code += '.<span id="fun">randint</span>'
            i += 7
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] == " in "){
            new_code += '<span id="kwd"> in </span>'
            i += 3
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] == "int"){
            new_code += '<span id="fun">int</span>'
            i += 2
            continue
        }
        else if(code[i] + code[i+1] + code[i+2] + code[i+3] == " if "){
            new_code += '<span id="kwd"> if </span>'
            i += 3
            continue
        }
        else if(code[i] == "\n"){
            new_code += '<br>'
            continue
        }
        else if(code[i] == "\t"){
            new_code += '<br>'
            continue
        }
        else if(code[i] == '"'){
            new_code += '<span id="str">'
            for(let j = 0; j < j + 1; j++){
                new_code += code[i+j]
                if(code[i+j] == '"'){
                    i+=j+1
                    break
                }
            }
            new_code += '</span>'
            continue
        }
        new_code += code[i]
    }
    return new_code
}

onInfClicked()
