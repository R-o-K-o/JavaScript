// --створити масив з:
// - з 5 числових значень

    let numbers = [1, 2, 3, 4, 5];

// - з 5 стічкових значень

    let strings = ['html', 'css', 'javascript', 'react', 'nodejs'];

// - з 5 значень стрічкового, числового та булевого типу

    let diffTypes = [7, 'mySql', true, -112, false];

// - та вивести його в консоль

    console.log(numbers);
    console.log(strings);
    console.log(diffTypes);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    let array = [];

    array[0] = 1;
    array[1] = 2;
    array[2] = 3;
    array[3] = 4;
    array[4] = 5;

    console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

    for (let i = 1; i <= 10; i++) {
        document.write(`<div>txt<div/>`);
    }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

    for (let i = 1; i <= 10; i++) {
        document.write(`<div>txt - ${i}<div/>`);
    }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    let i = 1;

    while (i <= 20) {
        document.write(`<h1>heading<h1/>`);
        i++;
    }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    let k = 1;

    while (k <= 20) {
        document.write(`<h1>title - ${k}<h1/>`);
        k++;
    }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let num of nums) {
        console.log(num);
    }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    let skills = ['html', 'css', 'js', 'java', 'react', 'angular', 'vue', 'mySql', 'mongoDb', 'nodeJs'];

    for (let skill of skills) {
        console.log(skill);
    }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

    let items = [true, 'string', 234, false, 0, -333, 'boolean', [1,2,3], {name: 'Rick', age: 101}, '987'];

    for (let item of items) {
        console.log(item);
    }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//      За допомогою if та typeof вивести тільки булеві елементи

    let values = [111, 'js', true, 'false', -676, false, 'candy', 100500, 'age', '1999'];

    for (let value of values) {
        if (typeof(value) === 'boolean') {
            console.log(value);
        }
    }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//      За допомогою if та typeof вивести тільки числові елементи

    for (let value of values) {
        if (typeof(value) === 'number') {
            console.log(value);
        }
    }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//      За допомогою if та typeof вивести тільки рядкові елементи

    for (let value of values) {
        if (typeof(value) === 'string') {
            console.log(value);
        }
    }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//      Вивести в консоль всі його елементи в циклі.

    let arr = [];

        arr[0] = 56;
        arr[1] = true;
        arr[2] = 'laptop';
        arr[3] = -789;
        arr[4] = false;
        arr[5] = 'js';
        arr[6] = 100500;
        arr[7] = 'false';
        arr[8] = 'hello';
        arr[9] = 909;

        for (let item of arr) {
            console.log(item);
        }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let i = 0; i < 10; i++) {
        console.log(`ітерація цикла ++: ${i}`);
        document.write(`ітерація цикла i++: ${i} <br>`);
    }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let i = 0; i < 100; i++) {
        console.log(`ітерація цикла ++: ${i}`);
        document.write(`ітерація цикла i++: ${i} <br>`);
    }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    for (let i = 0; i < 100; i += 2) {
        console.log(`ітерація цикла i += 2: ${i}`);
        document.write(`ітерація цикла i += 2: ${i} <br>`);
    }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(`парні кроки цикла: ${i}`);
            document.write(`парні кроки цикла: ${i} <br>`);
        }
    }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0) {
            console.log(`не парні кроки цикла: ${i}`);
            document.write(`не парні кроки цикла: ${i} <br>`);
        }
    }
