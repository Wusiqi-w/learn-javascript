var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
var Para = document.querySelector('p');

// for循环
// for(var i = 0; i < cats.length; i++) {
//     if (i === cats.length - 1) {
//         info += 'and '  + cats[i] + '.';
//     } else {
//         info += cats[i] + ', ';
//     }

// }

// do..while循环
var i = 0;
do {
    if(i === cats.length -1 ) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++;
} while(i < cats.length);

Para.textContent = info;