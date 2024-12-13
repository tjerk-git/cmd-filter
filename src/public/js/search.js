document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('teacherSearch');
    const teacherCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        teacherCards.forEach(card => {
            const tags = card.getAttribute('data-tags').toLowerCase();
            const slug = card.getAttribute('data-slug').toLowerCase();
            
            if (tags.includes(searchTerm) || slug.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
