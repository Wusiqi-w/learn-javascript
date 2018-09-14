 // 创建一个变量来存储产品的数据库

 var products;


 //使用fetch取回它，并报告fetch操作中发生的任何错误。一旦产品成功地加载并格式化为JSON对象,使用response.json(),运行initialize()函数

 fetch('products.json').then(function (response) {
     if (response.ok) {
         response.json().then(function (json) {
             products = json;
             initialize();
         });
     } else {
         console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
     }
 });


 // 设置应用程序逻辑， 声明所需的变量， 包含所有其他功能。

 function initialize() {
     // 获取我们需要操作的UI元素
     var category = document.querySelector('#category');
     var searchTerm = document.querySelector('#searchTerm');
     var searchBtn = document.querySelector('button');
     var main = document.querySelector('main');

     // 记录最后一个类别和搜索词的输入记录
     var lastCategory = category.value;
     var lastSearch = '';

     //这些包含了按类别进行过滤的结果, 搜索词finalGroup将包含在搜索完成后需要显示的产品，每一个都将是一个包含对象的数组，每一个对象都代表一个产品
     var categoryGroup;
     var finalGroup;


     //首先，设置finalGroup等于整个产品数据库， 然后运行updateDisplay()， 这样所有的产品都首先显示出来
     finalGroup = products;
     updateDisplay();

     //将两者设置为空数组，以便在运行时进行搜索
     categoryGroup = [];
     finalGroup = [];

     //当点击search按钮时，调用selectCategory()来启动一个搜索，以选择我们想要显示的产品类别

     searchBtn.onclick = selectCategory;

     function selectCategory(e) {
         //使用preventDefault()来阻止表单提交，这会破坏体验
         e.preventDefault();

         //将它们设置为空数组，以清除先前的搜索
         categoryGroup = [];
         finalGroup = [];

         //如果类别和搜索词与上次搜索的结果相同，结果将是相同的，因此没有必要再运行一次，只返回函数
         if (category.vlue === lastCategory && searchTerm.value.trim() === lastSearch) {
             return;
         } else {
             //更新最后一个类别和搜索词的记录
             lastCategory = category.value;
             lastSearch = searchTerm.value.trim();

             //在这种情况下，我们想要选择所有的产品，然后通过搜索词来过滤它们，所以我们只将类别组设置为整个JSON对象，然后运行selectProducts();

             if (category.value === 'All') {
                 categoryGroup = products;
                 selectProducts();

                 //如果选择了一个特定的类别，我们需要过滤掉不属于该类别的产品，然后在运行selectProducts()之前将剩余的产品放入分类组中。
             } else {
                 //元素中的值是大写的，而在JSON中储存的类别（在“type”下）是小写的。因此，在进行比较之前，我们需要转换成小写字母

                 var lowerCaseType = category.value.toLowerCase();
                 for (var i = 0; i < products.length; i++) {
                     // 如果一个产品的类型属性与所选的类别相同，我们想要消除它，所以我们把它推到分类组数组中
                     if (products[i].type === lowerCaseType) {
                         categoryGroup.push(products[i]);
                     }
                 }

                 //在过滤之后运行selectProducts()
                 selectProducts();
             }
         }
     }

     // selectProducts（）接受selectCategory（）选择的产品组，并通过tof搜索词进一步筛选它们（如果一个有bene输入）
     function selectProducts() {
         // 如果没有输入搜索项，只需使finalGroup数组等于类别组数组，我们不想进一步过滤产品，然后运行updateDisplay（）。
         if (searchTerm.value.trim() === '') {
             finalGroup = categoryGroup;
             updateDisplay();
         } else {
             //在比较之前，确保搜索词被转换成小写字母。我们保留了所有的产品名称以保持简单
             var lowerCaseSearchTerm = searchTerm.value.trim().toLowerCase();
             // 对于分类组中的每一种产品，请查看搜索词是否包含在产品名称中（如果索引（）结果不返回-1，则意味着它是），如果是的话，则将产品推到finalGroup数组中
             for (var i = 0; i < categoryGroup.length; i++) {
                 if (categoryGroup[i].name.indexOf(lowerCaseSearchTerm) !== -1) {
                     finalGroup.push(categoryGroup[i]);
                 }
             }

             //在第二轮过滤完成后运行updateDisplay（）
             updateDisplay();
         }

     }
     // 用新产品开始更新显示的过程
     function updateDisplay() {
         // 移除<main>元素的前一个内容
         while (main.firstChild) {
             main.removeChild(main.firstChild);
         }

         // 如果没有产品匹配搜索词，则显示“无结果显示”消息
         if (finalGroup.length === 0) {
             var para = document.createElement('p');
             para.textContent = 'No results to display!';
             main.appendChild(para);
             // 对于我们想要显示的每一个产品，将其产品对象传递给fetchBlob（）
         } else {
             for (var i = 0; i < finalGroup.length; i++) {
                 fetchBlob(finalGroup[i]);
             }
         }
     }

     // fetchBlob使用fetch来检索该产品的图像，然后将生成的图像显示URL和product对象发送到showProduct（），以最终显示它
     function fetchBlob(product) {
         // 从产品构造到图像文件的URL路径。图像属性
         var url = 'images/' + product.image;
         // 使用fetch取回图像，并再次将生成的响应转换为blob，如果出现任何错误，我们将在控制台中报告它们。
         fetch(url).then(function (response) {
             if (response.ok) {
                 response.blob().then(function (blob) {
                     // 把blob转换成一个对象URL这基本上是一个临时的内部URL指向存储在浏览器内的对象
                     objectURL = URL.createObjectURL(blob);
                     // 调用showProduct
                     showProduct(objectURL, product);
                 });
             } else {
                 console.log('Network request for "' + product.name + '" image failed with response ' + response.status + ': ' + response.statusText);
             }
         });
     }

     // 在<main>元素中显示一个产品
     function showProduct(objectURL, product) {
         // 创建 <section>, <h2>, <p>, and <img> 元素
         var section = document.createElement('section');
         var heading = document.createElement('h2');
         var para = document.createElement('p');
         var image = document.createElement('img');

         // 给<section>一个类名等于产品“type”属性，这样它就会显示正确的图标
         section.setAttribute('class', product.type);

         // 给<h2>文本内容与产品“name”属性相同，但是第一个字符被替换为第一个字符的大写版本
         heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

         para.textContent = '$' + product.price.toFixed(2);

         // 将<img>元素的src设置为ObjectURL，而alt则设置为产品“name”属性
         image.src = objectURL;
         image.alt = product.name;

         main.appendChild(section);
         section.appendChild(heading);
         section.appendChild(para);
         section.appendChild(image);
     }
 }