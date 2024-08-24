// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('teleportButton');
    
    button.addEventListener('click', () => {
        // Teleport the button to a new position
        button.style.position = 'absolute';
        button.style.top = `${Math.random() * (window.innerHeight - button.offsetHeight)}px`;
        button.style.left = `${Math.random() * (window.innerWidth - button.offsetWidth)}px`;
        
        // Disable the button to prevent further clicks
        button.classList.add('disabled');
        button.disabled = true; // This will make it unclickable
    });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('teleportButton');
    
    button.addEventListener('click', () => {
        // Teleport the button to a new position
        button.style.position = 'absolute';
        button.style.top = `${Math.random() * (window.innerHeight - button.offsetHeight)}px`;
        button.style.left = `${Math.random() * (window.innerWidth - button.offsetWidth)}px`;
        
        // Disable the button to prevent further clicks
        button.classList.add('disabled');
        button.disabled = true; // This will make it unclickable
    });
});
