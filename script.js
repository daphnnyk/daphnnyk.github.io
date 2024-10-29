console.log('JavaScript is working');

// Toggle the hamburger menu and navigation links
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle active class for hamburger
    var nav = document.getElementById('nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselPages = document.querySelectorAll('.carousel-page'); // Select all carousel pages
    const prevArrow = document.querySelector('.left-arrow'); // Left arrow button
    const nextArrow = document.querySelector('.right-arrow'); // Right arrow button
    const dots = document.querySelectorAll('.carousel-navigation .dot'); // Dots for navigation
    const carouselWrapper = document.querySelector('.carousel-wrapper'); // Main carousel container

    let currentPage = 0; // Start at the first page
    let autoSwitchInterval; // Variable to store the interval

    // Show the initial active page
    function showPage(index) {
        carouselPages.forEach((page, i) => {
            page.classList.toggle('active', i === index); // Show only the active page
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index); // Update the active dot
        });
    }

    // Function to move to the next page automatically
    function autoSwitchPage() {
        currentPage = (currentPage + 1) % carouselPages.length; // Move to the next page (loop back to 0)
        showPage(currentPage); // Show the next page
    }

    // Start the automatic switch with a 30-second delay
    function startAutoSwitch() {
        autoSwitchInterval = setInterval(autoSwitchPage, 30000); // 30000 ms = 30 seconds
    }

    // Stop the automatic switch
    function stopAutoSwitch() {
        clearInterval(autoSwitchInterval);
    }

    // Next button functionality
    nextArrow.addEventListener('click', () => {
        currentPage = (currentPage + 1) % carouselPages.length; // Move to the next page (loop back to 0)
        showPage(currentPage); // Show the next page
    });

    // Previous button functionality
    prevArrow.addEventListener('click', () => {
        currentPage = (currentPage - 1 + carouselPages.length) % carouselPages.length; // Move to the previous page (loop back from 0)
        showPage(currentPage); // Show the previous page
    });

    // Event listeners for dots (manual navigation)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentPage = index; // Set current page to clicked dot index
            showPage(currentPage); // Show the corresponding page
        });
    });

    // Hovering over the carousel stops the auto switch
    carouselWrapper.addEventListener('mouseover', stopAutoSwitch);

    // Leaving the carousel restarts the auto switch
    carouselWrapper.addEventListener('mouseleave', startAutoSwitch);

    // Initialize by showing the first page
    showPage(currentPage);

    // Start the automatic switch when the page loads
    startAutoSwitch();
});
