// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//      document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

    const cutString1 = (str, n) => {
        let result = [];
        for (let i = 0; i < str.length; i += n) {
            result.push(str.substr(i, n));
        }
        return result;
    };

    console.log(cutString1('наслаждение',3));
    console.log(cutString1('developer',2));
    console.log(cutString1('javascript',4));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
//      данні до знака равлика(@),
//      наявність равлика,
//      крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//      функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення).
//      Протестувати на значеннях:
//      someemail@gmail.com
//      someeMAIL@gmail.com
//      someeMAIL@i.ua
//      some.email@gmail.com

    const validator = str => {
        let snail = '@';
        let dot = '.';

        if (!str.startsWith(snail)) {
            if (str.indexOf(snail) !== -1) {
                let snailInd = str.indexOf(snail);
                if (str.indexOf(dot) !== -1) {
                    let dotInd = str.indexOf(dot);
                    if ((dotInd - 2) > snailInd) {
                        console.log('valid');
                    } else console.log('not valid');
                }
            }
        }
    };

    validator('someemail@gmail.com');
    validator('someeMAIL@gmail.com');
    validator('someeMAIL@i.ua');
    validator('some.email@gmail.com');

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//  - є масив => coursesArray <= :
//  - відсортувати його в спадаючому порядку за кількістю елементів в полі modules

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    const sort = (arr) => arr.sort((a, b) => b.modules.length - a.modules.length);
    console.log(sort(coursesArray));

// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.
//     let symbol = "о";
//     str = "Астрономия это наука о небесных объектах";
//     document.writeln(count(str, symbol)) // 5

    const count = (str, symbol) => {
        let counter = 0;
        str.split('').forEach(item => {
            if (item === symbol) {
                counter++;
            }
        });
        return counter;
    };

    console.log(count('Астрономия это наука о небесных объектах', 'о'));
    console.log(count('Астрономия это наука о небесных объектах', 'х'));

    document.write(count('Астрономия это наука о небесных объектах', 'о') + '<br>');
    document.write(count('Астрономия это наука о небесных объектах', 'х') + '<br>');

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
//     document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

    const cutString2 = (str, n) => str.split(' ').splice(0, n).join(' ');

    console.log(cutString2('Сила тяжести приложена к центру', 5));
    console.log(cutString2('Астрономия это наука о небесных объектах', 3));

    document.write(cutString2('Сила тяжести приложена к центру', 5) + '<br>');
    document.write(cutString2('Астрономия это наука о небесных объектах', 3) + '<br>');