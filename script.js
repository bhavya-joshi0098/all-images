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
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
let typed = new Typed('.name', {
    strings: ["A WEB DEVELOPER","JOSHI BHAVYA"],
    typeSpeed: 50,
    loop: true,
    backspeed:150,
  })
