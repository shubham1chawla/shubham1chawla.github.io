// Adding on click for scroll down button
document.getElementById('scroll-down').addEventListener('click', () => {
    const { height } = document.querySelector('section.landing').getClientRects()[0];
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

// Adding header elements to the observer
document.querySelectorAll('header.animate-out').forEach((element) => fadeObserver.observe(element));

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

    // Storing innerHTML and textContent for bot's chat bubbles
    const map = new Map();
    bubbles.forEach((bubble) => {
        if (bubble.classList.contains('chat-bubble-user')) {
            return;
        }
        const body = bubble.querySelector('.chat-bubble__body');
        const { innerHTML: html, textContent: text } = body;
        map.set(body, [html, text.trim().replace(/\s\s+/g, ' ')]);
        body.innerHTML = '';
    });

    // Typing text inside elements one at a time
    for (const bubble of bubbles) {
        const body = bubble.querySelector('.chat-bubble__body');
        bubble.classList.replace('animate-out', 'animate-in');

        // Adding delay before next bot's chat bubble appears
        if (bubble.classList.contains('chat-bubble-user')) {
            await new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
            continue;
        }

        // Blinking caret span element
        const caret = document.createElement('span');
        caret.className = 'caret';
        caret.innerHTML = '|';
        bubble.appendChild(caret);

        const [html, text] = map.get(body);
        index = 0;
        const typeText = (resolve) => {
            if (index < text.length) {
                body.innerHTML += text.charAt(index++);
                const timeout = Math.ceil(20 + 30 * Math.random());
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
            simulateChat(document.querySelectorAll('.chat-bubble'));
            chatObserver.unobserve(entry.target);
        }
    });
});

// Setting minimum height for the chat's main element
const chatElement = document.querySelector('section.internship>main');
const styles = getComputedStyle(chatElement);
const height = styles.height;
const margin = styles.getPropertyValue('--large-unit');
chatElement.setAttribute('style', `min-height: calc(${height} + ${margin})`);

// Adding main chat container to the observer
chatObserver.observe(chatElement);
