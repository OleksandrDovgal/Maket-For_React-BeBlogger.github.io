let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");
console.log(mobileMenu);
console.log(mainMenu);

mobileMenu.addEventListener("click",function() {
	mobileMenu.classList.toggle("active-menu");
	if(mobileMenu.classList.contains("active-menu")) {
		mainMenu.classList.add("active-menu")
	} else {
		mainMenu.classList.remove("active-menu");
	}
})


// $(".slider-block").slick({
// 	dots:true,
// 	centerPadding: '60px',
// 	slidesToShow:3,
// 	slidesToScroll:1,
// 	speed:1000,
// 	draggable:true,
// 	touchMouse:true,
// 	waitForAnimate:false,
// 	responsive:[
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				mobileFirst: true,
// 				slidesToShow: 2,
// 				slidesToScroll:1,
// 				arrows: false,
// 				dots: true,
// 				draggable:true,
// 			},	
// 			breakpoint: 767,
// 			settings: {
// 				mobileFirst: true,
// 				slidesToShow: 1,
// 				slidesToScroll:1,
// 				arrows: false,
// 				dots: true,
// 				draggable:true,
// 			}	
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				mobileFirst: true,
// 				slidesToShow: 1,
// 				slidesToScroll:1,
// 				arrows: false,
// 				dots: true,
// 			}
// 		}
// 	]
// });
/*
slider_z_index чи потрібен?
*/