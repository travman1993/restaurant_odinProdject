import _ from 'lodash';
import './style.css';
import loadHome from './pages/home';
import loadMenu from './pages/menu';
import loadAbout from './pages/about';

function initPage() {
    const content = document.querySelector('#content');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', loadHome);
    content.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', loadMenu);
    content.appendChild(menuButton);

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About';
    aboutButton.addEventListener('click', loadAbout);
    content.appendChild(aboutButton);

    loadHome();
}

initPage();

console.log("Hey!");