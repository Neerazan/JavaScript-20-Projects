//Unsplash API
const count = 10;
const apiKey = '1qLhn7ua3lVmm6ICI83uC2L2AcjnudxJHiZAyKTF2nc';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=nature`;

//Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        //catch error here
    }
}

//on Load
getPhotos()