let second = document.querySelector('.s');
let minutes = document.querySelector('.m')
let hours = document.querySelector('.h')
let s = 0,  m = 0, h = 0, counter = 0;
let start = document.querySelector('.start')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')
let currents = document.querySelector('.time-container')
let go = false

start.addEventListener('click', function(){
go = true
})

pause.addEventListener('click' , function(){
go = false
start.style.display = 'flex'
pause.style.display = 'none'
let current = document.createElement('h3')
current.setAttribute('class', 'current')

currents.appendChild(current)

current.textContent =  `${hours.textContent}${minutes.textContent}${second.textContent}`
})

reset.addEventListener('click', function(){
go = false;
start.style.display = 'flex'
pause.style.display = 'none'
reset.style.display = 'none'
currents.innerHTML = `<h2>Current time</h2>`

s = 0;  m = 0;   h = 0;

current.textContent =  `${hours.textContent}${minutes.textContent}${second.textContent}`  

second.textContent= '0' +s;
minutes.textContent='0' +m;
hours.textContent= '0' +h;
})



function stopwatch(){
if (go === true){
start.style.display = 'none'
pause.style.display = 'flex'
reset.style.display = 'flex'


if (s === 60){s = 0 , m++}
if ( m === 60){m = 0 , h++}

let a = '0';
let b = '0';
let c = '0';

if (s >= 10)a = '';
if (m >= 10)b = '';
if (h >= 10)c = ''; 


second.textContent=`${a}${s++} `;
minutes.textContent = `${b}${m}:`;
hours.textContent = `${c}${h}:`;
}}

setInterval(stopwatch , 10)

