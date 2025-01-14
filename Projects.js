// Wait for the DOM to load completely
window.onload = function() {
    // Select all project boxes
    const projectBoxes = document.querySelectorAll('.project-box');

    // Loop through each project box and animate them one by one
    projectBoxes.forEach((box, index) => {
        gsap.from(box, {
            opacity: 0,          // Start with opacity 0 (hidden)
            y: 50,               // Start with a slight offset (move down)
            duration: 1,         // Duration of the fade-in effect
            delay: index * 0.3,  // Delay each box by 0.3 seconds to make them fade in one by one
            ease: "power2.out"   // Easing function for smooth animation
        });
    });
};
