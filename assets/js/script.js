/*jshint esversion: 6 */
//initial click
//var whiteKey = document.getElementsByClassName("whiteKey");

//whiteKey.addEventListener("click" , function() { c1.style.background = "red"});



//function to play notes from array


//whiteKeys.forEach(key => {
//key.addEventListener("click", () => activateSound(key)) })

// let blackKeys = document.querySelectorAll(".black-key");
//blackKeys.forEach(key => {
//key.addEventListener("click", () => activateSound(key)) })


//initial click white keys
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

//initial click black keys
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

//function to activate note sounds 
function activateSound(key) {
	const soundAudio = document.getElementById(key.dataset.sound);
	//soundAudio.currentTime = 0;
	soundAudio.play();
}


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

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

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

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal2.style.display = "none";
	}
};