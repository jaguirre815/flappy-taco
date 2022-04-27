//variables
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;

//pipes animaiton
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 500) + 100);
    hole.style.top = random + "px";
    counter++;
});
//gravity
setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }


    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(450 - characterTop);


    if ((characterTop > 400) || ((blockLeft < 5) && (blockLeft > -5) && ((cTop < holeTop) || (cTop > holeTop + 500)))) {
        //alert("You Are Dead Homie! Score: " + (counter - 1));
        character.style.top = 20 + "px";
        counter = 0;
    }
}, 10  );

function jump() {
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
        }
        jumpCount++;
    }, 5   );
}                    

                 


