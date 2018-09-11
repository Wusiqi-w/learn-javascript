var select = document.querySelector('select');
var html = document.querySelector('html');


// select.onchange = function() {
//     (select.value === 'black') ? update('black','white') : update('white','black');
// }

select.onchange = function () {
    choice = select.value;

    switch (choice) {
        case 'black':
            update('black', 'white');
            break;
        case 'white':
            update('white', 'black');
            break;
        case 'purple':
            update('purple', 'white');
            break;
        case 'yellow':
            update('yellow', 'darkgray');
            break;
        case 'psych':
            update('lime', 'purple');
            break;
    }
}




function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}