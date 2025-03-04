document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission and page refresh

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Show the alert box with animation
    const alertBox = document.getElementById('alertBox');
    alertBox.classList.add('show'); // Show the alert with animation

    // Optionally, hide the alert after a few seconds with slide-out animation
    setTimeout(() => {
        alertBox.classList.remove('show'); // Hide the alert
        alertBox.classList.add('hide'); // Apply slide-out animation
    }, 3000); // Keep alert visible for 3 seconds
});

particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePasswordIcon');

    // Toggle password field type
    const isPasswordVisible = passwordInput.type === 'password';
    passwordInput.type = isPasswordVisible ? 'text' : 'password';

    // Toggle icon class
    toggleIcon.classList.toggle('bxs-lock-open', isPasswordVisible);
    toggleIcon.classList.toggle('bxs-lock', !isPasswordVisible);

    // Accessibility improvement
    toggleIcon.setAttribute('aria-label', isPasswordVisible ? 'Hide password' : 'Show password');
}

//sample lng to 
function loginEvent(event) {
    event.preventDefault(); 
    alert("Login Success! nasa javascript to");
}

document.querySelector(".login-form").addEventListener("submit", loginEvent);

ScrollReveal({
    reset: false    , 
    distance: '50px',
    duration: 1500,  
    delay: 200
});

document.addEventListener("DOMContentLoaded", function () {
    // ScrollReveal().reveal('.form-wrapper', { origin: 'top', delay: 450 });
    ScrollReveal().reveal('.login-form', { origin: 'right', interval: 100, delay: 450 });


});
