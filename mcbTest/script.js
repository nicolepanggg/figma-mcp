// Gallery Modal Functionality
class GalleryModal {
    constructor() {
        this.modal = document.getElementById('imageModal');
        this.modalImg = document.getElementById('modalImage');
        this.closeBtn = document.querySelector('.close');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.galleryItems = document.querySelectorAll('.gallery-item img');
        this.currentImageIndex = 0;
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        // Open modal when clicking gallery images
        this.galleryItems.forEach((img, index) => {
            img.addEventListener('click', () => this.openModal(index));
            
            // Add keyboard support
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openModal(index);
                }
            });
        });
        
        // Close modal events
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Navigation events
        this.prevBtn.addEventListener('click', () => this.showPrevImage());
        this.nextBtn.addEventListener('click', () => this.showNextImage());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.modal.classList.contains('show')) {
                switch(e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.showPrevImage();
                        break;
                    case 'ArrowRight':
                        this.showNextImage();
                        break;
                }
            }
        });
    }
    
    openModal(index) {
        this.currentImageIndex = index;
        this.modalImg.src = this.galleryItems[index].src;
        this.modalImg.alt = this.galleryItems[index].alt;
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        this.modal.focus();
    }
    
    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
        
        // Return focus to the image that opened the modal
        this.galleryItems[this.currentImageIndex].focus();
    }
    
    showPrevImage() {
        this.currentImageIndex = this.currentImageIndex > 0 
            ? this.currentImageIndex - 1 
            : this.galleryItems.length - 1;
        this.updateModalImage();
    }
    
    showNextImage() {
        this.currentImageIndex = this.currentImageIndex < this.galleryItems.length - 1 
            ? this.currentImageIndex + 1 
            : 0;
        this.updateModalImage();
    }
    
    updateModalImage() {
        this.modalImg.src = this.galleryItems[this.currentImageIndex].src;
        this.modalImg.alt = this.galleryItems[this.currentImageIndex].alt;
    }
}

// Filter Functionality
class GalleryFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveFilter(btn);
                this.filterGallery(btn.textContent.trim());
            });
        });
    }
    
    setActiveFilter(activeBtn) {
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    filterGallery(category) {
        // In a real implementation, you would filter based on data attributes
        // For this demo, we'll show all images regardless of filter
        this.galleryItems.forEach((item, index) => {
            item.style.display = 'block';
            
            // Add a subtle animation when filtering
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Navigation Dropdown Functionality
class NavigationDropdown {
    constructor() {
        this.dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
        this.initEventListeners();
    }
    
    initEventListeners() {
        this.dropdownTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                // In a full implementation, you would show/hide dropdown menus
                console.log(`Dropdown clicked: ${trigger.textContent.trim()}`);
            });
        });
    }
}

// Language Selector Functionality
class LanguageSelector {
    constructor() {
        this.languageBox = document.querySelector('.language-box');
        this.currentLanguage = 'EN';
        this.availableLanguages = ['EN', 'MY', 'ZH'];
        
        this.initEventListeners();
    }
    
    initEventListeners() {
        if (this.languageBox) {
            this.languageBox.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    toggleLanguage() {
        const currentIndex = this.availableLanguages.indexOf(this.currentLanguage);
        const nextIndex = (currentIndex + 1) % this.availableLanguages.length;
        this.currentLanguage = this.availableLanguages[nextIndex];
        
        const languageText = document.querySelector('.language-text');
        if (languageText) {
            languageText.textContent = this.currentLanguage;
        }
    }
}

// Lazy Loading for Images
class LazyImageLoader {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.imageObserver = null;
        
        this.initLazyLoading();
    }
    
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });
            
            this.images.forEach(img => {
                this.imageObserver.observe(img);
            });
        }
    }
}

// Smooth Scroll for Navigation
class SmoothScroll {
    constructor() {
        this.initSmoothScroll();
    }
    
    initSmoothScroll() {
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
    }
}

// Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.initPerformanceTracking();
    }
    
    initPerformanceTracking() {
        // Track page load time
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        });
        
        // Track image loading performance
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                console.log(`Image loaded: ${img.src}`);
            });
            
            img.addEventListener('error', () => {
                console.error(`Failed to load image: ${img.src}`);
            });
        });
    }
}

// Accessibility Enhancements
class AccessibilityEnhancer {
    constructor() {
        this.initAccessibilityFeatures();
    }
    
    initAccessibilityFeatures() {
        // Add ARIA labels and roles where needed
        this.addAriaLabels();
        
        // Enhance keyboard navigation
        this.enhanceKeyboardNavigation();
        
        // Add skip links
        this.addSkipLinks();
    }
    
    addAriaLabels() {
        // Add aria-label to interactive elements without text
        const userIcon = document.querySelector('.user-icon');
        if (userIcon) {
            userIcon.setAttribute('aria-label', 'User profile');
            userIcon.setAttribute('role', 'button');
            userIcon.setAttribute('tabindex', '0');
        }
        
        // Add aria-label to gallery items
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.setAttribute('aria-label', `View gallery image ${index + 1}`);
            item.setAttribute('tabindex', '0');
        });
        
        // Add aria-label to modal navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn) prevBtn.setAttribute('aria-label', 'Previous image');
        if (nextBtn) nextBtn.setAttribute('aria-label', 'Next image');
    }
    
    enhanceKeyboardNavigation() {
        // Make non-button elements keyboard accessible
        const clickableElements = document.querySelectorAll('.gallery-item, .user-icon');
        clickableElements.forEach(element => {
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });
        });
    }
    
    addSkipLinks() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #42B5E3;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s ease;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add id to main content
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.id = 'main-content';
        }
    }
}

// Theme Manager (for potential dark mode support)
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.initTheme();
    }
    
    initTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const galleryModal = new GalleryModal();
    const galleryFilter = new GalleryFilter();
    const navigationDropdown = new NavigationDropdown();
    const languageSelector = new LanguageSelector();
    const lazyImageLoader = new LazyImageLoader();
    const smoothScroll = new SmoothScroll();
    const performanceMonitor = new PerformanceMonitor();
    const accessibilityEnhancer = new AccessibilityEnhancer();
    const themeManager = new ThemeManager();
    
    console.log('GGT Event Gallery website initialized successfully!');
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Export classes for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GalleryModal,
        GalleryFilter,
        NavigationDropdown,
        LanguageSelector,
        LazyImageLoader,
        SmoothScroll,
        AccessibilityEnhancer,
        ThemeManager
    };
}