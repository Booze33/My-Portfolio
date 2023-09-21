/* eslint-disable no-use-before-define */
import form from './script.js';

const email = document.getElementById('email');
const name = document.getElementById('same');
const message = document.getElementById('message');
const error = document.getElementById('error');
const errorTwo = document.getElementById('error-2');
const errorThree = document.getElementById('error-3');

form.addEventListener('submit', (event) => {
  const EmailCase = email.value === email.value.toLowerCase();
  const EmailFill = email.value.trim() !== '';
  const NameFill = name.value.trim() !== '';
  const MessageFill = message.value.trim() !== '';

  if (EmailCase && EmailFill && NameFill && MessageFill) {
    form.submit();
  } else {
    event.preventDefault();
    error.style.display = 'block';
    errorTwo.style.display = 'block';
    errorThree.style.display = 'block';
  }
});

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Glad too see you', 'I am a Software developer', 'I am a FullStack Developer', 'I am a Frontend Developer'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex -= 1;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex += 1;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex += 1;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const googleDocLink = 'https://docs.google.com/document/d/1_Dhl0V6MmNTai2pT5VgtnRe5ZmqvseKbeIFN4geTQHo/edit?usp=sharing';

document.getElementById('downloadButton').addEventListener('click', () => {
  // eslint-disable-next-line prefer-template
  const downloadLink = googleDocLink + '&export=download';

  window.open(downloadLink, '_blank');
});
