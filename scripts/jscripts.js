

function mostraMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-1-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('clic');
        console.log(document.getElementById('menu-1'));
        document.getElementById('menu-1').classList.add('show');
    })

    document.getElementById('menu-2-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('clic');
        console.log(document.getElementById('menu-2'));
        document.getElementById('menu-2').classList.add('show');
    })

    document.getElementById('menu-1x-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('clic');
        console.log(document.getElementById('menu-1x'));
        document.getElementById('menu-1x').classList.add('show');
    })

    document.getElementById('menu-2x-toggler').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('clic');
        console.log(document.getElementById('menu-2x'));
        document.getElementById('menu-2x').classList.add('show');
    })

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


    var centralMenuItems = document.querySelectorAll("#central-menu li a");
    centralMenuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            mostraMenu();
        });
    });


    var scrolledMenuItems = document.querySelectorAll("#scrolled-menu li a");
    scrolledMenuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            mostraMenu();
        });
    });

    window.addEventListener('click', function(e) {
        var dropdownMenu = document.getElementById('dropdown-menu');
        if (e.target !== dropdownMenu && !dropdownMenu.contains(e.target)) {
            document.getElementById('menu-1').classList.remove('show');
        }
    });


})
