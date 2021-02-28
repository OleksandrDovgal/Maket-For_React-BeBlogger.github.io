let mobileMenu = document.querySelector(".nav-mobile-menu");
let maimMenu = document.querySelector(".navigation");
console.log(mobileMenu);
console.log(maimMenu);

mobileMenu.addEventListener("click", function() {
	mobileMenu.classList.toggle('active-menu')
})