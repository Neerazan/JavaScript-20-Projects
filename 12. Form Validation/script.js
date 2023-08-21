const form = document.getElementById('form');
const passsword1El = document.getElementById('password1');
const passsword2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function processFormData(event) {
    event.preventDefault();
    
    //Validate Form
    validateForm();

    //Submit data if valid
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    //Do something with user data
    console.log(user);
}

function validateForm() {
    //using contraint API
    isValid = form.checkValidity();
    
    //Style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all fields.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return
    }
    
    //Check to see if password match
    if(passsword1El.value === passsword2El.value) {
        passwordsMatch = true;
        passsword1El.style.borderColor = 'green';
        passsword2El.style.borderColor = 'green';
    }else {
        passwordsMatch = false;
        message.textContent = 'Make Sure Passwords Match.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passsword1El.style.borderColor = 'red';
        passsword2El.style.borderColor = 'red';
        return
    }

    // If form is valid or password match
    if(isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

//Event Listeners
form.addEventListener('submit', processFormData);