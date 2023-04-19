

function mostraMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
}


document.getElementById('menu-1-toggler').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('clic');
    console.log(document.getElementById('menu-1'));
    document.getElementById('menu-1').classList.add('show');
})
