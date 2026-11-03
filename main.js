document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion Functionality (for about.html)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });

    // 2. Live Search Functionality (for services.html)
    const searchInput = document.getElementById('liveSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.service-card');
            cards.forEach(card => {
                const text = card.innerText.toLowerCase();
                card.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }

    // 3. Enquiry Form Validation
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your enquiry has been submitted successfully.');
            enquiryForm.reset();
        });
    }
});