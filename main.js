// Write JavaScript here.
console.log("main.js loaded successfully!");

/* Some sample JavaScript: this just listens 
for any "click" on the hero element and then
toggles the "active" class which we use to
shift colors when they click */
let hero = document.querySelector(".hero");
hero.addEventListener("click", () => {
  console.log("They clicked the hero!");
  hero.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollableImages = document.getElementById('scrollable-images');

    // Function to load an image
    function loadImage() {
        const img = document.createElement('img');
        img.src = `path-to-your-image.jpg`;  // Replace with your image path
        img.alt = 'Dynamic Image';
        scrollableImages.appendChild(img);

        // Show image with a fade-in effect
        setTimeout(() => {
            img.classList.add('visible');
        }, 100);
    }

    // Check if the user has scrolled to the bottom
window.addEventListener('scroll', function() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // If user has scrolled to the bottom of the page, load a new image
    if (scrollPosition >= pageHeight) {
        loadImage();
    }
});

// Function to load the image
function loadImage() {
    const newImage = document.createElement('img');
    newImage.src = 'path_to_your_image.jpg'; // Replace with actual image path
    newImage.alt = 'New Image';
    
    // Add the image to the body or another container
    document.body.appendChild(newImage);

    // Optionally, scroll to the top to see the new image immediately
    window.scrollTo(0, 0);
}


    // Initially load one image when the page loads
    loadImage();
});


