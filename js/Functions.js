/* === Carousel Functions ===*/

const carousel = document.querySelector('.carousel-images');
let offset = 0;

function moveRight() {
    const imageWidth = carousel.children[0].clientWidth;
    offset -= imageWidth;

    // Check if we're at the end of the images
    if (Math.abs(offset) >= carousel.scrollWidth - carousel.clientWidth) {
        offset = 0; // Reset to the first image
    }

    // Smooth transition
    carousel.style.transition = 'transform 0.5s ease'; // Add transition for smooth movement
    carousel.style.transform = `translateX(${offset}px)`;
}

function moveLeft() {
    const imageWidth = carousel.children[0].clientWidth;
    offset += imageWidth;

    // Check if we're at the beginning of the images
    if (offset > 0) {
        offset = -(carousel.scrollWidth - carousel.clientWidth); // Reset to the last image
    }

    // Smooth transition
    carousel.style.transition = 'transform 0.5s ease'; // Add transition for smooth movement
    carousel.style.transform = `translateX(${offset}px)`;
}

// Listen to left and right arrow buttons (assuming they have the ids 'left-arrow' and 'right-arrow')
document.querySelector('#right-arrow').addEventListener('click', moveRight);
document.querySelector('#left-arrow').addEventListener('click', moveLeft);



/* === Gallery Functions ===*/

// Function to open the popup
function openPopup(image) {
    const popup = document.getElementById('popup'); // Fetch the popup element
    const popupImage = document.getElementById('popup-image'); // Fetch the image in the popup
    popupImage.src = image.src; // Set the clicked image as the popup's source
    popup.style.display = 'flex'; // Show the popup by making it a flex container
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Hide the popup
}


