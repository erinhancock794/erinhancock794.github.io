// const greeting = document.getElementById("greeting");
// greeting.style.textAlign = "center";
// greeting.style.marginTop = "50px";
// const username = window.prompt("What's your name?", "Jane");
// greeting.innerHTML = "Welcome to my website, " + username + "!";

const button = document.getElementById('profilePic');

button.addEventListener('click', () => {
    button.classList.toggle('active-state');
});

const card = document.getElementById('myCard');

card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});
setTimeout(() => {
    card.textContent = isFlipped ? 'Back' : 'Front';
}, 300);
