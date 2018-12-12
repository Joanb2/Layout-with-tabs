function open(ev, sectionName) {
	var i, link_content, link;

	link_content = document.getElementsByClassName('link-content');
	for (i = 0; i < link_content.length; i++) {
		link_content[i].style.display = 'none';
	}
}