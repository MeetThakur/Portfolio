var trailer = document.querySelector('#trailer');
var x,y,scrol;

gsap.registerPlugin(ScrollTrigger) 

gsap.from('#main', {
	duration: 1,
	opacity: 0,
	y : 250,
	ease:"expo",
});

gsap.from('#s1', {
	scrollTrigger: ".skill-d", 
	duration: 1,
	opacity: 0,
	y : 300,
	ease:"expo",
});

gsap.from('#s2', {
	scrollTrigger: ".skill-d",
	delay: 1,
	duration: 1,
	opacity: 0,
	y : 300,
	ease:"expo",
});

gsap.from('.cards', {
	scrollTrigger: ".tags",
	duration: 1,
	x: -window.innerWidth,
	ease: "expo",
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



