const body = document.querySelector('body');
body.style.backgroundColor = 'black';

const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');

div2.style.height = '200px';
div2.style.width = '200px';
div2.style.backgroundColor = 'white';

div3.style.height = '200px';
div3.style.width = '200px';
div3.style.backgroundColor = 'white';

div4.style.height = '200px';
div4.style.width = '200px';
div4.style.backgroundColor = 'white';

div5.style.height = '200px';
div5.style.width = '200px';
div5.style.backgroundColor = 'white';

div6.style.height = '200px';
div6.style.width = '200px';
div6.style.backgroundColor = 'white';

const div1Colors = ['#A7226E', '#EC2049', '#F26B38', '#F7DB4F', '#2F9599'];
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

