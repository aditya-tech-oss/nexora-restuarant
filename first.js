console.log("HELLO WORLD !!!");

// VARIABLES //

let menubton = document.querySelector("#menubton");
let menu = document.querySelector("#menu");
let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let textarea = document.querySelector("#textarea");
let submit = document.querySelector("#submit");
let formStatus = document.querySelector("#form-status");


// Coding // 

menubton.addEventListener("click", function() {
    menu.scrollIntoView({
        behavior : "smooth"
    })
})

form.addEventListener("submit" , function(event){
    event.preventDefault();
    formStatus.textContent = "YOUR MESSAGE HAVE BEEN RECIEVED ! ! !";
    form.reset();
})