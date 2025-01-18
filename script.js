// script.js

// Function to toggle the navigation menu visibility on mobile devices
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled out
    if (!name || !email || !message) {
        alert('Please fill in all fields!');
        event.preventDefault(); // Prevent form submission
    }
});
