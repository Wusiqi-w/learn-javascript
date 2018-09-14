var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);


//绘制文本
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font = '36px arial';
//绘制轮廓文本， 参数： 要绘制的文本字符串，以及文本左上角的X，Y坐标。
ctx.strokeText('Canvas text', 50, 50);


ctx.fillStyle = 'red';
ctx.font = '48px georgia';
//绘制轮廓文本
ctx.fillText('Canvas text', 50, 150);
