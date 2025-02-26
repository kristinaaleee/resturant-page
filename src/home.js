import heroBackground from "./hero-background.jpg"
import bookImage from "./book.jpg"
import coffeeImage from "./coffee.jpg"
import pastryImage from "./baked-good.jpg"
export { Home };

function Home() {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    const heroWrapper = document.createElement('div');
    heroWrapper.classList.add('hero-wrapper');
    const featureWrapper = document.createElement('div');
    featureWrapper.classList.add('feature-wrapper');
    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('info-wrapper');


    //hero wrapper, needs background = image
    const heroImage = document.createElement('img');
    heroImage.src = heroBackground;
    const leftHeroWrapper = document.createElement('div');
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'For the Coffee & \r\nBook Lovers';
    const heroText = document.createElement('p');
    heroText.textContent = 'Welcome to The Cozy Brew, where great coffee meets a \r\npeaceful reading escape. Come in, take a seat, and let the \r\naroma of our coffee and the comfort of our books \r\nsurround you.';
    const heroAction = document.createElement('button');
    heroAction.setAttribute('id', 'view-menu')
    heroAction.textContent = 'View Menu'
    

    leftHeroWrapper.appendChild(heroTitle);
    leftHeroWrapper.appendChild(heroText);
    leftHeroWrapper.appendChild(heroAction);

    heroWrapper.appendChild(leftHeroWrapper);heroWrapper.appendChild(heroImage);
    

    //feature wrapper
    const setOneWrapper = document.createElement('div');
    const imageOneMask = document.createElement('div');
    const imageOne = document.createElement('img');
    imageOne.setAttribute('id', 'feature-one');
    imageOne.src = bookImage;
    const textOne = document.createElement('p');
    textOne.textContent = 'Variety of books for every type of reader'

    const setTwoWrapper = document.createElement('div');
    const imageTwoMask = document.createElement('div');
    const imageTwo = document.createElement('img')
    imageTwo.setAttribute('id', 'feature-two');
    imageTwo.src = coffeeImage;
    const textTwo = document.createElement('p');
    textTwo.textContent = 'Every cup of coffee made with care'

    const setThreeWrapper = document.createElement('div');
    const imageThreeMask = document.createElement('div');
    const imageThree = document.createElement('img')
    imageThree.setAttribute('id', 'feature-three');
    imageThree.src = pastryImage;
    const textThree = document.createElement('p');
    textThree.textContent = 'Baked goods made fresh daily'

    imageOneMask.appendChild(imageOne);
    setOneWrapper.appendChild(imageOneMask)
    setOneWrapper.appendChild(textOne);
    imageTwoMask.appendChild(imageTwo);
    setTwoWrapper.appendChild(imageTwoMask);
    setTwoWrapper.appendChild(textTwo);
    imageThreeMask.appendChild(imageThree);
    setThreeWrapper.appendChild(imageThreeMask);
    setThreeWrapper.appendChild(textThree);

    featureWrapper.appendChild(setOneWrapper);
    featureWrapper.appendChild(setTwoWrapper);
    featureWrapper.appendChild(setThreeWrapper);

    //info wrapper
    const locationWrapper = document.createElement('div');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.textContent = '12345 Coffee Book Way \r\n Manhattan, NY \r\n 67899'

    const hoursWrapper = document.createElement('div');
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours of Operation';
    const hoursText = document.createElement('p');
    hoursText.textContent = '7:00 AM - 7:00 PM Daily';

    const phoneWrapper = document.createElement('div');
    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = 'Telephone';
    const phoneText = document.createElement('p');
    phoneText.textContent = '(123) - 456 - 7891';

    locationWrapper.appendChild(locationHeader);
    locationWrapper.appendChild(locationText);
    hoursWrapper.appendChild(hoursHeader);
    hoursWrapper.appendChild(hoursText);
    phoneWrapper.appendChild(phoneHeader);
    phoneWrapper.appendChild(phoneText);

    infoWrapper.appendChild(locationWrapper);
    infoWrapper.appendChild(hoursWrapper);
    infoWrapper.appendChild(phoneWrapper);

    //append to container
    container.appendChild(heroWrapper);
    container.appendChild(featureWrapper);
    container.appendChild(infoWrapper);

    return container;
}


