function drawAbout() {
	removeAbout();
}

function removeAbout() {
	
	var menu = document.getElementById("menu_pic");
	var menuText = document.getElementById("menu_text");
	
	var gallery = document.getElementById("gallery_pic");
	var galleryText = document.getElementById("gallery_text");
	
	var contact = document.getElementById("contact_pic");
	var contactText = document.getElementById("contact_text");
	
	menu.style.width = "0%";
	menu.style.transition = "0.5s";
	menuText.innerHTML = "";
	
	gallery.style.width = "0%";
	gallery.style.transition = "0.5s";
	galleryText.innerHTML = "";
	
	
	contact.style.width = "0%";
	contact.style.transition = "0.5s";
	contactText.innerHTML = "";
}

function resetAll() {
	
	var about = document.getElementById("about_pic");
	var aboutText = document.getElementById("about_text");
	
	var menu = document.getElementById("menu_pic");
	var menuText = document.getElementById("menu_text");
	
	var gallery = document.getElementById("gallery_pic");
	var galleryText = document.getElementById("gallery_text");
	
	var contact = document.getElementById("contact_pic");
	var contactText = document.getElementById("contact_text");
	
	about.style.width = "100%";
	about.style.transition = "0s";
	aboutText.innerHTML = "About Us";
	aboutText.style.fontSize = "27pt";
	aboutText.style.paddingTop = "18.5%";
	aboutText.style.transition = "0s";
	
	menu.style.width = "100%";
	menu.style.transition = "0s";
	menuText.innerHTML = "Menu";
	menuText.style.fontSize = "27pt";
	menuText.style.paddingTop = "18.5%";
	menuText.style.transition = "0s";
	
	gallery.style.width = "100%";
	gallery.style.transition = "0s";
	galleryText.innerHTML = "Gallery";
	galleryText.style.fontSize = "27pt";
	galleryText.style.paddingTop = "18.5%";
	galleryText.style.transition = "0s";

	contact.style.width = "100%";
	contact.style.transition = "0s";
	contactText.innerHTML = "Contact";
	contactText.style.fontSize = "27pt";
	contactText.style.paddingTop = "18.5%";
	contactText.style.transition = "0s";
}