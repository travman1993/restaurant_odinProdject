import './style.css';
import personImg from './person.webp';

export function renderAbout() {
    const pageContent = document.querySelector('#pageContent');
    const about = document.createElement('div');
    about.classList.add('about-container');
    about.innerHTML = `
    <div class="aboutContain">
        <h2 class="aboutText">About Us</h2>
        <img src="${personImg}" alt="Owner Chuey" class="personImg">
        <p class="chuey">Chuey's is a family owned and operated restaurant located in the heart of the city. We offer a wide variety of dishes that are sure to please your taste buds. Our menu includes a variety of appetizers, entrees, and desserts. We also offer a full bar with a wide selection of wines, beers, and cocktails. Whether you are looking for a quick bite to eat or a full meal, Chuey's has something for everyone. Come in and try our delicious food today!</p>
        <h3>Tell Us About You!</h3>
        <form class="onlyForm">
            <label for="name">Name:</label>
            <input style="text-align:center;" type="text" id="name" name="name" placeholder="Ex:Jim Bob">
            <label for="email">Email:</label>
            <input style="text-align:center;" type="email" id="email" name="email" placeholder="Ex: email@gmail.com">
            <label for="message">Message:</label>
            <textarea style="text-align:center;" id="message" name="message" placeholder="Ex: Type message"></textarea>
            <input type="submit" value="Submit">
        </form>
        <div class="contactText">
            <h4>Contact Us</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: chuchuuu@shortstack.com</p>
        </div>
    </div>
    `;
    pageContent.appendChild(about); 
}

