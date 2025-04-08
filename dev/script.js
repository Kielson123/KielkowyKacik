function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    for (let j = 0; j < content.children.length; j++) {
        let child = content.children[j]
        if (child.style.maxHeight){
            child.style.maxHeight = null;
            child.style.display = "none"
        
        } else {
            child.style.display = "block"
            child.style.maxHeight = child.scrollHeight + "px";
        }
    }
  });
}