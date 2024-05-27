var trailer = document.querySelector('#trailer');
var x,y,scrol;

gsap.registerPlugin(ScrollTrigger) 

gsap.from('#main', {
	duration: 3,
	opacity: 0,
	y : 50,
	ease:"expo",
});

gsap.from('#skills', {
	scrollTrigger: ".skill-d",
	duration: 3,
	opacity: 0,
	y : 50,
	ease:"expo",
});


function mouseTrailer() {
	window.addEventListener('mousemove', function(event) {;
	scrol = window.scrollY;
	x = event.clientX;
	y = event.clientY;
	trailer.style.transform = `translate(${event.clientX - 10}px, ${event.clientY -10 + scrol}px)`;
})
}

function scrollTrailer() {
	window.addEventListener('scroll', function(event) {
		scrol = window.scrollY;
		trailer.style.transform = `translate(${x - 15}px, ${y -15 + scrol}px)`;
	})
}

scrollTrailer()
mouseTrailer();



