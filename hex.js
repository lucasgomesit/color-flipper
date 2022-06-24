const button = document.querySelector(".click-button");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F'];
const colorName = document.querySelector('.color-name');

button.addEventListener('click', function(){
    let colorsHex = '#';

    for(i = 0; i < 6; i++){
        colorsHex += colors[Math.floor(Math.random() * colors.length)]
    }
    
    document.body.style.backgroundColor = colorsHex;
    colorName.textContent = colorsHex;
});

