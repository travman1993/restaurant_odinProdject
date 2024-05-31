import '../src/style.css';

export function renderMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-container');
    menu.innerHTML = `
        <h2>Menu</h2>
        <div class="menu-items">
            <img src="./seafooddrink.webp" alt="Drinks offered" class="menu-item">
            <img src="./seafod.webp" alt="Menu one" class="menu-item">
            <img src="./seafoodtwo.webp" alt="Menu two" class="menu-item">
            <img src="./seafoodthree.webp" alt="Menu three" class="menu-item">
        </div>
        `;
    return menu;
}

renderMenu();
