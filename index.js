const carroburgCrimson = '#A7226E';
const aquaLake = '#2F9599';

const body = document.querySelector('body');
body.style.backgroundColor = 'black';

const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');

div5.style.height = '200px';
div5.style.width = '200px';
div5.style.backgroundColor = 'white';

div6.style.height = '200px';
div6.style.width = '200px';
div6.style.backgroundColor = 'white';

// Div 1
const div1Colors = [carroburgCrimson, '#EC2049', '#F26B38', '#F7DB4F', aquaLake];
const div1ColorNames = ['Carroburg Crimson', 'Che Guevara Red', 'Mandarin Oragne', 'Gilded', 'Aqua Lake']
let indexDiv1 = 0;
let indexDiv1Text = 0;

div1.style.height = '200px';
div1.style.width = '200px';
div1.style.backgroundColor = div1Colors[0];
div1.innerText = div1ColorNames[0];

div1.addEventListener('click', e => {
    indexDiv1 = (indexDiv1 + 1) % div1Colors.length;
    indexDiv1Text = (indexDiv1Text + 1) % div1ColorNames.length;
    e.target.style.backgroundColor = div1Colors[indexDiv1];
    div1.innerText = div1ColorNames[indexDiv1Text];
    indexDiv1 === 3 ? div1.style.color = 'black' : div1.style.color = 'white';
})

// Div 2
div2.style.height = '200px';
div2.style.width = '200px';
div2.style.backgroundColor = 'white';
let div2Counter = 0;
div2.innerText = div2Counter;
div2.style.color = 'black';
div2.style.fontSize = '10rem';
div2.addEventListener('click', e => {
    div2Counter < 99 ? div2Counter++ : div2Counter = 1;
    div2.innerText = div2Counter;
})

// Div 3
div3.style.height = '200px';
div3.style.width = '200px';
div3.style.backgroundColor = aquaLake;

div3.addEventListener('click', div3Roate);

isRotateOn = false;
function div3Roate(e) {
    if (isRotateOn === false && e.offsetX > 100) {rotateClockwise()} 
    else if (isRotateOn === false && e.offsetX < 100) {rotateAnticlockwise()}
}

function rotateClockwise() {
    isRotateOn = true;
    div3.classList.add('rotateClockwise');
    setTimeout(function() {
        div3.classList.remove('rotateClockwise');
        isRotateOn = false;
    }, 400);
}

function rotateAnticlockwise() {
    isRotateOn = true;
    div3.classList.add('rotateAntiClockwise');
    setTimeout(function() {
        div3.classList.remove('rotateAntiClockwise');
        isRotateOn = false;
    }, 400);
}

// Div 4
div4.style.height = '200px';
div4.style.width = '200px';
let colorDiv4 = '#fff';
div4.style.backgroundColor = colorDiv4;
div4.style.color = 'black';
div4.innerText = colorDiv4;

const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; // 16 different posibilities

div4.addEventListener('click', giveRandomeColor);

function giveRandomeColor() {
    colorDiv4 = '#';
    for(let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * (17 - 1) + 1);
        colorDiv4 += hexCharacters[randomNum - 1];
    }
    div4.innerText = colorDiv4;
    div4.style.backgroundColor = colorDiv4;
    calcColorBrightness() >= 23 ? div4.style.color = 'black' : div4.style.color = 'white';
}

function calcColorBrightness() {
    let Rvalue = hexCharacters.indexOf(colorDiv4[1]);
    let Gvalue = hexCharacters.indexOf(colorDiv4[2]);
    let Bvalue = hexCharacters.indexOf(colorDiv4[3]);
    let totalBrightness = Rvalue + Gvalue + Bvalue;
    return totalBrightness;
}


