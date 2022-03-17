console.clear()
/*
Exercise: Make the buttons 'Remove' and 'Toggle' work as expected. They should remove or toggle the class 'active'.
Use MDN to find out more about 'classList'.
*/


document.querySelector(".button__link").addEventListener("click", function () {
	document.querySelector(".add-block").classList.toggle("active")
})