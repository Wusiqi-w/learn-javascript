var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);


var image = new Image();
image.src = './firefox.png';

image.onload = function() {
    // ctx.drawImage(image, 50, 50);

    //参数： 要使用的图像，画布或视频，  开始剪切的x坐标位置， 开始剪切的y坐标位置， 被剪切图像的宽度，被剪切图像的高度，
    // 在画布上放置图像的x坐标位置，在画布上放置图像的 y 坐标位置。可选。要使用的图像的宽度。（伸展或缩小图像），可选。要使用的图像的高度。（伸展或缩小图像）
    ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
}