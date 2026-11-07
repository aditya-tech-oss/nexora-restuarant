
console.log("NEXORA WEBSITE LOADED");

// ================= VARIABLES =================

let menubton = document.querySelector("#menubton");

let menu = document.querySelector("#menu");

let categoryButtons = document.querySelectorAll(".category-btn");

let menuCards = document.querySelectorAll(".menu-card");

let form = document.querySelector("#contact-form");

let formStatus = document.querySelector("#form-status");


// ================= EXPLORE MENU BUTTON =================

menubton.addEventListener("click", function() {

    menu.scrollIntoView({
        behavior: "smooth"
    });

});


// ================= MENU CATEGORY FILTER =================

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let selectedCategory = button.dataset.category;

        // Remove active class from all buttons

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button

        button.classList.add("active");


        // Show matching menu cards

        menuCards.forEach(function(card) {

            let cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// ================= CONTACT FORM =================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    formStatus.textContent =
        "THANK YOU! YOUR MESSAGE HAS BEEN RECEIVED.";

    form.reset();

});
