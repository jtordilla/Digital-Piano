const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

let bottomRightWhiteKey = 60;
let whiteKeyLength = 200;

let upperLeftKeyBlack = 40;
let blackKeyWidth = 40;
let blackKeyLength = 120;
let keyOffset = 60;

const inputBox = document.getElementById("input-box");
const setButton = document.getElementById("set-button");
const showInstructions = document.getElementById("show-instructions");
const message = document.getElementById("user-message");
const instructionTable = document.getElementById("instructions");

let pressed = false;
let hidden = true;

const synth = new Tone.Synth().toDestination();
/*
const polySynth = new Tone.PolySynth().toDestination();
polySynth.set({detune: -1200});
*/
instructionTable.style.display = "none";

function drawPiano() {
    for (var i = 0; i < 8; i++) {
        ctx.strokeRect(0, 0, bottomRightWhiteKey, whiteKeyLength);
        bottomRightWhiteKey += keyOffset;
        if (i < 2) {
            ctx.fillRect(upperLeftKeyBlack, 0, blackKeyWidth, blackKeyLength);
            upperLeftKeyBlack += keyOffset;
        } else if (i > 3 && i < 6) {
            ctx.fillRect(
                upperLeftKeyBlack + keyOffset,
                0,
                blackKeyWidth,
                blackKeyLength
            );
            upperLeftKeyBlack += keyOffset;
        }
    }
}

function draw() {
    drawPiano();
}

setInterval(draw, 10);
draw();

//mousePos and key press to play note using tone lib
function playNote(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("X coord: " + x + "\n" + "Y coord: " + y);

    //white keys
    if (x < 40 || (y > 120 && x < 60) || event.keyCode == 65) {
        console.log("C1");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(0, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(0, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("C4", "8n");
    } else if ((x > 80 && x < 100) || (y > 120 && x > 60 && x < 120) || event.keyCode == 83) {
        console.log("D");
        let smallKeySpace = 20;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(80, 0, smallKeySpace, whiteKeyLength);
        ctx.fillRect(60, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("D4", "8n");
    } else if ((x > 140 && x < 180) || (y > 120 && x > 120 && x < 180) || event.keyCode == 68) {
        console.log("E");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(140, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(120, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("E4", "8n");
    } else if ((x > 180 && x < 220) || (y > 120 && x > 180 && x < 240) || event.keyCode == 70) {
        console.log("F");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(180, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(180, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("F4", "8n");
    } else if ((x > 260 && x < 280) || (y > 120 && x > 240 && x < 300) || event.keyCode == 71) {
        console.log("G");
        let smallKeySpace = 20;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(260, 0, smallKeySpace, whiteKeyLength);
        ctx.fillRect(240, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("G4", "8n");
    } else if ((x > 320 && x < 340) || (y > 120 && x > 300 && x < 360) || event.keyCode == 72) {
        console.log("A");
        let smallKeySpace = 20;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(320, 0, smallKeySpace, whiteKeyLength);
        ctx.fillRect(300, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("A4", "8n");
    } else if ((x > 380 && x < 420) || (y > 120 && x > 360 && x < 400) || event.keyCode == 74) {
        console.log("B");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(380, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(360, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("B4", "8n");
    } else if ((x > 420 && x < 460) || (y > 120 && x > 420) || event.keyCode == 75) {
        console.log("C");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "gainsboro";
        ctx.fillRect(420, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(420, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        synth.triggerAttackRelease("C5", "8n");
    }

    //black keys
    else if ((x > 40 && x < 80 && y < 120) || event.keyCode == 87) {
        console.log("C#1/Db1");
        synth.triggerAttackRelease("C#4", "8n");
    } else if ((x > 100 && x < 140 && y < 120) || event.keyCode == 69) {
        console.log("D#/Eb");
        synth.triggerAttackRelease("D#4", "8n");
    } else if ((x > 220 && x < 260 && y < 120) || event.keyCode == 84) {
        console.log("F#/Gb");
        synth.triggerAttackRelease("F#4", "8n");
    } else if ((x > 280 && x < 320 && y < 120) || event.keyCode == 89) {
        console.log("G#/Ab");
        synth.triggerAttackRelease("G#4", "8n");
    } else if ((x > 340 && x < 380 && y < 120) || event.keyCode == 85) {
        console.log("A#/Bb");
        synth.triggerAttackRelease("A#4", "8n");
    } else if ((x > 460 && y < 120) || event.keyCode == 79) {
        console.log("C#2/Db2");
        synth.triggerAttackRelease("C#5", "8n");
    }
}

function liftNote(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    //white keys only
    if (x < 40 || (y > 120 && x < 60) || event.keyCode == 65) {
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(0, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(0, 0, fullKeySpace, whiteKeyLength2);
    } else if ((x > 80 && x < 100) || (y > 120 && x > 60 && x < 120) || event.keyCode == 83) {
        let smallKeySpace = 20;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(80, 0, smallKeySpace, whiteKeyLength);
        ctx.fillRect(60, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(60, 0, fullKeySpace, whiteKeyLength2);
    } else if ((x > 140 && x < 180) || (y > 120 && x > 120 && x < 180) || event.keyCode == 68) {
        console.log("E");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(140, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(120, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(120, 0, fullKeySpace, whiteKeyLength2);
    } else if ((x > 180 && x < 220) || (y > 120 && x > 180 && x < 240) || event.keyCode == 70) {
        console.log("F");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(180, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(180, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(180, 0, fullKeySpace, whiteKeyLength2);
    } else if ((x > 260 && x < 280) || (y > 120 && x > 240 && x < 300) || event.keyCode == 71) {
        console.log("G");
        let smallKeySpace = 20;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(260, 0, smallKeySpace, whiteKeyLength);
        ctx.fillRect(240, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(240, 0, fullKeySpace, whiteKeyLength2);
    } else if ((x > 320 && x < 340) || (y > 120 && x > 300 && x < 360) || event.keyCode == 72) {
        console.log("A");
        let smallKeySpace = 20;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(320, 0, smallKeySpace, whiteKeyLength);
        ctx.fillRect(300, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(300, 0, fullKeySpace, whiteKeyLength2);
    } else if ((x > 380 && x < 420) || (y > 120 && x > 360 && x < 400) || event.keyCode == 74) {
        console.log("B");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(380, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(360, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(360, 0, fullKeySpace, whiteKeyLength2);
    } else if ((x > 420 && x < 460) || (y > 120 && x > 420) || event.keyCode == 75) {
        console.log("C");
        let bigKeySpace = 40;
        let whiteKeyLength = 120;
        let fullKeySpace = 60;
        let whiteKeyLength2 = 200;
        ctx.fillStyle = "white";
        ctx.fillRect(420, 0, bigKeySpace, whiteKeyLength);
        ctx.fillRect(420, whiteKeyLength, fullKeySpace, whiteKeyLength2);
        ctx.strokeRect(420, 0, fullKeySpace, whiteKeyLength2);
    }
}

myCanvas.addEventListener("mousedown", function(event) {
    playNote(myCanvas, event);
});
document.addEventListener("keydown", function(event) {
    playNote(myCanvas, event);
    /*
    if (!pressed){
        pressed = true;
        playNote(myCanvas, event);
    }*/
});
document.addEventListener("keyup", function(event) {
    liftNote(myCanvas, event);
});
document.addEventListener("mouseup", function(event) {
    liftNote(myCanvas, event);
})

function setUserText() {
    if (!localStorage.getItem("name")) {
        let userName = inputBox.value;
        localStorage.setItem("name", userName);
    } else {
        if (inputBox.value !== localStorage.getItem("name")) {
            let userName = inputBox.value;
            localStorage.setItem("name", userName);
            let userMessage = "Welcome, " + userName + "!";
            document.getElementById("user-message").textContent = userMessage;
        } else {
            let userName = localStorage.getItem("name");
            let userMessage = "Welcome, " + userName + "!";
            document.getElementById("user-message").textContent = userMessage;
        }
    }
}

function displayInstructions() {
    if (hidden) {
        instructionTable.style.display = "";
        hidden = false;
    } else {
        instructionTable.style.display = "none"; 
        hidden = true;
    }
}

function displayMessage() {
    if (!localStorage.getItem("name")) {
        document.getElementById("user-message").textContent = "Welcome, new user!";
    } else {
        document.getElementById("user-message").textContent =
            "Welcome, " + localStorage.getItem("name") + "!";
    }
}

displayMessage();

setButton.addEventListener("click", setUserText);
showInstructions.addEventListener("click", displayInstructions);

/*
TO DO
1. instructions
2. buttons for octaves
3. keys for octaves
4. polyphonics
5. professional design
6. push to static hosting
*/
