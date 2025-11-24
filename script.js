//http-server -c1 -p80

function addHtml() {
    let tags = document.getElementsByTagName("*")
    for (let i = 0; i < tags.length; i++) {
        let elmnt = tags[i] 
        let file = elmnt.getAttribute("include-html")
        if (file) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found."
                    }
                    
                    elmnt.removeAttribute("include-html")
                    addHtml()
                }
            }
            xhttp.open("GET", file, true)
            xhttp.send()
            return
        }
    }
}

addHtml()
let interval = setInterval(() => {
    let pre = document.getElementsByTagName('pre')
    for(let i = 0; i < pre.length; i++){
        if(!pre[i].querySelector('span')){
            Prism.highlightElement(pre[i])
        }
    }
}, 500)
setTimeout(() => clearInterval(interval), 10000)