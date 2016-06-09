/* Opens the content for the main navbar tab */
function openSelection(event, selectionName) {
	
	var i;
	var tabcontent;
	var menutabcontent;
	var tablinks;
	var menutablinks;
	
	/* Resets to all original values when leaving the menu tab */
	closeMenu();
	
	/* Sets the default display to be appetizers when clicking menu tab*/
	if (selectionName == 'menu') {
		document.getElementById("appetizers").style.display = "block";
		document.getElementById("appetizers").className += " active";
		openMenu(event, "appetizers");
	} else {
		document.getElementById("appetizers").className.replace(" active", "");
	}
	
	/* General stops displaying everything */
	tabcontent = document.getElementsByClassName("tabcontent");
	
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	/* General closes all displays for menu content tabs */
	menutabcontent = document.getElementsByClassName("menutabcontent");
	
	for (i=0; i < menutabcontent.length; i++) {
		menutabcontent[i].style.display = "none;" //on purpose
	}
	
	tablinks = document.getElementsByClassName("tablinks");
	
	for (i = 0; i < tabcontent.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	menutablinks = document.getElementsByClassName("menutablinks");
	
	for (i = 0; i < tabcontent.length; i++) {
		menutablinks[i].className = menutablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(selectionName).style.display = "block";
	event.currentTarget.className += " active";
}

/* Opens the content for menu tab navbar */
function openMenu(evt, menuName) {
	
	var i;
	var menutabcontent;
	var menutablinks;
	
	menutabcontent = document.getElementsByClassName("menutabcontent");
	
	for (i = 0; i < menutabcontent.length; i++) {
		menutabcontent[i].style.display = "none";
	}
	
	menutablinks = document.getElementsByClassName("menutablinks");
	for (i = 0; i < menutabcontent.length; i++) {
		menutablinks[i].className = menutablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(menuName).style.display = "block";
	evt.currentTarget.className += " active";
	
	/*Allows the background of menu inner tab to change properly*/
	if(menuName != 'appetizers') {
		document.getElementById("appetizers_tab").style.backgroundColor = "#f1f1f1";
	} else {
		document.getElementById("appetizers_tab").style.backgroundColor = "#ccc";
	}
}

/* Closes all menu tab content */
function closeMenu() {
	
	document.getElementById("appetizers").style.display = "none";
	
	document.getElementById("sushi").style.display = "none";
	
	document.getElementById("rolls").style.display = "none";
	
	document.getElementById("combo").style.display = "none";
	
	document.getElementById("don").style.display = "none";
	
	document.getElementById("specials").style.display = "none";
	
	document.getElementById("party_tray").style.display = "none";
	
	document.getElementById("omakase").style.display = "none";
}