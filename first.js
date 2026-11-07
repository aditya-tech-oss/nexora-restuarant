console.log("HELLO WORLD !!!");

// VARIABLES //

let menubton = document.querySelector("#menubton");
let menu = document.querySelector("#menu");


// Coding // 

menubton.addEventListener("click", function() {
    menu.scrollIntoView({
        behavior : "smooth"
    })
})