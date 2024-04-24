const minusIcon = document.querySelector('.question_section .minus');
const answer = document.querySelector('.question_section:first-child .card_answer');

minusIcon.addEventListener('click', function() {
    answer.classList.toggle('hidden');

    if(minusIcon.alt === "minus-icon") {
        minusIcon.src = "./assets/images/icon-plus.svg";
        minusIcon.alt = "plus-icon";
    } else {
        minusIcon.src = './assets/images/icon-minus.svg';
        minusIcon.alt = "minus-icon";
    }
});

const addIcons = document.querySelectorAll('.question_section .plus');
const hiddenAnswers = document.querySelectorAll('.question_section .card_answer.hidden');

addIcons.forEach((addIcon, index) => {
    addIcon.addEventListener('click', function() {
        const hiddenAnswer = hiddenAnswers[index];

        hiddenAnswer.classList.toggle('hidden');

        if(addIcon.alt === 'plus-icon') {
            addIcon.src = './assets/images/icon-minus.svg';
            addIcon.alt = 'minus-icon';
        } else {
            addIcon.src = './assets/images/icon-plus.svg';
            addIcon.alt = 'plus-icon';
        }
    });
});