import '../src/style.css';
import { renderMenu } from './menu.js';
import { renderAbout } from './about.js';

function refreshPage() {
    location.reload();
}

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

    homeButton.addEventListener('click', function() {
        refreshPage();
    });
    menuButton.addEventListener('click', function() {
        refreshPage();
        renderMenu();
    });
    aboutButton.addEventListener('click', function() {
        refreshPage();
        renderAbout();
    });

    return header;
}

document.body.appendChild(topHeader());


function mainContent() {
    document.getElementById('pageContent').innerHTML = `
        <div class="main-container">
        <img src="./src/backImg.webp" alt="Chuey's Restaurant" class="main-image" style="width: 100%, height: 120%">
            <div class="main-text">
                <h2>Welcome to Chuey's</h2>
                <p>Chuey's is a family owned and operated restaurant located in the heart of the city. We offer a wide variety of dishes that are sure to please your taste buds. Our menu includes a variety of appetizers, entrees, and desserts. We also offer a full bar with a wide selection of wines, beers, and cocktails. Whether you are looking for a quick bite to eat or a full meal, Chuey's has something for everyone. Come in and try our delicious food today!</p>
            </div>
        </div>
    `;
}

mainContent();

function bottomFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('bottom-header');
    footer.innerHTML =`
        <div clas="foot">
            <p>&copy; 2021 Chuey's</p>
            <a href="https://github.com/travman1993">GitHub: Travman</a>
        </div>
        `;
    return footer;
}

document.body.appendChild(bottomFooter());