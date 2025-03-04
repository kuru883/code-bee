const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

function selectLesson(lessonNumber) {
  // Hide all lesson content first
  const lessonContents = document.querySelectorAll('[id$="-content"]');
  lessonContents.forEach(content => {
    content.style.display = 'none';
    content.classList.remove('selected');
  });

  // Show the selected lesson content
  const selectedContent = document.getElementById(`lesson${lessonNumber}-content`);
  if (selectedContent) {
    selectedContent.style.display = 'block';
    selectedContent.classList.add('selected');
    
    // Show the container
    document.getElementById('container').style.display = 'block';
    
    // Hide about sections
    document.querySelectorAll('[id^="aboutSection"]').forEach(section => {
      section.style.display = 'none';
    });
  }

  // Keep the submenu visible
  const subMenu = document.querySelector('.sub-menu');
  if (subMenu) {
    subMenu.classList.add('show');
  }
}

function showAbout(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Hide lesson container and all lesson contents
    const container = document.getElementById('container');
    if (container) {
        container.style.display = 'none';
    }
    
    // Show all about sections
    document.querySelectorAll('#aboutSection, #aboutSection1, #aboutSection2, #aboutSection3').forEach(el => {
        el.style.display = 'block';
    });
    
    // Hide the VB.NET editor if it exists
    const dotnetEditor = document.getElementById('dotnet-editor-container');
    if (dotnetEditor) {
        dotnetEditor.style.display = 'none';
    }
    
    // Close any open dropdown menus
    if (typeof closeAllSubMenus === 'function') {
        closeAllSubMenus();
    }
}

const lesson1 = document.getElementById("lesson1-content");
const lesson2 = document.getElementById("lesson2-content");
const lesson3 = document.getElementById("lesson3-content");
const lesson4 = document.getElementById("lesson4-content");
const lesson5 = document.getElementById("lesson5-content");

const lesson1btn = document.getElementById("lesson1");
const lesson2btn = document.getElementById("lesson2");
const lesson3btn = document.getElementById("lesson3");
const lesson4btn = document.getElementById("lesson4");
const lesson5btn = document.getElementById("lesson5");

// Initialize particles with loading state
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00aaff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00aaff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
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
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    }, function() {
        // Hide loading state after particles are initialized
        setTimeout(() => {
            const loadingElement = document.querySelector('.particles-loading');
            if (loadingElement) {
                loadingElement.style.opacity = '0';
                setTimeout(() => {
                    loadingElement.style.display = 'none';
                }, 500);
            }
            document.getElementById('particles').classList.add('loaded');
        }, 1000);
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
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

    // Show about sections by default
    document.querySelectorAll('[id^="aboutSection"]').forEach(section => {
        section.style.display = 'block';
    });
    
    // Hide lesson container by default
    document.getElementById('container').style.display = 'none';
});

