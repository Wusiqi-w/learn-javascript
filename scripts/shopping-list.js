var input = document.querySelector('input');
var btn = document.querySelector('button');
var list = document.querySelector('ul');

input.focus();

btn.onclick = function() {
    var buy = input.value;
    if (input.value === ''){
        alert('ou haven\'t typed anything');
        input.focus();
    } else {
        input.value = '';

        var listitem = document.createElement('li');
        var span = document.createElement('span');
        var del = document.createElement('button'); 
    
        listitem.appendChild(span);
        listitem.appendChild(del);
        span.textContent = buy;
        del.textContent = 'Delete';
        list.appendChild(listitem);
    
        del.onclick = function() {
            list.removeChild(listitem);
        }
        input.focus();
    }
    
}
