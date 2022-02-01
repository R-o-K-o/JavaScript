// - Дано змінну time яка рівна числу від 0 до 59.
//      Потрібно написати код, який перевірить, до якої четверті години попадає число
//      (в першу, другу, третю или четверту частину години).

    let time = 31;

    if (time >= 0 && time <= 14) {
        console.log('1 чверть');
    }

    if (time >= 15 && time <= 29) {
        console.log('2 чверть');
    }

    if (time >= 30 && time <= 44) {
        console.log('3 чверть');
    }

    if (time >= 45 && time <= 59) {
        console.log('4 чверть');
}

// - У змінній day дано якесь число від 1 до 31.
//      Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

    let day = 11;

    if (day >= 1 && day <= 10) {
        console.log('1 декада');
    } else if (day >= 11 && day <= 20) {
        console.log('2 декада');
    } else if (day >= 21 && day <= 31) {
        console.log('3 декада');
    }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

    let test = false;

  // 1.
        if(!test) {
            console.log('Вірно')
        }
        else {
            console.log('Неправильно');
        }

  // 2.
        let res1 = !test ? 'Вірно': 'Неправильно';
        console.log(res1);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let a = 0;
    let res2 = a !== 0 ? 'Вірно': 'Невірно';

    console.log(res2);

// - Скласти розклад на тиждень за домопоги switch.
//      Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

    switch (3) {
        case 1:
            console.log('вивчити HTML');
            break;
        case 2:
            console.log('вивчити CSS');
            break;
        case 3:
            console.log('вивчити JavaScript');
            break;
        case 4:
            console.log('вивчити React');
            break;
        case 5:
            console.log('вивчити MySql');
            break;
        case 6:
            console.log('вивчити NodeJs');
            break;
        case 7:
            console.log('написати власний проект');
            break;
        default:
            console.log('введіть порядковий номер дня тижня !');
    }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

    let year = 2023;
    let result = year % 4 === 0 ? `${year} - високосний`: `${year} - не високосний`;

    console.log(result);

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//      Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

    let response = prompt('Яка офіційна назва JavaScript?');

    if (response === '' || response === null) {
        alert('відміна');
    } else if (response.toLowerCase() === 'ecmascript') {
        alert('Правильно!');
    } else {
        alert('Не знаєте? ECMAScript!');
    }
