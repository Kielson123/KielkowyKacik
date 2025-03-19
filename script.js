let tekst = ""

function onInfClicked(){
    tekst = `
        <section class="python">
            <h1>Sortowanie bąbelkowe</h1>
            <article>
                <p class="code">
                    <span id="kwd">import</span> random<br><br>
                    n = <span id="fun">int</span>(<span id="fun">input</span>(<span id="str">"Podaj wielkość zbioru: "</span>))<br>
                    wart_min = <span id="fun">int</span>(<span id="fun">input</span>(<span id="str">"Podaj najmniejszą możliwą liczbę: "</span>))<br>
                    wart_max = <span id="fun">int</span>(<span id="fun">input</span>(<span id="str">"Podaj największą możliwą liczbę: "</span>))<br>
                    A = []<br>
                    <span id="kwd">for</span> i <span id="kwd">in</span> <span id="fun">range</span>(n):<br>&emsp;&emsp;
                        A.append(random.<span id="fun">randint</span>(wart_min, wart_max))<br>
                    <span id="fun">print</span>(A)<br>
                    <span id="kwd">for</span> i <span id="kwd">in</span> <span id="fun">range</span>(1, n):<br>&emsp;&emsp;
                    <span id="kwd">for</span> j <span id="kwd">in</span> <span id="fun">range</span>(0, n - i):<br>&emsp;&emsp;&emsp;&emsp;
                    <span id="kwd">if</span> A[j] > A[j + 1]:<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                A[j], A[j + 1] = A[j + 1], A[j]<br>
                    <span id="fun">print</span>(A)
                </p>
            </article>
        </section>
    `
    addHtmlToMain()
}

function onPaiClicked(){
    tekst = `
        b
    `
    addHtmlToMain()
}

function addHtmlToMain(){
    document.getElementById('main_block').innerHTML = tekst 
}

onInfClicked()



