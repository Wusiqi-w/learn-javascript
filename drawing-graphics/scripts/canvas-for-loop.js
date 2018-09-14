var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);


//使画布的坐标原点位于画布的中间
ctx.translate(width/2, height/2);


function degToRad(degrees){
    return degrees * Math.PI / 180;

};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + (min);
}

var length = 250;
var moveOffset = 20;

for(var i = 0; i < length; i++) {
    ctx.fillStyle = 'rgb(' + (255 - length) + ', 0, ' + (255 - length) + ', 0.9)';
    ctx.beginPath();
    ctx.moveTo(moveOffset, moveOffset);
    ctx.lineTo(moveOffset + length, moveOffset);
    var triHeight = length/2 * Math.tan(degToRad(60));
    ctx.lineTo(moveOffset + (length/2), moveOffset+triHeight);
    ctx.lineTo(moveOffset, moveOffset);
    ctx.fill();
    
    length--;
    moveOffset += 0.7;
    ctx.rotate(degToRad(5));
}