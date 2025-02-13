// import "./style.css";
import { Home } from "./home.js";
import { About } from "./about.js";
import { Menu } from "./menu.js"


let content = document.getElementById('content');
content = Home();
const button = document.querySelectorAll("button");
button.forEach(function(item) {
    item.addEventListener('click', function() {
        if (item.id = "About"){
            content = About(); 
        }
        if (item.id = "Menu"){
            content = Menu();
        }
        if (item.id = "Home"){
            content = Home();
        }
    })
})



