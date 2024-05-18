var trailer = document.querySelector('#trailer');
var x,y,scroll;

function mouseTrailer() {
	window.addEventListener('mousemove', function(event) {;
	scroll = window.scrollY;
	x = event.clientX;
	y = event.clientY;
	trailer.style.transform = `translate(${event.clientX - 15}px, ${event.clientY -15 + scroll}px)`;
})
}

function scrollTrailer() {
	window.addEventListener('scroll', function(event) {
		scroll = window.scrollY;
		trailer.style.transform = `translate(${x - 15}px, ${y -15 + scroll}px)`;
	})
}

scrollTrailer()
mouseTrailer();

