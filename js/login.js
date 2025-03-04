document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const particlesContainer = document.getElementById('particles');
    let isSubmitting = false;

    // Initialize particles with a simpler configuration
    if (particlesContainer) {
        particlesJS('particles', {
            particles: {
                number: { value: 40, density: { enable: true, value_area: 800 } },
                color: { value: '#00aaff' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: false },
                size: { value: 2, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00aaff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: false },
                    onclick: { enable: false },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Handle form submission
    if (loginForm) {
        const submitButton = loginForm.querySelector('button[type="submit"]');
        
        // Remove form's default submit behavior
        loginForm.setAttribute('novalidate', '');
        
        // Handle button click
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (isSubmitting) return;
            
            const username = document.getElementById('username').value.trim();
            
            if (!username) {
                alert('Please enter your name');
                return;
            }

            isSubmitting = true;
            submitButton.disabled = true;
            submitButton.textContent = 'Loading...';
            
            // Store username and redirect
            localStorage.setItem('userName', username);
            
            // Redirect to index page
            window.location.href = 'index.html';
        });
    }

    // Handle back to top button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            }, 100);
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 