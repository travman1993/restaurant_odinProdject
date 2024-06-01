import '../src/style.css';
import menuImg from './seafod.webp'
import menuImg1 from './seafooddrink.webp'
import menuImg2 from './seafoodtwo.webp'
import menuImg3 from './seafoodthree.webp'

export function renderMenu() {
    const pageContent = document.querySelector('#pageContent');
    const menu = document.createElement('div');
    menu.classList.add('menu-container');
    menu.innerHTML = `
        <h2 id="menuText">Menu</h2>
        <div class="menu-items">
            <img src="${menuImg1}" alt="Drinks offered" class="menu-item">
            <img src="${menuImg}" alt="Menu one" class="menu-item">
            <img src="${menuImg2}" alt="Menu two" class="menu-item">
            <img src="${menuImg3}" alt="Menu three" class="menu-item">
        </div>
        `;
    pageContent.appendChild(menu);
}
