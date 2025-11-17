//http-server -c1 -p80

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

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
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    
                    elmnt.removeAttribute("include-html");
                    addHtml();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();

            Prism.highlightAll()
            return;
        }
    }
}

function openTab(html_path) {
    let main = document.getElementsByTagName('main')[0]
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                main.innerHTML = this.responseText;
            }
            if (this.status == 404) {
                main.innerHTML = "Page not found.";
            }
        }
    }
    xhttp.open("GET", html_path, true);
    xhttp.send()
    openSideMenu()
    for(let i = 1; i <= 30; i++) setTimeout(() => Prism.highlightAll(), 50 * i)
}

function openSideMenu(){
    let side_menu = document.getElementById("side_menu")

    if(side_menu.className == ""){
        side_menu.className = "active"
    }else{
        side_menu.className  = ""
    }
}

function openPanel(panel_id){
    let element = document.getElementById(panel_id)
    if(element.style.display === "none") {
        element.style.display = "block"
    }else{
        element.style.display = "none"
  }
}

openSideMenu()
openTab('inf/kl4/zaddom17lis.html')
openPanel('informatyka')
openPanel('inf-3')
openPanel('inf-4')
