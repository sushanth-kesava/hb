const panels = document.querySelectorAll('.panel');
let activeIndex = 0;

// Function to remove the active class from all panels
function removeActiveClasses() {
  panels.forEach(panel => panel.classList.remove('active'));
}

// Function to activate the next panel
function activateNextPanel() {
  removeActiveClasses();
  activeIndex = (activeIndex + 1) % panels.length; // Loop back to the start
  panels[activeIndex].classList.add('active');
}

// Add event listeners for manual interaction
panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    activeIndex = index; // Update active index for slideshow
  });
});

// Slideshow: automatically slides fpr every 7 seconds
setInterval(activateNextPanel, 6000);