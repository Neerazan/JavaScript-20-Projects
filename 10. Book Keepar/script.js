const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose =  document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl =  document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

//Show Modal, Fouse on Input
function showModal() {
    modal.classList.add("show-modal");
    websiteNameEl.focus();
}



//Model Event listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})
window.addEventListener('click', (event) => {
    event.target === modal ? modal.classList.remove('show-modal') : false
})


//Validate Form
function validate(nameValue, urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

    const regex = new RegExp(expression);

    if(!nameValue || !urlValue) {
        alert("Please submit values for both fields.")
        return false;
    }

    if(!urlValue.match(regex)){
        alert("Please prvoide a valid web address...");
        return false;
    }

    //Valid
    return true;
}
//Handle Data from Form
function storeBookmark(event) {
    event.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!urlValue.includes('http://', 'https://')){
        urlValue = `https://${urlValue}`;
    }
    console.log(nameValue, urlValue);
    
    if(!validate(nameValue, urlValue)) {
        return false;
    }
}

//General Event Listeners
bookmarkForm.addEventListener('submit', storeBookmark)