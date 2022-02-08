function parallax(event) {
	this
	.querySelector('.mainpage__background')
	.style
	.transform = `translateX(${event.clientX/50}px)`
	console.log(event.clientX)
}



document.addEventListener('mousemove', parallax)

let anchor = document.getElementById('scroll')
anchor.addEventListener("click",function (event) {
	document.getElementById('section1').scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
})