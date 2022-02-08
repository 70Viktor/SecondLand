// parallax
function parallax(event) {
	this
	.querySelector('.mainpage__background')
	.style
	.transform = `translateX(${event.clientX/50}px)`
}

document.addEventListener('mousemove', parallax)
// scroll botton
let anchor = document.getElementById('scroll')

anchor.addEventListener("click",function (event) {
	document.getElementById('section1').scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
})

// animation
const animItems = document.querySelectorAll('._anim-items');
let animOnScroll = () => {
	animItems.forEach(el => {
		let height = el.getBoundingClientRect().height
	if (el.getBoundingClientRect().top <= window.innerHeight*3/4
	&&(el.getBoundingClientRect().bottom > window.innerHeight/4)) {
		el.classList.add('_active')
	} else {
		el.classList.remove('_active')
	}
	})
}

	animOnScroll()
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	}
