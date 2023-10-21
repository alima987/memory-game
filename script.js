const memoryCards = document.querySelectorAll('.memory-card'); // Обратите внимание на исправленный селектор
let isFlipped = false;
let lockCard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockCard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        isFlipped = false;
        secondCard = this;

        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.dataset.animal === secondCard.dataset.animal) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetCards();
}

function unflipCards() {
    lockCard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetCards();
    }, 1000); // Уменьшил задержку до 1000 миллисекунд (1 секунда)
}

function resetCards() {
    [isFlipped, lockCard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

memoryCards.forEach(card => card.addEventListener('click', flipCard));


