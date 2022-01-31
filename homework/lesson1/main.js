// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//      Вивести кожну змінну за допомогою: console.log, document.write;

    let str1 = 'hello ';
    console.log(str1);
    document.write(str1);

    let str2 = 'owu';
    console.log(str2);
    document.write(str2 + '.');

    let str3 = 'com';
    console.log(str3);
    document.write(str3 + '.');

    let str4 = 'ua';
    console.log(str4);
    document.write(str4 + '<br>');

    let num1 = 1;
    console.log(num1);
    document.write(num1 + '<br>');

    let num2 = 10;
    console.log(num2);
    document.write(num2 + '<br>');

    let num3 = -999;
    console.log(num3);
    document.write(num3 + '<br>');

    let num4 = 123;
    console.log(num4);
    document.write(num4 + '<br>');

    let num5 = 3.14;
    console.log(num5);
    document.write(num5 + '<br>');

    let num6 = 2.7;
    console.log(num6);
    document.write(num6 + '<br>');

    let num7 = 16;
    console.log(num7);
    document.write(num7 + '<br>');

    let boolean1 = true;
    console.log(boolean1);
    document.write(boolean1 + '<br>');

    let boolean2 = false;
    console.log(boolean2);
    document.write(boolean2 + '<br>');


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

    str1 = 'JavaScript ';
    console.log(str1);
    document.write(str1);

    str2 = 'its ';
    console.log(str2);
    document.write(str2);

    str3 = 'cool ';
    console.log(str3);
    document.write(str3);

    str4 = '!';
    console.log(str4);
    document.write(str4 + '<br>');

    num1 = 777;
    console.log(num1);
    document.write(num1 + '<br>');

    num2 = -31;
    console.log(num2);
    document.write(num2 + '<br>');

    num3 = 154.11;
    console.log(num3);
    document.write(num3 + '<br>');

    num4 = 100500;
    console.log(num4);
    document.write(num4 + '<br>');

    num5 = -51.51;
    console.log(num5);
    document.write(num5 + '<br>');

    num6 = 1001.01;
    console.log(num6);
    document.write(num6 + '<br>');

    num7 = 229;
    console.log(num7);
    document.write(num7 + '<br>');

    boolean1 = 5 > 2;
    console.log(boolean1);
    document.write(boolean1 + '<br>');

    boolean2 = 11 < 9;
    console.log(boolean2);
    document.write(boolean2 + '<br>');

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

    const firstName = 'Roman';
    const middleName = 'Volodymyrovych';
    const lastName = 'Kosharko';

    let person = `${firstName} ${middleName} ${lastName}`;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

    // let name = prompt("імя");
    // let middle_Name = prompt('по-батькові');
    // const age = prompt('вік');

    // console.log(`Вітаю ${name} ${middle_Name}. Тобі ${age} роки.`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

    let a = 100;
    console.log(typeof a);

    let b = '100';
    console.log(typeof b);

    let c = true;
    console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

    //  5 < 6         -> true
    //  5 > 6         -> false
    //  5 >= 6        -> false
    //  5 <= 6        -> false
    //  10 == 10      -> true
    //  10 >= 10      -> true
    //  10 != 10      -> false
    //  10 !== 10     -> false
    //  !(10 === 10)  -> false
    //  123 === '123' -> false
    //  123 == '123'  -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

    let str = "20";
    let x = 5;

// при складанні str + num перемагає str. в усіх ін. матем. операціях перемагає число !

    document.write(str + x + "<br/>");    // 205
    document.write(str - x + "<br/>");    // 15
    document.write(str * "2" + "<br/>");  // 40
    document.write(str / 2 + "<br/>");    // 10
