// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника

    const getRectangleArea = (a, b) => a * b;
    console.log(`площа даного прямокутника = ${getRectangleArea(8, 15)}см`);

// - створити функцію яка обчислює та повертає площу кола

    const getCircleArea = radius => Math.round(Math.PI * Math.pow(radius, 2));
    console.log(`площа даного кола = ${getCircleArea(7)}см`);

// - створити функцію яка обчислює та повертає площу циліндру

    const getCylinderArea = (radius, height) => Math.round((Math.PI * 2) * (radius * height));
    console.log(`площа даного циліндра = ${getCylinderArea(9, 12)}см`);

// - створити функцію яка приймає масив та виводить кожен його елемент

    const showElemsOfArr = arr => arr.forEach(item => console.log(item));
    showElemsOfArr([1, 3, 5, 7, 9, 11, 13, 15]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

    const createHtmlElParagraph = txt => document.write(`<p>${txt}</p>`);
    createHtmlElParagraph('HTML');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    const createHtmlElUl = txt => {
        document.write('<ul>');
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${txt}</li>`);
        }
        document.write('</ul>');
    }

    createHtmlElUl('JavaScript');

// - створити функцію яка  створює ol з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    const createHtmlElOl = (txt, limit) => {
        document.write('<ol>');
        for (let i = 0; i < limit; i++) {
            document.write(`<li>${txt}</li>`);
        }
        document.write('</ol>');
    }

    createHtmlElOl('React', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    const showElems = arr => {
        document.write('<ul>');
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li>${arr[i]}</li>`);
        }
        document.write('</ul>');
    }

    showElems(['I', 'drink', 'beer', 1715, true, '||', false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//     Для кожного об'єкту окремий блок.

    const users = [
        {id: 1, name: 'Olga', age: 21},
        {id: 2, name: 'Oksana', age: 19},
        {id: 3, name: 'Anna', age: 34}
    ];

    const displayValInDocum = arr => {
        document.write('<div class="users">');
        for (let item of arr) {
            document.write(
                `<div class="user">
                    <h3>${item.id}. ${item.name}</h3>
                    <div>age - ${item.age}</div>
                </div>`
            );
        }
    }

    displayValInDocum(users);
