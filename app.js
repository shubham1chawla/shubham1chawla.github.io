// --------------------------------------------------------------
// Constants Defined Below
// --------------------------------------------------------------

const LINKEDIN_URL = 'https://www.linkedin.com/in/shubham1chawla/';
const YOUTUBE_URL = 'https://youtube.com/@me_shubham';
const TELEGRAM_URL = 'https://shuchawl.t.me/';
const GITHUB_URL = 'https://github.com/shubham1chawla/';
const EMAIL_ADDRESS = 'shuchawl@gmail.com';

const SCROLL_UP_ICON_ELEMENT = 'SCROLL_UP_ICON_ELEMENT';
const SCROLL_DOWN_ICON_ELEMENT = 'SCROLL_DOWN_ICON_ELEMENT';
const FIRST_SECTION_ELEMENT = 'FIRST_SECTION_ELEMENT';
const EMAIL_FORM_ELEMENT = 'EMAIL_FORM_ELEMENT';
const LINKEDIN_ICON_ELEMENT = 'LINKEDIN_ICON_ELEMENT';
const YOUTUBE_ICON_ELEMENT = 'YOUTUBE_ICON_ELEMENT';
const TELEGRAM_ICON_ELEMENT = 'TELEGRAM_ICON_ELEMENT';
const GITHUB_ICON_ELEMENT = 'GITHUB_ICON_ELEMENT';
const FADE_ELEMENTS = 'FADE_ELEMENTS';

const SCROLL_UP_OBSERVER = 'SCROLL_UP_OBSERVER';
const FADE_OBSERVER = 'FADE_OBSERVER';

// Setting up HTML elements
const elements = {
  SCROLL_UP_ICON_ELEMENT: document.querySelector('.scroll-up'),
  SCROLL_DOWN_ICON_ELEMENT: document.querySelector('.scroll-down'),
  FIRST_SECTION_ELEMENT: document.querySelectorAll('section')[0],
  EMAIL_FORM_ELEMENT: document.querySelector('form'),
  LINKEDIN_ICON_ELEMENT: document.querySelector('.linkedin'),
  YOUTUBE_ICON_ELEMENT: document.querySelector('.youtube'),
  TELEGRAM_ICON_ELEMENT: document.querySelector('.telegram'),
  GITHUB_ICON_ELEMENT: document.querySelector('.github'),
  FADE_ELEMENTS: document.querySelectorAll('.fade-out'),
};

// Setting up actions for observers
const observers = {
  SCROLL_UP_OBSERVER: new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Applying visibility to scroll up icon only if background is not visible
      const classes = `scroll-up ${entry.isIntersecting ? 'hidden' : 'visible'}`;
      elements.SCROLL_UP_ICON_ELEMENT.className = classes;
    });
  }),
  FADE_OBSERVER: new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.replace('fade-out', 'fade-in');
      } else {
        entry.target.classList.replace('fade-in', 'fade-out');
      }
    });
  }),
};

// Observing First Section's intersection to control scroll-up's button
observers.SCROLL_UP_OBSERVER.observe(elements.FIRST_SECTION_ELEMENT);

// Observing Fade Element's interaction to control fade animations
elements.FADE_ELEMENTS.forEach((ele) => observers.FADE_OBSERVER.observe(ele));

// --------------------------------------------------------------
// HTML Event Listeners Defined Below
// --------------------------------------------------------------

elements.SCROLL_UP_ICON_ELEMENT.addEventListener('click', () => {
  const screenHeight = document.documentElement.clientHeight;
  const currentHeight = document.documentElement.scrollTop;
  // Only allowing scroll up action if user scrolled beyond screen's height
  if (currentHeight < screenHeight) {
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

elements.SCROLL_DOWN_ICON_ELEMENT.addEventListener('click', () => {
  const screenHeight = document.documentElement.clientHeight;
  window.scrollTo({ top: screenHeight, behavior: 'smooth' });
});

elements.LINKEDIN_ICON_ELEMENT.addEventListener('click', () => openNewTab(LINKEDIN_URL));
elements.YOUTUBE_ICON_ELEMENT.addEventListener('click', () => openNewTab(YOUTUBE_ICON_ELEMENT));
elements.TELEGRAM_ICON_ELEMENT.addEventListener('click', () => openNewTab(TELEGRAM_URL));
elements.GITHUB_ICON_ELEMENT.addEventListener('click', () => openNewTab(GITHUB_URL));

elements.EMAIL_FORM_ELEMENT.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  openEmailApplication(data.get('subject'), data.get('body'));
});

// --------------------------------------------------------------
// Utility Methods Defined Below
// --------------------------------------------------------------

function openEmailApplication(subject = '', body = '') {
  if (!subject.length || !body.length) {
    alert(`Please ensure you have entered subject and body for the email!`);
    return;
  }
  openNewTab(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`);
}

function openNewTab(url) {
  window.open(url, '_blank') || window.location.replace(url);
}

