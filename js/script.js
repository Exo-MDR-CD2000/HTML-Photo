document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', function() {
        var modal = document.getElementById('photoViewerModal');
        var modalImg = document.getElementById('modalImg');
        var captionText = document.getElementById('caption');
        var img = this.querySelector('img'); // Find the img element within the clicked .photo-item
        modal.style.display = "block";
        modalImg.src = img.src; // Use the src of the img found
        captionText.innerHTML = img.alt; // Use the alt text of the img found as caption
    });
});

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    var modal = document.getElementById('photoViewerModal');
    modal.style.display = "none";
}


// contact form WIP

