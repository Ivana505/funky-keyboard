/*jshint esversion: 6 */

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
/*
const maryHadLamb = ["E","D","C","D","E","E","E","D","D","D","E","E","E","E","D","C","D","E","E","E","D","D","E","D","C"];
for (let i = 0; i < maryHadLamb.length; i++) {
    console.log(maryHadLamb[i]);
}*/


/*
const twinkleTwinkle = ["C","C","G","G","A","A","G","F","F","E","E","D","D","C","G","G","F","F","E","E","D","G","G","F","F","E",
"E","D","C","C","G","G","A","A","G","F","F","E","E","D","D","C"];
for (let i = 0; i < twinkleTwinkle.length; i++) {
    console.log(twinkleTwinkle[i]);
}

const jingleBells = ["E","E","E","E","E","E","E","G","C","D","E","F","F","F",
"F", "E","E","E","D","D","E","D","G","E","E","E","E","E","E","E","G","C","D","E","F","F","F","F","E","E","G","G","F","D","C"];
for (let i = 0; i < jingleBells.length; i++) {
    console.log(jingleBells[i]);
}*/



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