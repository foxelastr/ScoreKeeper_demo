const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}



const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#finishScore')
let isGameOver = false
let winningScore = 5
let matchScore = winningScore - 1

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score !== matchScore || opponent.score !== matchScore) {
            if (player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add('has-text-success')
                opponent.display.classList.add('has-text-danger')
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
        }
        else {
            winningScore += 1
            matchScore += 1
        }
    }
    player.display.textContent = player.score
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
})

resetButton.addEventListener('click', function () {
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
})


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });