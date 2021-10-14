const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
counter.innerText = '0';

const updateCounter = ()=>{
const target = +counter.getAttribute('data-target');
const c = +counter.innerText;

const increment = target / 150;

if (c < target){
counter.innerText = `${Math.ceil(c + increment)}`; 
setTimeout(updateCounter, 1);
}
else{
counter.innerText = target;
}

};
updateCounter();
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home, .home_text,
	       .about, about_text,
	       .pof, .pof_statment,
	       .services_header, .service_content,
	       .facilities_content, .gallery,
	       .apt,
	       .counter, .contact,
	       .footer`, {
    interval: 200
});

//BackToTop onScroll//
var toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function() {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	}
	else {
		toTop.classList.remove("active");
	}
});
