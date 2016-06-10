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
		document.getElementById(contentName + "_tab").style.display = "block";
		document.getElementById(contentName + "_tab").className += " active";
	}
	
	if (contentName == "menu") {
		openSelection(event, 'menu');
		document.getElementById(contentName + "_tab").style.display = "block";
		document.getElementById(contentName + "_tab").className += " active";
	}
	
	if (contentName == "gallery") {
		openSelection(event, 'gallery');
		document.getElementById(contentName + "_tab").style.display = "block";
		document.getElementById(contentName + "_tab").className += " active";
	}
	
	if (contentName == "contact") {
		openSelection(event, 'contact');
		document.getElementById(contentName + "_tab").style.display = "block";
		document.getElementById(contentName + "_tab").className += " active";
	}
}