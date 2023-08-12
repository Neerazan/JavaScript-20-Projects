const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

//Disable/Enable button
function toggleButton () {
    button.disabled = !button.disabled
}

//passing joke to voiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: "eb3690e1b5f34d5599ca74f346c0a224",
        src: joke,
        hl: "en-us",
        v: "Linda",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    });
}

// Get jokes from joke API
async function getJokes () {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,sexist';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(data.setup){
            joke = `${data.setup} ... ${data.delivery}`;
        }else{
            joke = data.joke
        }
        tellMe(joke);

        //disable button
        toggleButton();
    }catch(error){
        console.log("can't fetch", error)
    }
}

//Event Listeaners
button.addEventListener('click', getJokes);

audioElement.addEventListener('ended', toggleButton);