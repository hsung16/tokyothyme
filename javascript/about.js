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
	
	menu.style.display = "none";
	menuText.style.display = "none";
	
	gallery.style.display = "none";
	galleryText.style.display = "none";
	
	
	contact.style.display = "none";
	contactText.style.display = "none";
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
	
	
	menu.style.display = "";
	menuText.style.display = "";
	
	gallery.style.display = "";
	galleryText.style.display = "";
	
	contact.style.display = "";
	contactText.style.display = "";
}