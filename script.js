document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".menu");
    let burger = document.querySelector(".hamburger");

    if (!menu || !burger) {
        console.error("Eroare: Elementele .menu sau .hamburger nu au fost găsite.");
        return;
    }

    burger.addEventListener("click", function () {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
            burger.innerHTML = "☰"; 
        } else {
            menu.style.display = "flex";
            burger.innerHTML = "❌"; 
        }
    });
});

function clearPlaceholder() {
    document.getElementById('searchInput').setAttribute('placeholder', '');
}

function restorePlaceholder() {
    let input = document.getElementById('searchInput');
    if (input.value.trim() === "") {
        input.setAttribute('placeholder', 'Search...');
    }
}