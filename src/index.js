import "./style.css";
import { Home } from "./home.js";
import { About } from "./about.js";
import { Menu } from "./menu.js"


let content = document.getElementById('content');
content.appendChild(Home());
// const home = Home();
// const about = About();
// const menu = Menu();

function delChild() {
        while (content.firstChild) {
        content.firstChild.remove()
    }} 

document.addEventListener("click", function(event) {
    switch (event.target.id) {
        case "About":
            delChild()
            content.appendChild(About())
            break;
        case "Home":
            delChild()
            content.appendChild(Home())
            break;
        case "Menu":
        case "view-menu":
            delChild()
            content.appendChild(Menu())
            break;
        default:
            break;
    }
});


