window.addEventListener('scroll', function() {
    const navigationbar = document.querySelector('.navbar');
    const changePoint = 500; // пиксели прокрутки, после которых фон меняется
    if (window.scrollY > changePoint) {
        navigationbar.classList.add('scrolled');
    } else {
        navigationbar.classList.remove('scrolled');
    }
});