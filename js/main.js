// parallax
document.addEventListener('mousemove', parallax)

function parallax(event) {
	this
	.querySelector('.mainpage__background')
	.style
	.transform = `translateX(${event.clientX/50}px)`
}




// scroll botton
document.getElementById('scroll').addEventListener("click", scrollBtn)

function scrollBtn (event) {
	document.getElementById('section1').scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
}

// animation
const animItems = document.querySelectorAll('._anim-items');
let animOnScroll = () => {
	animItems.forEach(el => {
		let height = el.getBoundingClientRect().height
	if (el.getBoundingClientRect().top <= window.innerHeight*3/4) {
		el.classList.add('_active')
	} else if (el.getBoundingClientRect().top > window.innerHeight) {
		el.classList.remove('_active')
	}
	})
}

	animOnScroll()
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	}


	//subnav

	let subnav = document.querySelector('.subnav')
	window.addEventListener('scroll', scrollNav)
	let currScroll = 0
	function scrollNav() {
		if (window.scrollY > currScroll && window.scrollY > window.innerHeight - 145) {
			
			subnav.classList.remove('visible')
		} else {
			subnav.classList.add('visible')
		}
		currScroll = window.scrollY
		console.log(window.scrollY)
	}
