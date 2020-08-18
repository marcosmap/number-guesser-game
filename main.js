// definimos variables
const form = document.getElementById('form');
const result = document.querySelector('.result');
const btn = document.getElementById('btnSubmit');

// numero de intentos
let tries = 3;
// numero a adivinar
const numberRandom = parseInt(Math.random() * 10) + 1;
// guardamos el numero ingresado
let numberGuess;

// agregamos evento
form.addEventListener('submit', getGame);

// agregamos la funcion
function getGame(e) {
    if(tries > 0) {
        numberGuess = document.getElementById('number-guess').value;
        if(numberGuess === '') {
            result.innerHTML = `
                <p class="empty-form">Enter a number, please!</p>
            `;
            result.style.color = 'red';
            setTimeout(function() {
                document.querySelector('.empty-form').remove();
            }, 2000);
        }
        else {
            if(parseInt(numberGuess) === numberRandom) {
                tries = 0;
                result.innerHTML = `
                    <p class="game-win">Correct! The number is ${numberRandom} You win :D</p>
                `;
                result.style.color = 'green';
                form.reset();
                document.getElementById('number-guess').disabled = true;
                btn.value = 'Play again';
            }
            else {
                tries--;
                if(tries === 0) {
                    result.innerHTML = `
                        <p class="game-over">Game over :(</p>
                    `;
                    result.style.color = 'red';
                    form.reset();
                    document.getElementById('number-guess').disabled = true;
                    btn.value = 'Play again';
                }
                else {
                    result.innerHTML = `
                        <p class="incorrect">Incorrect number, try again! Remaining attempts: ${tries}</p>
                    `;
                    result.style.color = 'red';
                }
            }
        }
    }
    else if(tries === 0) {
        btn.onclick = location.reload();
    }

    // console.log(numberGuess, numberRandom);

    e.preventDefault();
}