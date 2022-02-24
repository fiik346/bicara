var element = document.querySelector("#navContent");
var fixedMenu = document.getElementById("fixed-nav")

var clone = element.cloneNode(true)
clone.id = "nav-2"
fixedMenu.appendChild(clone)
