// Selectam elementele HTML
const name = document.getElementById("name");
const subject = document.getElementById("Subject");
const message = document.getElementById("message");

const form = document.getElementsByTagName("form")[0];

// mailto:X-ulescu@gmail.com?subject=subiect&body=mesaj

const emaillink = "mailto:adresa@email.com";

form.addEventListener("submit", sendMsg);

function sendMsg(event) {
    event.preventDefault();

    const url = emaillink + "?subject=" + subject.value + "&body=" + `New message from ${name.value}` + message.value;

    console.log(url);
    window.location.href=url;
}