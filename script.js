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

            setTimeout(function() {Prism.highlightAll()}, 10);
            return;
        }
    }
}

function openTab(event, tabName, type) {
    let tabcontent = document.getElementsByClassName(type + "-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    let tablinks = document.getElementsByClassName(type + "-links");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
