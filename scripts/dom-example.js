var link = document.querySelector('a');
var sect = document.querySelector('section');
var para = document.createElement('p');

link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

//创建一个文本节点
var text = document.createTextNode(' — the premier source for web development knowledge.');

//获取内部链接的段落的引用，并把文本节点绑定到这个节点上：

var linkPara =document.querySelector('p');

linkPara.appendChild(text);

//移到底部
sect.appendChild(linkPara);

//制作副本
// Node.cloneNode();

//删除节点：
// sect.removeChild(linkPara);

linkPara.parentNode.removeChild(linkPara);

//操作样式：
// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

para.setAttribute('class', 'highlight');
