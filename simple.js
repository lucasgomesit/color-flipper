const button = document.querySelector(".click-button");
const colors = ['red', 'green', 'lightblue', 'yellow'];
const colorName = document.querySelector('.color-name');

button.addEventListener('click', function(){
    const randomNumber = colors[Math.floor(Math.random() * colors.length)];
    colorName.textContent = randomNumber;
    document.body.style.backgroundColor = randomNumber;
    button.style.backgroundColor = randomNumber;
})

