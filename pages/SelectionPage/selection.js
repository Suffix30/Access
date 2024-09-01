document.querySelectorAll('.hub-grid img').forEach(image => {
    image.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        window.location.href = `../${page}`;
    });
});
