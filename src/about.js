import '../src/style.css';

export function renderAbout() {
    function topHeader() {
        const header = document.createElement('header');
        header.classList.add('top-header');
        header.innerHTML = `
            <div class="top-header-container">
                <div class="top-header-name"><h1>Chuey's</h1></div>
                <div class="top-header-menu">
                    <button class="btn" onClick="topHeader()">Home</button>
                    <button class="btn" onClick="renderMenu()">Menu</button>
                    <button class="btn" onClick="renderAbout()">About</button>
                </div>
            </div>
        `;
        return header;
    }
    
    document.body.appendChild(topHeader());
    
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
}

// document.querySelector('button').addEventListener('click', renderAbout);