const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');


//创建db对象的实例以存储打开的数据库
let db;


window.onload = function () {

    //打开数据库，如果它尚不存在，则创建它
    let request = window.indexedDB.open('notes', 1);
    //onerror处理程序表示数据库未成功打开
    request.onerror = function () {
        console.log('Database failed to open');
    };
    //onsuccess处理程序表示数据库已成功打开
    request.onsuccess = function () {
        console.log('Database opened succesfully');

        //将打开的数据库对象存储在db变量中
        db = request.result;
        //运行displayData()函数
        displayData();
    };

    //如果尚未完成，请设置数据库表
    request.onupgradeneeded = function (e) {
        //获取对已打开数据库的引用
        let db = e.target.result;

        //创建一个objectStore来存储我们的笔记（基本上像一个表） 包括一个自动递增的id
        let objectStore = db.createObjectStore('notes', {
            keyPath: 'id',
            autoIncrement: true
        });

        //定义objectStore将包含哪些数据项
        objectStore.createIndex('title', 'title', {
            unique: false
        });
        objectStore.createIndex('body', 'body', {
            unique: false
        });
        console.log('Database setup complete');
    };

    //创建一个onsubmit处理程序， 以便在提交表单时运行addData()函数
    form.onsubmit = addData;

    function addData(e) {

        //防止默认 - 我们不希望表单以常规方式提交
        e.preventDefault();

        //获取输入到表单字段中的值，并将它们存储在准备插入数据库的对象中
        let newItem = {
            title: titleInput.value,
            body: bodyInput.value
        };

        // 打开read/write db事务，准备添加数据
        let transaction = db.transaction(['notes'], 'readwrite');

        //调用已添加到数据库的对象库
        let objectStore = transaction.objectStore('notes');

        // 请求将newItem对象添加到对象库
        var request = objectStore.add(newItem);

        request.onsuccess = function () {
            //清除表单， 准备添加下一个条目
            titleInput.value = '';
            bodyInput.value = '';
        };

        // 一切都完成后，报告交易完成的成功与否
        transaction.oncomplete = function () {
            console.log('Transaction completed: database modification finished.');

            //通过再次运行displayData()来更新数据显示以显示新添加的项目
            displayData();
        };

        transaction.onerror = function () {
            console,
            log('Transaction not opened due to error');
        };
    }

    function displayData() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        let objectStore = db.transaction('notes').objectStore('notes');
        objectStore.openCursor().onsuccess = function (e) {
            let cursor = e.target.result;

            if (cursor) {
                let listItem = document.createElement('li');
                let h3 = document.createElement('h3');
                let para = document.createElement('p');

                listItem.appendChild(h3);
                listItem.appendChild(para);
                list.appendChild(listItem);


                h3.textContent = cursor.value.title;
                para.textContent = cursor.value.body;


                listItem.setAttribute('data-note-id', cursor.value.id);

                let deleteBtn = document.createElement('button');
                listItem.appendChild(deleteBtn);
                deleteBtn.textContent = 'Delete';


                deleteBtn.onclick = deleteItem;

                cursor.continue();

            } else {
                if (!list.firstChild) {
                    let listItem = document.createElement('li');
                    listItem.textContent = 'No notes stored.'
                    list.appendChild(listItem);
                }

                console.log('Notes all displayed');
            }
        };
    }

    function deleteItem(e) {
        let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

        let transaction = db.transaction(['notes'], 'readwrite');
        let objectStore = transaction.objectStore('notes');
        let request = objectStore.delete(noteId);

        transaction.oncomplete = function () {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            console.log('Note ' + noteId + ' deleted.');

            if (!list.firstChild) {
                let listItem = document.createElement('li');
                listItem.textContent = 'No notes stored.';
                list.appendChild(listItem);
            }
        }
    }
}