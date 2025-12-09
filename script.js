// Navbar scroll effect
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Show scroll to top button
  if (window.scrollY > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// Close menu when clicking on a link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});

// Scroll to top
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Typewriter effect
const typewriter = document.getElementById("typewriter");
const texts = [
  "Full Stack Developer 🚀",
  "Web Development Intern @ Prodigy InfoTech 💻",
  "Creative Problem Solver 💡",
  "Tech Enthusiast ✨"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// Start typewriter effect
setTimeout(type, 1000);

// Animate on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
    }
  });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll("[data-aos]").forEach(el => {
  observer.observe(el);
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Create mailto link
  const mailtoLink = `mailto:vinitmishra@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}
Email: ${email}

Message:
${message}`
  )}`;

  // Open default email client
  window.location.href = mailtoLink;

  // Show success message
  alert("✅ Thank you for your message! Your default email client will open.");
  
  // Reset form
  contactForm.reset();
});

// Smooth scroll for anchor links
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

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - scrolled / 600;
  }
});

// Animate progress bars when they come into view
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target.querySelector('.progress');
      if (progressBar) {
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
          progressBar.style.width = width;
        }, 100);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
  progressObserver.observe(card);
});

// Add cursor trail effect (optional)
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
  cursorTrail.push({ x: e.clientX, y: e.clientY });
  if (cursorTrail.length > trailLength) {
    cursorTrail.shift();
  }
});

// Log page load
console.log('%c🚀 Portfolio loaded successfully!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped by Vinit Mishra', 'color: #818cf8; font-size: 14px;');
console.log('%cProdigy InfoTech - Task 01', 'color: #c7d2fe; font-size: 12px;');
