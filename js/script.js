function openSection(event, sectionName) {
	var i, link_content, link;

	link_content = document.getElementsByClassName('link-content');
	for (i = 0; i < link_content.length; i++) {
		link_content[i].style.display = 'none';
	}

	link = document.getElementsByClassName('link');
	for (i = 0; i < link.length; i++) {
		link[i].className = link[i].className.replace(' active', '');
	}

	document.getElementById(sectionName).style.display = 'block';
	event.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();

//Scroll Down

function scrollDown(element) {
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop
	});
}

document.getElementById('scrollDown').addEventListener('click', function() {
	scrollDown(document.getElementById('nav'));
});

//Slides

var current = 0;
var slides = document.getElementsByClassName('img_slides');

setInterval(function() {
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.opacity = 0;
	}
	current = (current != slides.length - 1) ? current + 1 : 0;
	slides[current].style.opacity = 1;
}, 3000);

