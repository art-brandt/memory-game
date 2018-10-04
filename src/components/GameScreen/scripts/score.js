const score = {
    result: 0,
    add: function() {
        let lostCard = document.querySelectorAll('.back');
        score.result = score.result + lostCard.length * 42;
    },
    remove: function() {
        let lostCard = document.querySelectorAll('.back');
        score.result = score.result - lostCard.length * 42;
    },
    init: function() {
        let scoreSpan = document.querySelector('#score');
        if (score.result <= 0) {
            score.result = 0;
            scoreSpan.textContent = score.result;
        } else {
            scoreSpan.textContent = score.result;
        }
    }
}

export default score;