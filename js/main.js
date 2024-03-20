document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('#menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        var email = document.getElementById('email').value;
        var confirmEmail = document.getElementById('confirm-email').value;
        var errorMessage = document.getElementById('error-message');

        if (email !== confirmEmail) {
            errorMessage.textContent = 'Email addresses do not match';
            event.preventDefault();
        } else {
            errorMessage.textContent = '';
        }
    });
});