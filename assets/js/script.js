/* jshint esversion: 8 */

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
	soundAudio.currentTime = 0;
	stopSound();
	soundAudio.play();
}

function stopSound() {
  const audioFiles = document.getElementsByTagName("audio");
  const audios = Array.prototype.slice.call(audioFiles);
   audios.forEach((audio) => {
	  audio.pause();
  });
}

let playNote = (key) => {
	const noteSound = document.getElementById(key.dataset.note);
	noteSound.currentTime = 0;
	noteSound.play();
	key.classList.add('active');
	noteSound.addEventListener('ended', () => {
	  key.classList.remove('active');
	});
  };


/*let songOne = ["e1","e1","c1","d1","e1","e1","e1","d1","d1","d1","e1","e1","e1","e1","d1","c1","d1","e1","e1","e1","d1","d1","e1","d1","c1"]
for (let i = 0; i < songOne.length; i++) {
    console.log(songOne[i]);
}*/
/*
function chosenSong {

}*/

/*function songOne1 () {
	const songSound = document.getElementById("song1");
	soundAudio.currentTime = 0;
	songOne();
	soundAudio.play();
}*/


/*
let pressed = '';
document.querySelectorAll('id').forEach(item => {
  item.addEventListener('click', event => {
    pressed += item.id;
    if( pressed == '"e1","e1"' ) {
      alert("Success");
    } else {
      console.log(pressed);
    }
  })
})*/

/*function playMaryHadLamb() {
    let audio = document.getElementsByTagName('audio');
    if (audio.assets/audio/mary-had-a-little-lamb.mp3 ("PLAY")) {
        audio.src = "MARY_HAD_LAMB";
		console.log(playMaryHadLamb);
    } 
        
}*/

/*
document.addEventListener('click', e => {
	const key = e.key
	const maryHadLambIndex = MARY_HAD_LAMB.indexOf(key) 

	if (maryHadLambIndex > -1) playNote(maryHadLamb[MARY_HAD_LAMB])
})*/

//const maryHadLamb = ["e1","e1","c1","d1","e1","e1","e1","d1","d1","d1","e1","e1","e1","e1","d1","c1","d1","e1","e1","e1","d1","d1","e1","d1","c1"];
//for (let i = 0; i < maryHadLamb.length; i++) {

  //console.log(maryHadLamb[i]);
//}

/*
const twinkleTwinkle = ["c1","c1","g1","g1","a1","a1","g1","f1","f1","e1","e1","d1","d1","c1","g1","g1","f1","f1","e1","e1","d1","g1","g1","f1","f1","e1",
"e1","d1","c1","c1","g1","g1","a1","a1","g1","f1","f1","e1","e1","d1","d1","c1"];
for (let i = 0; i < twinkleTwinkle.length; i++) {
    console.log(twinkleTwinkle[i]);
}

const jingleBells = ["e1","e1","e1","e1","e1","e1","e12,"g1","c1","d1","e1","f1","f1","f1",
"f1","e1","e1","e1","d1","d1","e1","d1","g1","e1","e1","e1","e1","e1","e1","e1","g1","c1","d1","e1","f1","f1","f1","f1","e1","e1","g1","g1","f1","d1","c1"];
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