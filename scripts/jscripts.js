

function mostraMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}



var centralMenu = document.getElementById("central-menu");
var scrolledMenu = document.getElementById("scrolled-menu");

window.onscroll = function() {
    if (window.pageYOffset > 50) {
        centralMenu.style.display = "none";
        scrolledMenu.style.display = "block";
    } else {
        centralMenu.style.display = "block";
        scrolledMenu.style.display = "none";
    }
}


var dropdownMenu = document.getElementById("dropdown-menu");

// Aggiungi l'evento di clic a ciascuna voce del menu central
var centralMenuItems = document.querySelectorAll("#central-menu li a");
centralMenuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        //codice per mostrare il menu a tendina
        mostraMenu();
    });
});

// Aggiungi l'evento di clic a ciascuna voce del menu scrolled
var scrolledMenuItems = document.querySelectorAll("#scrolled-menu li a");
scrolledMenuItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        // codice per mostrare il menu a tendina
        mostraMenu();
    });
});


document.getElementById('menu-1-toggler').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('clic');
    console.log(document.getElementById('menu-1'));
    document.getElementById('menu-1').classList.add('show');
})
