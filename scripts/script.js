 
/*****************/
/* DROPDOWN MENU */
/*****************/

var dropdownMenu = document.querySelector ("nav");

function menuOpenDicht(){
	document.documentElement.classList.remove("loading");
	dropdownMenu.classList.toggle("transitie_navigatie");
}

dropdownMenu.addEventListener("click", menuOpenDicht);


window.addEventListener("scroll", function(){
	var header = document.querySelector("header > div:first-of-type");
	header.classList.toggle("sticky", window.scrollY > 600)
})


