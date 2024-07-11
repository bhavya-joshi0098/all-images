document.addEventListener("DOMContentLoaded", function() {
        const fadeInSections = document.querySelectorAll('.fade-in-section');
    
        const fadeInOnScroll = () => {
            const triggerBottom = window.innerHeight * 0.9;
    
            fadeInSections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
    
                if(sectionTop < triggerBottom) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        }
    
        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll(); // Run the function once to show elements already in view on load
    });

    function setDesktopView() {
        var viewport = document.getElementById('viewport');
        viewport.setAttribute('content', 'width=1024');
    }

    if (window.innerWidth < 1024) {
        setDesktopView();
    }