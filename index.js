// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navigation and Scroll Behavior
document.addEventListener('DOMContentLoaded', () => {
    // Active Navigation Link
    const sections = document.querySelectorAll('section, .container');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && 
                scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (section.id && link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Particle Loading State with Error Handling
    const particlesContainer = document.getElementById('particles');
    const loadingElement = document.querySelector('.particles-loading');
    
    if (particlesContainer && loadingElement) {
        try {
            // Initialize particles.js with a callback
            particlesJS('particles', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#00aaff'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.5,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#00aaff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
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
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            }, function() {
                // This callback runs when particles are initialized
                setTimeout(() => {
                    loadingElement.style.opacity = '0';
                    setTimeout(() => {
                        loadingElement.style.display = 'none';
                        particlesContainer.classList.add('loaded');
                    }, 500);
                }, 1000);
            });
        } catch (error) {
            console.error('Error initializing particles:', error);
            // Fallback: Hide loading and show particles container
            loadingElement.style.display = 'none';
            particlesContainer.classList.add('loaded');
        }
    }
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const nav = document.querySelector('nav');
    const logoContainer = document.querySelector('.logo-container');

    if (hamburgerBtn && nav && logoContainer) {
        hamburgerBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            logoContainer.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                nav.classList.remove('active');
                logoContainer.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                logoContainer.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });
        });
    }
}); 