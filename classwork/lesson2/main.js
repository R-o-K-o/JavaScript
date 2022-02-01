// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

    let num1 = prompt('введіть перше число');
    let num2 = prompt('введіть друге число');

    console.log(Math.max(num1, num2));

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

    let apartmentNum = +prompt('введіть номер квартири !');

    if (apartmentNum >= 1 && apartmentNum <= 20) {
        console.log(`квартира №: ${apartmentNum} знаходиться в 1 під'їзді.`);
    } else if (apartmentNum >= 21 && apartmentNum <= 48) {
        console.log(`квартира №: ${apartmentNum} знаходиться в 2 під'їзді`);
    } else if (apartmentNum >= 49 && apartmentNum <= 90) {
        console.log(`квартира №: ${apartmentNum} знаходиться в 3 під'їзді`);
    } else {
        console.log('номер квартири не вірний ...');
    }

// - Ми маємо змінну number в яку користувач задає числове значення,
//      якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

    let number = +prompt('введіть число');
    let res = number === 10 ? 'ВІРНО': 'НЕВІРНО';

    console.log(res);

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else

    let value = [];
    let typeValue = typeof value;

    if(typeValue === 'number') {
        console.log(1);
    } else if (typeValue === 'string') {
        console.log(2);
    } else if (typeValue === 'boolean') {
        console.log(3)
    } else if (typeValue === 'object') {
        console.log(4)
    } else {
        console.log(value);
    }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

    let temp = prompt('введіть температуру повітря.');

    if (temp >= 10 && temp <= 22) {
        console.log('йдемо ВЧИТИСЯ !');
    } else {
        console.log('вчимося ОНЛАЙН !');
    }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//     вивести Повідомлення - що число не вірне ... .

    let num = +prompt('введіть число від 1 до 5.');

    switch (num) {
        case 1:
            console.log('ви виграли Авто');
            break;
        case 2:
            console.log('ви виграли Мото');
            break;
        case 3:
            console.log('ви виграли Телефон');
            break;
        case 4:
            console.log('ви виграли Телевізор');
            break;
        case 5:
            console.log('ви виграли 1000$');
            break;
        default:
            console.log('число не вірне ...');
    }
