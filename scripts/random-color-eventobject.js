var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random()*(number + 1));
}

btn.addEventListener('click', bgChange);


function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ','+ random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}