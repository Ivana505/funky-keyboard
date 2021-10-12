//initial click
//var whiteKey = document.getElementsByClassName("whiteKey");

//whiteKey.addEventListener("click" , function() { c1.style.background = "red"});

//function to activate note sounds 

//function to play notes from array


// Get the modal
var modal = document.getElementById("howToPlayModal");

// Get the button that opens the modal
var btn = document.getElementById("how-to-play");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("how-to")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
/*
// Get the modal
var modal = document.getElementById("choose");

// Get the button that opens the modal
var btn = document.getElementById("choose-your-song");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("your-song")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */