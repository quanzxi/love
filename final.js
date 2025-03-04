let messages = ["Really?", "Sure ka ba?", "You swear?", "Think again!", "No joke ba yan!?", "Talagaaaa?", "Totoo?", "Weh talaga "];
let noCount = 0;
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messageText = document.getElementById("message");

noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    // Show SweetAlert2 pop-up, but do nothing after clicking OK
    Swal.fire({
        title: "Nooooo! 😡",
        text: "You shouldn’t be clicking No!",
        icon: "error",
        confirmButtonText: "Okay, I won’t 😢"
    });
    // Do nothing after this pop-up, the loop won't continue
}

function acceptLove() {
    if (noCount < messages.length) {
        // Start the loop that would have happened when clicking "No"
        messageText.innerText = messages[noCount];
        noCount++;

        // Make "No" button bigger and "Yes" button smaller
        if (noCount < messages.length) {
            noButton.style.transform = `scale(${1 + noCount * 0.1})`;
            yesButton.style.transform = `scale(${1 - noCount * 0.1})`;
        }

        // On the last message, make "Yes" button bigger instead
        if (noCount === messages.length) {
            yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
            noButton.style.display = "none"; // Hide "No" button
        }
    } else {
        // Once the loop is finished, show the final love message
        document.getElementById("valentine").innerHTML = `
            <img src="https://media1.tenor.com/m/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
            <div class="question">YAYAYYAYAYAYAY I LOVE YOU SO MUCH MY LOVEEEE mwehehe❤️</div>
        `;
        launchConfetti();
        startHeartRain();
    }
}

function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startHeartRain() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
