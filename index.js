// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Adding active class to the current navigation item
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('div[id^="page"]');
    const navLi = document.querySelectorAll('.nav-item');
  
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLi.forEach(li => {
      li.classList.remove('active');
      if (li.querySelector('a').getAttribute('href') === `#${currentSection}`) {
        li.classList.add('active');
      }
    });
  });
  
  // Displaying a message when the 'RESUME' button is clicked
  document.getElementById('b2').addEventListener('click', () => {
    alert('You are about to view/download the resume!');
  });
  
  // Social media buttons - open links in a new tab
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.querySelector('img').parentNode.getAttribute('href');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
  