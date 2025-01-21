// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust offset for header
        behavior: 'smooth',
      });
    }
  });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Top';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

backToTopButton.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #0079D3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

console.log("Interactive features loaded.");
