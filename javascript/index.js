function loadContent(contentName) {
	document.getElementById("about_index").style.display = "none";
	document.getElementById("about_text").style.display = "none";
	
	document.getElementById("menu_index").style.display = "none";
	document.getElementById("menu_text").style.display = "none";
	
	document.getElementById("gallery_index").style.display = "none";
	document.getElementById("gallery_text").style.display = "none";
	
	document.getElementById("contact_index").style.display = "none";
	document.getElementById("contact_text").style.display = "none";

	document.getElementById("home_container").style.display = "none";
	
	document.getElementById("body_container").style.display = "block";
	
	if (contentName == "about") {
		openSelection(event, 'about');
		document.getElementById("about_tab").style.backgroundColor = "#ccc";
	}
	
	if (contentName == "menu") {
		openSelection(event, 'menu');
	}
	
	if (contentName == "gallery") {
		openSelection(event, 'gallery');
	}
	
	if (contentName == "contact") {
		openSelection(event, 'contact');
	}
}