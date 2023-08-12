
//helper function to set attributes on DOM elements
function setAttribute(element, attributes) {
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

function updateAPIURLWithNewCount(picCount) {
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${picCount}&query=wildlife`;
}

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
let isInitialLoad = true;
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

//Unsplash API
let initialCount = 3;
const apiKey = '1qLhn7ua3lVmm6ICI83uC2L2AcjnudxJHiZAyKTF2nc';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}&query=wildlife`;

//create elements for links and photos, add to DOM
function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;

    photosArray.forEach((photo) => {
        //create<a> to link to unsplash
        const item = document.createElement('a');

        setAttribute(item, {
            href: photo.links.html,
            target: '_blank'
        });

        //create <img> for photos
        const img = document.createElement('img');
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });


        //event listeaner, check when each is finished loading
        img.addEventListener('load', imageLoaded);

        //put<img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        if(isInitialLoad){
            updateAPIURLWithNewCount(30);
            isInitialLoad = false;
        }
    }catch(error){
        //catch error here
    }
}

// check if all images were loaded
function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
    }
}

//check to see if scrolling near bottom of page, load More photos
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
})

//on Load
getPhotos()