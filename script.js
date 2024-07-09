function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColorWithTransition() {
    var body = document.body;
    var currentColor = body.style.backgroundColor || '#FFFFFF';
    var newColor = getRandomColor();

    body.style.transition = 'background-color 2s'; // Duración de la transición

    body.style.backgroundColor = newColor;

    setTimeout(function() {
        changeBackgroundColorWithTransition();
    }, 2000); // Cambiar el color cada 2 segundos
}

changeBackgroundColorWithTransition(); // Iniciar el bucle de transiciones


const snowflakes = document.querySelector('.snowflakes');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
  snowflakes.appendChild(snowflake);

  snowflake.addEventListener('animationend', () => {
    snowflakes.removeChild(snowflake);
    createSnowflake();
  });
}

for (let i = 0; i < 20; i++) { // Adjust the number of snowflakes
  createSnowflake();
}

document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.controls = false;
});