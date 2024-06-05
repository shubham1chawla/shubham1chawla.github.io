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

// Adding typing animation
const simulateChat = async (bubbles) => {
    
    // Removing innerHTML for all the elements at start
    const map = new Map();
    bubbles.forEach((bubble) => {
        bubble.classList.add('animate', 'animate-out')
        const body = bubble.querySelector('.chat-bubble__body');
        const { innerHTML: html, textContent: text } = body;
        map.set(body, [html, text.trim().replace(/\s\s+/g, ' ')]);
        body.innerHTML = '';
    });

    // Typing text inside elements one at a time
    for (const bubble of bubbles) {
        bubble.classList.replace('animate-out', 'animate-in');
        const body = bubble.querySelector('.chat-bubble__body');
        const [html, text] = map.get(body);
        index = 0

        // Blinking caret span element
        const caret = document.createElement('span')
        caret.className = 'caret';
        caret.innerHTML = '|';
        bubble.appendChild(caret);

        const typeText = (resolve) => {
            if (index < text.length) {
                body.innerHTML += text.charAt(index++);
                const timeout = Math.ceil(40 + 2 * Math.random());
                setTimeout(() => typeText(resolve), timeout);
            } else {               
                resolve();
            }
        }
        await new Promise((resolve) => typeText(resolve));
 
        // Setting original innerHTML to resolve anchor tags
        body.innerHTML = html;
        bubble.removeChild(caret);
    }
};

// Setting up chat intersection observer
const chatObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const bubbles = document.querySelector('.chat').querySelectorAll('.chat-bubble');
            simulateChat(bubbles);
            fadeObserver.unobserve(entry.target);
        }
    });
});

// Adding main chat container to the observer
chatObserver.observe(document.querySelector('main.chat'));
