document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.transform = 'translateY(-100px)';
        } else {
            navbar.style.transform = 'translateY(0px)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
});