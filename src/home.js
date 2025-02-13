export {Home};

function Home() {
    // const container = document.createElement('div');
    // container.setAttribute('id', 'container');
    const container = document.getElementById('content')
    const heroWrapper = document.createElement('div');
    heroWrapper.classList.add('hero-wrapper');
    const featureWrapper = document.createElement('div');
    featureWrapper.classList.add('feature-wrapper');
    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('info-wrapper');


    //hero wrapper, needs background = image
    const heroImage = document.createElement('img');
    const leftHeroWrapper = document.createElement('div');
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'something something';
    const heroText = document.createElement('p');
    heroText.textContent = 'put something relevant here';
    const heroAction = document.createElement('button');
    heroAction.textContent = 'View Menu'

    leftHeroWrapper.appendChild(heroTitle);
    leftHeroWrapper.appendChild(heroText);
    leftHeroWrapper.appendChild(heroAction);

    heroWrapper.appendChild(heroImage);
    heroWrapper.appendChild(leftHeroWrapper);

    //feature wrapper
    const setOneWrapper = document.createElement('div');
    const imageOne = document.createElement('img')
    const textOne = document.createElement('p');
    textOne.textContent = 'Variety of books for every type of reader'

    const setTwoWrapper = document.createElement('div');
    const imageTwo = document.createElement('img')
    const textTwo = document.createElement('p');
    textTwo.textContent = 'Every cup of coffee made with care'

    const setThreeWrapper = document.createElement('div');
    const imageThree = document.createElement('img')
    const textThree = document.createElement('p');
    textThree.textContent = 'Baked goods made fresh daily with seasonal fruits'

    setOneWrapper.appendChild(imageOne);
    setOneWrapper.appendChild(textOne);
    setTwoWrapper.appendChild(imageTwo);
    setTwoWrapper.appendChild(textTwo);
    setThreeWrapper.appendChild(imageThree);
    setThreeWrapper.appendChild(textThree);

    featureWrapper.appendChild(setOneWrapper);
    featureWrapper.appendChild(setTwoWrapper);
    featureWrapper.appendChild(setThreeWrapper);

    //info wrapper
    const locationWrapper = document.createElement('div');
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.textContent = '12345 Coffee Book Way<br /> Manhattan, NY<br /> 67899'; //^^might not work

    const hoursWrapper = document.createElement('div');
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours of Operation';
    const hoursText = document.createElement('p');
    hoursText.textContent = '7:00 AM - 7:00PM Daily';

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
}


