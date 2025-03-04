document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const userName = localStorage.getItem('userName');
    
    // If no user name is found, redirect to login page
    if (!userName) {
        window.location.href = 'login.html';
        return;
    }

    // Find or create the user name display element
    let userNameDisplay = document.querySelector('.user-name-display');
    if (!userNameDisplay) {
        // Create the element if it doesn't exist
        userNameDisplay = document.createElement('div');
        userNameDisplay.className = 'user-name-display';
        // Insert it after the logo container in the header
        const header = document.querySelector('header');
        if (header) {
            header.appendChild(userNameDisplay);
        }
    }

    // Set the user name display
    userNameDisplay.innerHTML = `Welcome, ${userName}!`;
}); 