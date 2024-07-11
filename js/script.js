// Photo viewer

function openPhotoViewer(imgElement) {
    const viewer = document.getElementById("photo-viewer");
    const viewerImg = document.getElementById("viewer-img");
    const viewerCaption = document.getElementById("viewer-caption");

    viewer.style.display = "block";
    viewerImg.src = imgElement.src;
    viewerCaption.innerHTML = imgElement.alt;
}

function closePhotoViewer() {
    const viewer = document.getElementById("photo-viewer");
    viewer.style.display = "none";
}



// contact form WIP

