import '../src/style.css';
import { renderMenu } from './menu.js';
import { renderAbout } from './about.js';

document.addEventListener('DOMContentLoaded', function() {
    let currentContent = 'home';
    let mainArea = document.querySelector("#pageContent");

    function renderMenuContent() {
        currentContent = 'menu';
        mainArea.innerHTML = '';
        renderMenu();
    }

    function renderAboutContent() {
        mainArea.innerHTML = '';
        currentContent = 'about'; 
        renderAbout();
    }

    function refreshPageContent() {
        currentContent = 'home';
        mainArea.innerHTML = ''; 
        location.reload();
    }

    const menuButton = document.querySelector('#menuButton');
    const aboutButton = document.querySelector('#aboutButton');
    const homeButton = document.querySelector('#homeButton');

    menuButton.addEventListener('click', renderMenuContent);
    aboutButton.addEventListener('click', renderAboutContent);
    homeButton.addEventListener('click', refreshPageContent);
});

function topHeader() {
    const header = document.createElement('header');
    header.classList.add('top-header');
    header.innerHTML = `
        <div class="top-header-container">
            <div class="top-header-name"><h1>Chuey's</h1></div>
            <div class="top-header-menu">
                <button class="btn" id="homeButton">Home</button>
                <button class="btn" id="menuButton">Menu</button>
                <button class="btn" id="aboutButton">About</button>
            </div>
        </div>
    `;

    const homeButton = header.querySelector('#homeButton');
    const menuButton = header.querySelector('#menuButton');
    const aboutButton = header.querySelector('#aboutButton');

    return header;
}

function mainContent() {
    const mainArea = document.createElement('div');
    mainArea.setAttribute('id', 'pageContent');
    mainArea.classList.add('main-container');
    mainArea.innerHTML = `
        <img src="background.jpg" alt="Chuey's Restaurant" class="main-image" style="width: 100%; height: 120%;">
        <div class="main-text">
            <h2>Welcome to Chuey's</h2>
            <p>Chuey's is a family owned and operated restaurant located in the heart of the city. We offer a wide variety of dishes that are sure to please your taste buds. Our menu includes a variety of appetizers, entrees, and desserts. We also offer a full bar with a wide selection of wines, beers, and cocktails. Whether you are looking for a quick bite to eat or a full meal, Chuey's has something for everyone. Come in and try our delicious food today!</p>
        </div>
    `;
    return mainArea;
}



function bottomFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('bottom-header');
    footer.innerHTML =`
        <div class="foot">
            <p>&copy; 2021 Chuey's</p>
            <a href="https://github.com/travman1993">GitHub: Travman</a>
        </div>
        `;
    return footer;
}

document.body.appendChild(topHeader());
document.body.appendChild(mainContent());
document.body.appendChild(bottomFooter());