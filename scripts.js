// script.js

// Animate sections on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      }
    });
  }, {
    threshold: 0.2
  });
  
  const sections = document.querySelectorAll('.projects-section, .skills-section');
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Smooth fade-in effect
  const fadeElements = document.querySelectorAll('.bio-section, .projects-section, .skills-section');
  
  fadeElements.forEach(el => {
    el.classList.add('animate-hidden');
  });
  