// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = arr[0] +
                 arr[1] +
                 arr[2] +
                 arr[3] +
                 arr[4] +
                 arr[5] +
                 arr[6] +
                 arr[7] +
                 arr[8] +
                 arr[9];

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

    const book1 = {
        name: 'Moby-Dick',
        totalPages: 571,
        genre: 'novel',
    };

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

    const book2 = {
        name: 'Maths',
        totalPages: 1000000,
        genre: 'study',
        author: ['Euclid', 'Archimedes', 'Newton']
    };

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автор. Вивести кожну книгу як окремий об'єкт

    const books = [
        {name: 'Гаррі Поттер і філософський камінь', totalPages: 320, genre: 'роман', author: ' Джоан Роулінг'},
        {name: 'Гаррі Поттер і таємна кімната', totalPages: 352, genre: 'роман', author: ' Джоан Роулінг'},
        {name: 'Гаррі Поттер і в’язень Азкабану', totalPages: 384, genre: 'роман', author: ' Джоан Роулінг'},
    ];

    console.log(books[0]);
    console.log(books[1]);
    console.log(books[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//      Значення площі зберігати в змінній s.

    const height = 23;
    const width = 10;
    const s = height * width;

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//      результат помістіть у змінну v.

    const heightC = 10;
    const dC = 4;
    const v = Math.round(Math.PI * ( Math.pow( ( dC / 2 ),2) ) * heightC);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//      Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

    let n = 3;
    let m = 4;

    let hypotenuse = Math.sqrt(Math.pow( n,2 ) + Math.pow( m, 2 ));
