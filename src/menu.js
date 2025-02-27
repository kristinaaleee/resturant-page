import menuImage from "./menu.png"
export { Menu };

function Menu() {
    const container = document.createElement('div');
    container.setAttribute('id', 'menu-container');
    const menu = document.createElement('img')
    menu.src = menuImage
    
    container.appendChild(menu);

    return container;
}