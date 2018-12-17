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

