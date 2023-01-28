const menuItems = document.getElementById("menuItems");
const bars = document.getElementsByClassName("menu-icon").onclick = menuToggle();

menuItems.style.maxHeight = "0px";

function menuToggle(){
    if(menuItems.style.maxHeight == "200px"){
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}