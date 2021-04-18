const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('inview');
        }
    });
    // alert('intersecting');
}
const options = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: [0, 0.5, 1]
};
const io = new IntersectionObserver(cb, options);
io.observe(child);
