// - Дано список імен.

    let n1 = 'Harry..Potter'
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//          let n1 = 'Harry Potter'
//          let n2 = 'Ron Whisley'
//          let n3 = 'Hermione Granger'

    const normalize = (str, symbol) => str.split(symbol).filter(item => item).join(' ');

    console.log(normalize(n1, '.'));
    console.log(normalize(n2, '-'));
    console.log(normalize(n3, '_'));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    const random = (limit) => {
        let arr = [];
        for (let i = 0; i < limit; i++) {
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr;
    };

    console.log(random(15));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

    const sort = arr => arr.sort((a, b) => a - b);
    console.log(sort(random(10)));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//      відфільтрувати  його за допомоги filter, залишивши тільки парні числа

    const filterNums = arr => arr.filter(item => item % 2 === 0);
    console.log(filterNums(random(20)));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//      за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

    const convertToStr = arr => arr.map(item => item + '');
    console.log(convertToStr(random(10)));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//      або навпаки в залежності від значення аргументу direction.
//          let nums = [11,21,3];
//          sortNums('ascending') // [3,11,21]
//          sortNums('descending') // [21,11,3]

    const sortNums = (arr, direction) => {
        if (direction === 'asc') {
            return  arr.sort((a, b) => a - b);
        } else if (direction === 'decrease') {
            return  arr.sort((a, b) => b - a);
        }
    };

    console.log(sortNums(random(15), 'asc'));
    console.log(sortNums(random(15), 'decrease'));

// - є масив => coursesAndDurationArray <=
//      -- відсортувати його за спаданням за monthDuration
//      -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    const sortAndFilter = arr => arr.sort((a, b) => a.monthDuration - b.monthDuration).filter(item => item.monthDuration > 5);
    console.log(sortAndFilter(coursesAndDurationArray));






