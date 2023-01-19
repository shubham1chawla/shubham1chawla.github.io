// HTML elements
const scrollUpIcon = document.querySelector('.scroll-up');
const scrollDownIcon = document.querySelector('.scroll-down');
const firstSection = document.querySelectorAll('section')[0];
const emailForm = document.querySelector('form');
const linkedinButton = document.querySelector('.linkedin');
const youtubeButton = document.querySelector('.youtube');
const telegramButton = document.querySelector('.telegram');

// Defining observers
const SCROLL_UP_OBSERVER_KEY = 'SCROLL_UP_OBSERVER_KEY';

// Setting up actions for observers
const observers = {
  SCROLL_UP_OBSERVER_KEY: new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Applying visibility to scroll up icon only if background is not visibile
      const opacity = `opacity: ${entry.isIntersecting ? 0 : 1}`;
      const cursor = `cursor: ${entry.isIntersecting ? `default` : `pointer`}`;
      scrollUpIcon.setAttribute('style', `${opacity};${cursor}`);
    });
  }),
};

// Linking HTML elements with observers
observers.SCROLL_UP_OBSERVER_KEY.observe(firstSection);

// --------------------------------------------------------------
// HTML Event Listeners Defined Below
// --------------------------------------------------------------

scrollUpIcon.addEventListener('click', () => {
  const screenHeight = document.documentElement.clientHeight;
  const currentHeight = document.documentElement.scrollTop;
  // Only allowing scoll up action if user scolled beyond sceen's height
  if (currentHeight < screenHeight) {
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollDownIcon.addEventListener('click', () => {
  const screenHeight = document.documentElement.clientHeight;
  window.scrollTo({ top: screenHeight, behavior: 'smooth' });
});

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const url = `mailto:shuchawl@gmail.com?subject=${data.get('subject')}&body=${data.get('body')}`;
  window.location.href = url;
});

linkedinButton.addEventListener('click', () => {
  const url = 'https://www.linkedin.com/in/shubham1chawla/';
  window.open(url, '_blank') || window.location.replace(url);
});

youtubeButton.addEventListener('click', () => {
  const url = 'https://youtube.com/@me_shubham';
  window.open(url, '_blank') || window.location.replace(url);
});

telegramButton.addEventListener('click', () => {
  const url = 'https://shuchawl.t.me/';
  window.open(url, '_blank') || window.location.replace(url);
});

