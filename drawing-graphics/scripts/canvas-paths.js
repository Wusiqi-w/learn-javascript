var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);


//将度数值转换为弧度
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}


//绘制三角形
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
//起点
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
//计算等边三角形的高度
var triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50+triHeight);
//回到原点
ctx.lineTo(50, 50);
//结束路径并填写形状
ctx.fill();



//绘制圆

ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
//arc的六个参数： x, y, (指定弧的中心位置)， 半径， 圆的起点（0）， 圆的终点（360）， false（顺时针绘制圆）
//注意。零度水平向右
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();


ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
//fill()之前，画一条线到圆心，如果删除了这一行，会在弧的起点和终点之间切断圆的边缘
// ctx.lineTo(200, 106);
ctx.fill();