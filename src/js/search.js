var button = document.querySelector('.toggler.search')
var close = document.querySelector('.toggler.search-x')
var tujuan = document.querySelector('#searchFunction')

function showClose() {
	if(tujuan.classList.contains('close')) {
		tujuan.classList.remove('close')
		tujuan.classList.add('show')
	} else {
		tujuan.classList.remove('show')
		tujuan.classList.add('close')
	}
}

button.addEventListener('click', showClose)
close.addEventListener('click',showClose)
