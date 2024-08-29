// Function to update the image preview and text
function updateImage(previewPic) {
    // Log to check that the event is triggering
    console.log("Event triggered");

    // Log the alt and source attributes of the previewPic
    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);

    // Change the text of the element with the id of 'image'
    let imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;

    // Change the background image of the element with the id of 'image'
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;

    // Check your work with console logs
    console.log("Text content:", imageDiv.textContent);
    console.log("Background image:", imageDiv.style.backgroundImage);
}

// Function to undo the changes
function undoImage() {
    let imageDiv = document.getElementById('image');

    // Update the background image back to the original
    imageDiv.style.backgroundImage = "url('')";

    // Update the text back to the original
    imageDiv.textContent = "Hover over an image below to display here.";

    // Check your work with console logs
    console.log("Reset text content:", imageDiv.textContent);
    console.log("Reset background image:", imageDiv.style.backgroundImage);
}

// Attach event listeners to the images
document.getElementById('pic1').addEventListener('mouseover', function() {
    updateImage(this);
});
document.getElementById('pic2').addEventListener('mouseover', function() {
    updateImage(this);
});
document.getElementById('pic3').addEventListener('mouseover', function() {
    updateImage(this);
});

// Attach event listeners to undo the changes when the mouse leaves the image
document.getElementById('pic1').addEventListener('mouseout', undoImage);
document.getElementById('pic2').addEventListener('mouseout', undoImage);
document.getElementById('pic3').addEventListener('mouseout', undoImage);