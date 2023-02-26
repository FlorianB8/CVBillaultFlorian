var firstname = 'Florian'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
let lastname = 'BILLAULT';
let cptFirstname = 0;
let cptLastname=0;

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

window.addEventListener('DOMContentLoaded',setTimeout(() => {
    lastnameWriter();
}, 1000))


