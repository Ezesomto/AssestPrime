// Animations JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initHoverAnimations();
    initButtonAnimations();
    initPlanCardAnimations();
});

// Scroll Animations
function initScrollAnimations() {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
}

// Hover Animations
function initHoverAnimations() {
    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('svg').classList.add('animate__animated', 'animate__pulse');
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('svg').classList.remove('animate__animated', 'animate__pulse');
        });
    });
    
    // Plan cards
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate__animated', 'animate__pulse');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate__animated', 'animate__pulse');
        });
    });
    
    // Testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('span').classList.add('animate__animated', 'animate__rubberBand');
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('span').classList.remove('animate__animated', 'animate__rubberBand');
        });
    });
}

// Button Animations
function initButtonAnimations() {
    const buttons = document.querySelectorAll('button, .btn, a[href^="#"], a[role="button"]');
    
    buttons.forEach(button => {
        // Click animation
        button.addEventListener('click', function() {
            this.classList.add('animate__animated', 'animate__pulse');
            
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__pulse');
            }, 1000);
        });
        
        // Hover animation for some buttons
        if (this.classList.contains('transform')) {
            this.addEventListener('mouseenter', () => {
                this.classList.add('animate__animated', 'animate__pulse');
            });
            
            this.addEventListener('mouseleave', () => {
                this.classList.remove('animate__animated', 'animate__pulse');
            });
        }
    });
}

// Plan Card Special Animations
function initPlanCardAnimations() {
    const planCards = document.querySelectorAll('.plan-card');
    
    planCards.forEach(card => {
        // Add sparkle effect on hover
        card.addEventListener('mouseenter', function() {
            const sparkles = document.createElement('div');
            sparkles.className = 'sparkles absolute inset-0 overflow-hidden';
            
            // Create multiple sparkle elements
            for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle absolute bg-white rounded-full';
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const size = Math.random() * 3 + 1;
                
                sparkle.style.left = `${x}%`;
                sparkle.style.top = `${y}%`;
                sparkle.style.width = `${size}px`;
                sparkle.style.height = `${size}px`;
                sparkle.style.opacity = '0';
                
                // Animate sparkle
                sparkle.animate([
                    { opacity: 0, transform: 'scale(0)' },
                    { opacity: 0.8, transform: 'scale(1)' },
                    { opacity: 0, transform: 'scale(0)' }
                ], {
                    duration: 1000 + Math.random() * 1000,
                    delay: Math.random() * 1000,
                    iterations: Infinity
                });
                
                sparkles.appendChild(sparkle);
            }
            
            this.appendChild(sparkles);
        });
        
        card.addEventListener('mouseleave', function() {
            const sparkles = this.querySelector('.sparkles');
            if (sparkles) {
                sparkles.remove();
            }
        });
    });
    
    // VIP and Luxury plan special effects
    const vipPlan = document.querySelector('.plan-card.border-yellow-400');
    const luxuryPlan = document.querySelector('.plan-card.border-blue-400');
    
    if (vipPlan) {
        // Add pulsing gold border
        vipPlan.style.animation = 'pulse-gold 2s infinite';
    }
    
    if (luxuryPlan) {
        // Add shimmering effect
        luxuryPlan.style.background = 'linear-gradient(45deg, #1F2937, #111827, #1F2937)';
        luxuryPlan.style.backgroundSize = '200% 200%';
        luxuryPlan.style.animation = 'shimmer 3s ease infinite';
    }
}

// Add keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse-gold {
        0% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(234, 179, 8, 0); }
        100% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0); }
    }
    
    @keyframes shimmer {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(style);