import './style.css';
import personImg from './person.webp';

export function renderAbout() {
    const pageContent = document.querySelector('#pageContent');
    const about = document.createElement('div');
    about.classList.add('about-container');
    about.innerHTML = `
        <h2>About Us</h2>
        <img src="${personImg}" alt="Owner Chuey" class="personImg">
        <p>Chuey's is a family owned and operated restaurant located in the heart of the city. We offer a wide variety of dishes that are sure to please your taste buds. Our menu includes a variety of appetizers, entrees, and desserts. We also offer a full bar with a wide selection of wines, beers, and cocktails. Whether you are looking for a quick bite to eat or a full meal, Chuey's has something for everyone. Come in and try our delicious food today!</p>
        <h3>Tell Us About You!</h3>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <input type="submit" value="Submit">
        </form>
        <h4>Contect Us</h4>
        <p>Phone: 123-456-7890</p>
        <p>Email: chuchuuu@shortstack.com</p>
    `;
    pageContent.appendChild(about); 
}

