// script.js

// Function to handle the "View My Work" button click
document.getElementById('viewWorkButton').addEventListener('click', function() {
    alert('Here are some of my amazing projects!');
});

// Function to handle the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); // Reset the form fields
});
