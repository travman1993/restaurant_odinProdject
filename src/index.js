import '../src/style.css';
import loadMenu from './menu.js';
import loadAbout from './about.js';

function initPage() {
    const content = document.querySelector('#pageContent');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', initPage);
    content.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', loadMenu);
    content.appendChild(menuButton);

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About';
    aboutButton.addEventListener('click', loadAbout);
    content.appendChild(aboutButton);

    initPage();
}

initPage();

console.log("Hey!");