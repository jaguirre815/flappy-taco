   
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;
let sound = new Audio("./audio/Intro-Theme.mp3");


//pipes animaiton
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random(3) * 300) + 150);
    hole.style.top = random + "px";
    counter++;
    displayScore();
    sound.play();
});
alert("click OK to Start Game\nPress any key to jump")
//gravity
setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500 - characterTop);

    


    if ((characterTop > 420) || ((blockLeft < 90) && (blockLeft > 10) && ((cTop < holeTop - 45) || (cTop > holeTop + 125)))) {
        alert("You Are Dead Homie!\nClick Ok to Restart\nScore:"+ counter );   
        character.style.top = 100 + "px";
        counter = 0;
        displayScore();
    }
}, 10  );
    

function jump() {
    character.src="./images/tacoman-1.png";
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
            character.src="./images/tacoman.png";
        }
        jumpCount++;
    }, 10         );
}                    
function displayScore() {
    document.getElementById('score').innerText = counter;  
}












