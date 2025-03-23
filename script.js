const code_inf = [
    {
        "Title": "Sortowanie bąbelkowe",
        "Description": "Lepsze .sort()",
        "Codes": [
            {
                "Language": "python",
                "Code": `
                    import random

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
            }
        ]
    },
    {
        "Title": "Szyfr kolumnowy",
        "Description": "Szyfr jakiś",
        "Codes": [
            {
                "Language": "python",
                "Code": `
                    import random

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
            },
            {
                "Language": "python",
                "Code": `
                    import random
                
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
            }
                
        ]
    }
]

function onInfClicked(){
    changeButtonState("inf")
    let tekst = ``
    for(let i = 0; i < code_inf.length; i++){
        tekst += `
            <section>
                <h1>${code_inf[i].Title}</h1>`
        for(let j = 0; j < code_inf[i].Codes.length; j++){
            tekst += `
                <pre class="lang-${code_inf[i].Codes[j].Language}"><code>
                    ${code_inf[i].Codes[j].Code}
                </code></pre><br>`
        }
        tekst +=
                `<p>
                    ${code_inf[i].Description}
                </p>
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

onInfClicked()
console.log(document.getElementById('main_block'))
