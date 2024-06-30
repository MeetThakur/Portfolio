var trailer = document.querySelector('#trailer');
var x,y,scrol;

var tl = gsap.timeline();


tl.to(".load",{
	delay: 4,
	opacity: 0,
});
tl.to("html",{
	overflow:"scroll",
})
tl.from("#navbar",{
	duration: 1,
	opacity: 0,
	y: -50,
	delay: 0.5,
});


tl.from("#main",{
	duration: 1,
	opacity: 0,
	y: -50,
	ease: "expo",
});


gsap.registerPlugin(ScrollTrigger) 

gsap.from('#s1', {
	scrollTrigger: {
		markers: true,
		trigger: '#s1',
		start: 'top 60%',
	},
	opacity:0,
	y:-100,
})

gsap.from('#s2', {
	scrollTrigger: {
		markers: true,
		trigger: '#s2',
		start: 'top 60%',
	},
	opacity:0,
	y:-100,
})

gsap.from('.cards', {
	scrollTrigger: {
		markers: true,
		trigger: '.cards',
		start: 'top 70%',
	},
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



