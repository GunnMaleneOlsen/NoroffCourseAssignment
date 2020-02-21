
const contactForm = document.querySelector("#contactForm");
const formError = document.querySelectorAll(".form-error");
const formControll = document.querySelectorAll(".form-controll");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

contactForm.addEventListener("submit", function(event){
    //stop the page reloading
    event.preventDefault();

    //formError.style.display = "none";
    /*I wanted to target the form-error class to put 'display = "none"' on all the errors when hitting submit,
    but I was not able to do this when using 'querySelectorAll', though it did work on the first one
    when using 'queryselctor'. But since I could not achive this on the form-error class, 
    I instead put the 'display = "none"'in the else statemenst, 
    though I feel that it's not the most optimal solution it's the one I chose to go with. */

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const messageValue = message.value;

    //checing if the input is epmty
    if (notEmptyValidation(firstNameValue) === false){
        const firstNameError = document.getElementById("firstNameError");
        firstNameError.style.display = "block";
    }
    else {
        firstNameError.style.display = "none";

    }

    if (notEmptyValidation(lastNameValue) === false){
        const lastNameError = document.getElementById("lastNameError");
        lastNameError.style.display = "block";
    }
    else {
        lastNameError.style.display = "none";
    }

    if (notEmptyValidation(emailValue) === false){
        const emailError = document.getElementById("emailError");
        emailError.style.display = "block";
    }
    else {
        emailError.style.display = "none";
    }

    //checking if the email is a valid email

    if (validateEmailFormat(emailValue) === false){
        const emailInvalidError = document.getElementById("invalidEmailError");
        emailInvalidError.style.display = "block";
    }
    else {
        const emailInvalidErrorDisplayNone = document.getElementById("invalidEmailError");
        emailInvalidErrorDisplayNone.style.display = "none";
    }

    //checking if the form has at least 10 characters

    if (validateNumOfCHar(messageValue) === false){
        const messageError = document.getElementById("messageError");
        messageError.style.display = "block";

    }
    else {
        messageError.style.display = "none";
    }


});


//All the validation functions down bellow

//text valdiation function 
function notEmptyValidation(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmailFormat (email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function validateNumOfCHar(value){
    const trimmedValue = value.trim();
    /*I put the trim function on, though I know that space is a valid character, 
    I don't feel like the eventual user should be able to send a 10 character long 
    message conatining only space. */

    if (trimmedValue.length >= 10){
        return true;
    }
    else {
        return false;
    }

}