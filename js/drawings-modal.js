var drawing_modal = document.getElementById('drawing-modal');
var drawings = document.getElementsByClassName('drawings');
var images = document.getElementById("images");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < drawings.length; i++) {
  var img = drawings[i];
  img.onclick = function(evt) {
    drawing_modal.style.display = "block";
    images.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

span.onclick = function() {
  drawing_modal.style.display = "none";
}