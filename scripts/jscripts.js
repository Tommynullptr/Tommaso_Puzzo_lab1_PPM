

function showMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

function hideMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function() {

    window.centralMenu = document.getElementById("central-menu");
    window.scrolledMenu = document.getElementById("scrolled-menu");

    window.onscroll = function() {
        if (window.pageYOffset > 260) {
            centralMenu.style.display = "none";
            scrolledMenu.style.display = "flex";

        } else {
            centralMenu.style.display = "grid";
            scrolledMenu.style.display = "none";
        }
    }


    document.getElementById('menu-1-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('click');
        var menu = document.getElementById('menu-1');
        menu.classList.toggle('show');
    });


    document.getElementById('menu-2-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('click');
        var menu = document.getElementById('menu-2');
        menu.classList.toggle('show');
    });


    document.getElementById('menu-1x-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('click');
        var menu = document.getElementById('menu-1x');
        menu.classList.toggle('show');
    });


    document.getElementById('menu-2x-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('click');
        var menu = document.getElementById('menu-2x');
        menu.classList.toggle('show');
    });


    var centralMenuItems = document.querySelectorAll("#central-menu li button");
    centralMenuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            showMenu();
        });
    });


    var scrolledMenuItems = document.querySelectorAll("#scrolled-menu li button");
    scrolledMenuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            showMenu();
        });
    });


})

