var x = 1;
function a() {
    var y = 2;
    output(z);
}

function b() {
    var z = 3;
    output(y);
}

function output(value) {
    var para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = 'Value: ' + value;
}