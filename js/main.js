// Adding on click for scroll down button
document.getElementById('scroll-down').addEventListener('click', () => {
    const height = document.documentElement.clientHeight - 100;
    window.scrollTo({ top: height, behavior: 'smooth' });
});

// Setting up animation intersection observer
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.replace('animate-out', 'animate-in');
            fadeObserver.unobserve(entry.target);
        }
    });
});

// Adding animatable elements to the observer
document.querySelectorAll('.animate-out').forEach((element) => fadeObserver.observe(element));

// Setting up slide intersection observer
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const { width } = entry.target.children[1].getBoundingClientRect();
            setTimeout(() => {
                entry.target.scrollTo({ left: width, behavior: 'smooth' });
                setTimeout(() => {
                    entry.target.scrollTo({ left: 0, behavior: 'smooth' });
                    slideObserver.unobserve(entry.target);
                }, 1000);
            }, 1000);
        }
    });
});

// Adding slides to the observer
document.querySelectorAll('.slides').forEach((slides) => slideObserver.observe(slides));

// Adding on click for slide
document.querySelectorAll('.slide').forEach((slide) => {
    slide.addEventListener('click', () => {
        const styles = window.getComputedStyle(slide);
        const url = styles.backgroundImage.slice(4, -1).replace(/"/g, "");
        window.open(url, '_blank');
    });
});
