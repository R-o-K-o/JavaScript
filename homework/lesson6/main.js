// - Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'

    const findLengthOfStr = str => str.length;

    console.log(`довжина даного рядка : ${findLengthOfStr('hello world')}`);
    console.log(`довжина даного рядка : ${findLengthOfStr('lorem ipsum')}`);
    console.log(`довжина даного рядка : ${findLengthOfStr('javascript is cool')}`);

// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'

    const upperCase = str => str.toUpperCase();

    console.log(upperCase('hello world'));
    console.log(upperCase('lorem ipsum'));
    console.log(upperCase('javascript is cool'));

// - Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    const lowerCase = str => str.toLowerCase();

    console.log(lowerCase('HELLO WORLD'));
    console.log(lowerCase('LOREM IPSUM'));
    console.log(lowerCase('JAVASCRIPT IS COOL'));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

    const removeGaps = str => str.trim();
    console.log(removeGaps(' dirty string   '));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

    const stringToArray = str => str.split(' ');
    console.log(stringToArray('Каждый охотник желает знать'));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

    const deleteCharacters = (str, index) => str.substr(7, index);
    console.log(deleteCharacters('Каждый охотник желает знать', 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
//     document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

    const insertDash = str => str.split(' ').join('-').toUpperCase();
    console.log(insertDash('HTML JavaScript PHP'));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

    const firstLetterToUpperCase = str => str[0].toUpperCase() + str.slice(1);
    console.log(firstLetterToUpperCase('happy'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

    const capitalize1 = str => {
        let result = [];
        str.split(' ').forEach(word => result.push(word[0].toUpperCase() + word.slice(1)));
        return result.join(' ');
    }

    const capitalize2 = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

    console.log(capitalize1('javascript is cool'));
    console.log(capitalize2('javascript is cool'));
