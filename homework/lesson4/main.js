// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

    function getRectangleArea(a, b) {
        return a * b;
    }

    console.log(`площа прямокутника = ${getRectangleArea(5, 9)}`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

    function getCircleArea(radius) {
        return Math.round(Math.PI * Math.pow(radius, 2));
    }

    console.log(`площа кола = ${getCircleArea(10)}`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    function getCylinderArea(height, radius) {
        return Math.round((Math.PI * 2) * (height * radius));
    }

    console.log(`площа циліндра = ${getCylinderArea(12, 6)}`);

// - створити функцію яка приймає масив та виводить кожен його елемент

    let nums = [1, 2, 3, 4, 5];

    function showElOfArray(arr) {
        for(let elem of arr) {
            console.log(elem);
        }
    }

    showElOfArray(nums);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

    function createHtmlElParagraph(txt) {
        document.write(`<p>${txt}<p/>`);
    }

    createHtmlElParagraph('function declaration');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    function createHtmlElUl(txt) {
        document.write('<ul>');
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${txt}</li>`);
        }
        document.write('</ul>');
    }

    createHtmlElUl('JavaScript');

// - створити функцію яка створює ol з трьома елементами li. Текст li задати через аргумент всім однаковий.
//      Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    function createHtmlElOl(txt, num) {
        document.write('<ol>');
        for (let i = 0; i < num; i++) {
            document.write(`<li>${txt}</li>`);
        }
        document.write('</ol>');
    }

    createHtmlElOl('happy', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    function primitiveTypes(arr) {
        document.write('<ol>');
        for(let elem of arr) {
            document.write(`<li>${elem}</li>`);
        }
        document.write('</ol>');
    }

    primitiveTypes([112, 'TV', true, -34, '000', false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//      Для кожного об'єкту окремий блок.

    let users = [
        {id: 1, name: 'Roy', age: 38},
        {id: 2, name: 'Nick', age: 17},
        {id: 3, name: 'Mark', age: 25}
    ]

    function arrayOfObjects(arr) {
        document.write('<div class="users">');
        for (let item of arr) {
            document.write(
                `<div class="user">
                    <h3>${item.id}. ${item.name}</h3>
                    <div>age: ${item.age}</div>
                 </div>`
            );
        }
        document.write('</div>');
    }

    arrayOfObjects(users);