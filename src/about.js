import coffee from './about.jpg'
export { About };

function About() {
    const container = document.createElement('div');
    container.setAttribute('id', 'about-container');
    
    const titleText = document.createElement('h1');
    titleText.textContent = 'About Us' 

    const bodyWrapper = document.createElement('div');
    const imageWrapper = document.createElement('div')
    imageWrapper.setAttribute('id', 'about-image')
    const aboutImage = document.createElement('img');
    aboutImage.src = coffee;
    const aboutText = document.createElement('p');
    aboutText.textContent = "Welcome to The Cozy Brew, your go-to spot for rich, aromatic coffee and a relaxing atmosphere perfect for diving into a good book. At The Cozy Brew, we believe that great coffee isn't just a drink-it's an experience. Our beans are carefully selected from the best local roasters, ground fresh, and brewed with precision to deliver the smoothest, most flavorful cups. Whether you're in the mood for a bold espresso, a creamy latte, or a pour-over, we've got something to satisfy every coffee lover's taste. \r\n \r\n But we're more than just a coffee shop. We're a place to unwind, explore, and enjoy a moment of peace. Our shop is designed with comfort in mind-soft chairs, warm lighting, and cozy corners perfect for reading. We've filled our shelves with a curated selection of books, so whether you're looking to lose yourself in fiction, explore new ideas, or simply enjoy a quiet escape, we've got the perfect read waiting for you."

    const aboutCloser = document.createElement('h2');
    aboutCloser.textContent = "So lose yourself in fiction, explore new ideas, or simply enjoy a quiet escape, we've got the perfect read waiting for you."

    imageWrapper.appendChild(aboutImage)
    bodyWrapper.appendChild(imageWrapper);
    bodyWrapper.appendChild(aboutText);

    container.appendChild(titleText);
    container.appendChild(bodyWrapper);
    container.appendChild(aboutCloser);

    return container;

}