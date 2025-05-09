// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Initialize testimonial carousel if Owl Carousel is loaded
    if (typeof $.fn.owlCarousel !== 'undefined') {
        $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 20,
            nav: true,
            navText: [
                '<i class="fas fa-chevron-right"></i>',
                '<i class="fas fa-chevron-left"></i>'
            ],
            responsive: {
                0: { items: 1 },
                768: { items: 1 }
            }
        });
    }
});