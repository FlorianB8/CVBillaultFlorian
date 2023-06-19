var firstname = 'Florian'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
let lastname = 'BILLAULT';
let cptFirstname = 0;
let cptLastname=0;
let videoTrip = document.getElementById('videoTrip');
let videoCoding = document.getElementById('videoCoding');
let videoReading = document.getElementById('videoReading');
let videoGaming = document.getElementById('videoGaming');

function firstnameWriter() {
    if (cptFirstname < firstname.length) {
        document.getElementById("firstname").innerHTML += firstname.charAt(cptFirstname);
        cptFirstname++;
        setTimeout(firstnameWriter, speed);
    }
}
function lastnameWriter() {
    
    if (cptLastname < lastname.length) {
        document.getElementById("lastname").innerHTML += lastname.charAt(cptLastname);
        cptLastname++;
        setTimeout(lastnameWriter, speed);
    }
    
}
window.addEventListener('DOMContentLoaded', firstnameWriter());

window.addEventListener('DOMContentLoaded', lastnameWriter());


videoTrip.addEventListener('mouseover', () => {
    videoTrip.play();

})

videoTrip.addEventListener('mouseout', () => {
    videoTrip.pause();
})

videoCoding.addEventListener('mouseover', () => {
    videoCoding.play();

})

videoCoding.addEventListener('mouseout', () => {
    videoCoding.pause();
})

videoReading.addEventListener('mouseover', () => {
    videoReading.play();

})

videoReading.addEventListener('mouseout', () => {
    videoReading.pause();
})
videoGaming.addEventListener('mouseover', () => {
    videoGaming.play();

})

videoGaming.addEventListener('mouseout', () => {
    videoGaming.pause();
})