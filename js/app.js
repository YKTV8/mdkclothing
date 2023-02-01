// const menuItems = document.getElementById("menuItems");
// const bars = document.getElementsByClassName("menu-icon").onclick = menuToggle();

// menuItems.style.maxHeight = "0px";

// function menuToggle(){
//     if(menuItems.style.maxHeight == "200px"){
//         menuItems.style.maxHeight = "200px";
//     }
//     else{
//         menuItems.style.maxHeight = "0px";
//     }
// }

// const toggleButton = document.getElementById('hamburger-menu');
// const menu = document.getElementById('menuItems')

// toggleButton.addEventListener('click', function() {
//     menu.classList.toggle('show');
// });

function myFunction(){
    const x = document.getElementById('menuItems');
    if(x.style.display === "flex") {
        x.style.display = "none";
    }else{
        x.style.display = "flex";
    }
}