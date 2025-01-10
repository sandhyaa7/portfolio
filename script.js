// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Example: Add a click event listener to a button with id 'myButton'
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }

    // Example: Change the text content of an element with id 'myText'
    const myText = document.getElementById('myText');
    if (myText) {
        myText.textContent = 'Hello, World!';
    }
});
// Example: Make nav elements display next to each other
const navElements = document.querySelectorAll('nav a');
navElements.forEach((navElement) => {
    navElement.style.display = 'inline-block';
    navElement.style.marginRight = '10px'; // Adjust the margin as needed
});