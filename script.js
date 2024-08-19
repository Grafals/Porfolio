const typingElement = document.querySelector('.typing');
const skills = ['HTML5', 'CSS6', 'Tailwind CSS', 'JavaScript'];
let skillIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < skills[skillIndex].length) {
        typingElement.textContent += skills[skillIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = skills[skillIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        skillIndex = (skillIndex + 1) % skills.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});
