
// ==================================
// MENU RESPONSIVO
// ==================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Abre e fecha o menu no celular
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ==================================
// FECHAR MENU AO CLICAR EM UM LINK
// ==================================

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ==================================
// SALVAR CURRÍCULO EM PDF
// ==================================

const printButton = document.getElementById("print-btn");

printButton.addEventListener("click", () => {

    window.print();

});
