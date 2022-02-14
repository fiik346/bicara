// get object button and nav
var button = document.querySelector('.navButton');
var tujuan = document.getElementById('navContent');

function addClass(item, isClass){
	item.classList.add(isClass)
}
function removeClass(item, isClass){
	item.classList.remove(isClass)
}

function showCloseNav(){
	
	// get button attribute
	var atribut = button.getAttribute('aria-expanded')

	//new variable for button atribute value
	var atributValue = "false"
	
	//new variabel for nav class and opposite var
	var classTujuan = "close"
	var removeTujuan = "expand"

	if(atribut == "true"){
		atributValue = "false";
		classTujuan = "close"
		removeTujuan = "expand"
	}else{
		atributValue = "true";
		classTujuan = "expand";
		removeTujuan = "close"
	}

	button.setAttribute('aria-expanded', atributValue);
	addClass(tujuan, classTujuan);
	removeClass(tujuan, removeTujuan);
	addClass(button, classTujuan);
	removeClass(button, removeTujuan)
}

button.addEventListener('click', showCloseNav)
