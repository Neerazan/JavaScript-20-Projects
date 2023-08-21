const form = document.getElementById('form');
const passsword1El = document.getElementById('password1');
const passsword2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function processFormData(event) {
    event.preventDefault();
    
    //Validate Form
    validateForm();
}

function validateForm() {
    //using contraint API
    isValid = form.checkValidity();
    
    //Style main message for an error
    message.textContent = 'Please fill out all fields.'
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

//Event Listeners
form.addEventListener('submit', processFormData);