document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Function to check if the element is in view
    function isInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Function to handle scroll and toggle fade-in/fade-out
    function handleScroll() {
        fadeInElements.forEach(el => {
            if (isInView(el)) {
                el.classList.add('scroll-visible'); // Fade in when in view
            } else {
                el.classList.remove('scroll-visible'); // Fade out when out of view
            }
        });
    }

    // Trigger animation on scroll
    window.addEventListener('scroll', handleScroll);
    // Initial check if already in view
    handleScroll();

    // Floating circles script
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        // Randomize position
        circle.style.top = Math.random() * (window.innerHeight - 100) + 'px'; // Subtracting circle height
        circle.style.left = Math.random() * (window.innerWidth - 100) + 'px'; // Subtracting circle width

        // Set pointer-events to auto for circle interaction
        circle.style.pointerEvents = 'auto';

        // Add a floating animation
        const float = () => {
            const randomX = Math.random() * (window.innerWidth - 100);
            const randomY = Math.random() * (window.innerHeight - 100);
            circle.style.transition = 'all 2s ease'; // Smooth transition
            circle.style.left = randomX + 'px';
            circle.style.top = randomY + 'px';
        };

        setInterval(float, 3000); // Change position every 3 seconds
    });

    // Slideshow functionality
    const images = [
        "./images/pix3.jpg",
        "./images/pix2.jpg",
    ];

    let currentImageIndex = 0;
    const slideshowElement = document.getElementById('slideshow');

    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshowElement.src = images[currentImageIndex];
    }

    setInterval(changeImage, 3000);

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to check all cards and add the 'show' class with a delay
    function checkCardsInView() {
        const cards = document.querySelectorAll('.card-animation');
        let delay = 0; // Initial delay for each card

        cards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                // Add a delay between each card's appearance
                setTimeout(() => {
                    card.classList.add('show');
                }, delay);

                // Increase delay for the next card
                delay += 200; // Adjust delay (in milliseconds) for sequential animation
            } else {
                // Remove 'show' class if the card is out of view
                card.classList.remove('show');
            }
        });
    }

    // Run the function on scroll and on page load
    window.addEventListener('scroll', checkCardsInView);
    window.addEventListener('load', checkCardsInView);  
});
