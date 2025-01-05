const cards = document.querySelectorAll(".card");
let currentIndex = 0;

function showNextCard() {
    // Reset all cards to remove 'active' and 'next' classes
    cards.forEach((card) => {
        card.classList.remove("active", "next");
    });

    // Set the current card as 'active'
    cards[currentIndex].classList.add("active");

    // Set the next card in the sequence as 'next'
    const nextIndex = (currentIndex + 1) % cards.length;
    cards[nextIndex].classList.add("next");

    // Update the index for the next cycle
    currentIndex = nextIndex;
}

// Initialize the first card as active
cards[currentIndex].classList.add("active");

// Automatically switch cards every 3 seconds
setInterval(showNextCard, 3000);

const messages = [
"Wishing my best friend a day filled with love and joy!",
    "May your day be as amazing as our friendship!",
    "Here's to a friend who's always there to bring a smile!",
    "Hope your day is filled with happiness, laughter, and all things wonderful!"
];

let currentMessageIndex = 0;
const messageElement = document.querySelector(".message");

function changeMessage() {
    // Change the text of the message
    messageElement.textContent = messages[currentMessageIndex];

    // Update to the next message index (looping)
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

// Start the message cycle
changeMessage();
setInterval(changeMessage, 4000); // Change every 6 seconds (same duration as animation)
