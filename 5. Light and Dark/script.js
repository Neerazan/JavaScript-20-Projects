const toggleSwitch = document.querySelector('input[type="checkbox"]');


//Switch theme Dynamically
function switchTheme(event) {
    if(event.target.checked){
        // document.documentElement.setAttribute('text-size', 'bigg');
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        // document.documentElement.setAttribute('text-size', 'small');
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

//Event Listeaner
toggleSwitch.addEventListener('change', switchTheme);