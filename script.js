// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Property Search Functionality
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-bar input');
const propertyTypeSelect = document.querySelector('.search-bar select:first-of-type');
const priceRangeSelect = document.querySelector('.search-bar select:last-of-type');

searchBtn.addEventListener('click', () => {
    const location = searchInput.value.toLowerCase();
    const propertyType = propertyTypeSelect.value;
    const priceRange = priceRangeSelect.value;
    
    // You would typically make an API call here
    // For demo purposes, we'll just show an alert
    alert(`Searching for ${propertyType} properties in ${location} within price range ${priceRange}`);
});

// Property Card Hover Effect
const propertyCards = document.querySelectorAll('.property-card');

propertyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // You would typically make an API call here
    // For demo purposes, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Animate Stats on Scroll
const stats = document.querySelectorAll('.stat-item h3');
let animated = false;

function animateStats() {
    if (animated) return;

    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        function updateCount() {
            if (count < target) {
                count += increment;
                stat.textContent = Math.ceil(count) + '+';
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target + '+';
            }
        }

        updateCount();
    });

    animated = true;
}

// Intersection Observer for Stats Animation
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// View Details Button Functionality
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.property-card');
        const propertyName = card.querySelector('h3').textContent;
        const price = card.querySelector('.price').textContent;
        
        // You would typically navigate to a property details page
        // For demo purposes, we'll just show an alert
        alert(`Viewing details for ${propertyName}\nPrice: ${price}`);
    });
});

// Initialize AOS (Animate on Scroll) if you want to add it
document.addEventListener('DOMContentLoaded', () => {
    // You can add any initialization code here
    console.log('Website loaded successfully!');
}); 