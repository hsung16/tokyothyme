function drawMenu() {
	removeMenu();
}

function removeMenu() {
	
	var about = document.getElementById("about_pic");
	var aboutText = document.getElementById("about_text");
	
	var gallery = document.getElementById("gallery_pic");
	var galleryText = document.getElementById("gallery_text");
	
	var contact = document.getElementById("contact_pic");
	var contactText = document.getElementById("contact_text");
	
	about.style.width = "0%";
	about.style.transition = "0.5s";
	aboutText.innerHTML = "";
	
	gallery.style.width = "0%";
	gallery.style.transition = "0.5s";
	galleryText.innerHTML = "";
	
	
	contact.style.width = "0%";
	contact.style.transition = "0.5s";
	contactText.innerHTML = "";
}