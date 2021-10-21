/* jshint esversion: 8 */

// Initial click for white keys
let whiteKeys = document.querySelectorAll(".white-key");

whiteKeys.forEach((key) => {
	key.addEventListener("click", function() {
		this.style.background = "red";
		activateSound(this);
		setTimeout((key) => {
			this.style.background = "white";
		}, 500);
	});
});

// Initial click for black keys
let blackKeys = document.querySelectorAll(".black-key");
blackKeys.forEach((key) => {
	key.addEventListener("click", function() {
		this.style.background = "red";
		activateSound(this);
		setTimeout((key) => {
			this.style.background = "black";
		}, 500);
	});
});

// Function to activate note sounds 
function activateSound(key) {
	const soundAudio = document.getElementById(key.dataset.sound);
	soundAudio.currentTime = 0;
	stopSound();
	soundAudio.play();
}

// Function to stop note sounds
function stopSound() {
	const audioFiles = document.getElementsByTagName("audio");
	const audios = Array.prototype.slice.call(audioFiles);
	audios.forEach((audio) => {
		audio.pause();
	});
}

// Modal code credit to https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById("howToPlayModal");

// Get the button that opens the modal
var btn = document.getElementById("how-to-play");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("how-to")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
};

// Close the modal
span.onclick = function() {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

// Modal code credit to https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal 2
var modal2 = document.getElementById("choose");

// Get the button that opens the modal
var btn = document.getElementById("pick");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("your-song")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal2.style.display = "block";
};

// Close the modal
span.onclick = function() {
	modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal2.style.display = "none";
	}
};