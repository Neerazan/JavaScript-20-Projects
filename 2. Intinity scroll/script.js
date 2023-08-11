//helper function to set attributes on DOM elements
function setAttribute(element, attributes) {
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = '1qLhn7ua3lVmm6ICI83uC2L2AcjnudxJHiZAyKTF2nc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=mountains`;

//create elements for links and photos, add to DOM
function displayPhotos(){
    //Run function for each object in photosArray
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
    }catch(error){
        //catch error here
    }
}

//on Load
getPhotos()