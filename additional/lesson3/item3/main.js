// 1. Створити пустий масив та :
//  a. заповнити його 50 парними числами за допомоги циклу.

    let evenNums = [];

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            evenNums.push(i);
        }
    }

    // console.log(evenNums);

//  b. заповнити його 50 непарними числами за допомоги циклу.

    let oddNums = [];

    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0) {
            oddNums.push(i);
        }
    }

    // console.log(oddNums);

//  c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

    let randomNums1 = [];

    for(let i = 1; i <= 20; i++) {
        randomNums1.push(Math.floor(Math.random() * 50));
    }

    // console.log(randomNums1);

//  d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

    let min = 8;
    let max = 732;
    let randomNums2 = [];

    for (let i = 0; i < 20; i++) {
        randomNums2.push( Math.floor(Math.random() * (max - min + 1)) + min);
    }

    // console.log(randomNums2);

// 2. Вивести за допомогою console.log кожен третій елемен

    for (let i = 0; i < 100; i += 3) {
            // console.log(i);
    }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

    for (let i = 0; i < 100; i += 3) {
        if(i % 2 === 0) {
            // console.log(i);
        }
    }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

    let arr = [];

    for (let i = 0, k = 0; i < 100; i += 3) {
        if(i % 2 === 0) {
            arr[k++] = i;
            // console.log(i);
        }
    }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//      EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

    let nums1 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
    let x = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i + 1] % 2 === 0) {
            // console.log(nums1[i]);
        }
    }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//      Обрахувати середній чек.

    let prices = [100,250,50,168,120,345,188];
    let sum = 0;

    for (let price of prices) {
        sum += price;
    }

    let avgPrice = Math.round(sum / prices.length);
    // console.log(avgPrice);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

    const randomNums3 = [];
    let result = [];

    for (let i = 0; i < 10; i++) {
        randomNums3.push(Math.floor(Math.random() * 50));
        result.push(randomNums3[i] * 5);
    }

    // console.log(randomNums3);
    // console.log(result);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо
//      елемент є числом - додати його в інший масив.

    const array = ['string', 467, true, -12, 'hello', 0, false, '199', 100500];
    const nums2 = [];

    for (let item of array) {
        if (typeof(item) === 'number') {
            nums2.push(item);
        }
    }

    // console.log(nums2);

// - Дано 2 масиви з рівною кількістю об'єктів.
//      Масиви:

    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

    const usersWithCities = [];

    // for (let i = 0; i < usersWithId.length; i++) {
    //     let userAddress = {};
    //     for(let k = 0; k < citiesWithId.length; k++) {
    //         if (usersWithId[i].id === citiesWithId[k].user_id) {
    //             userAddress['address'] = citiesWithId[k];
    //             usersWithCities.push(Object.assign({}, usersWithId[i], userAddress));
    //         }
    //     }
    // }

    for (let user of usersWithId) {
        let userAddress = {};
        for (let city of citiesWithId) {
            if (user.id === city.user_id) {
                userAddress['address'] = city;
                usersWithCities.push(Object.assign({}, user, userAddress));
            }
        }
    }

    console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

    let numbers = [];

    for (let i = 1; i <= 10; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    for (let number of numbers) {
        if (number % 2 === 0) {
            // console.log(number);
        }
    }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

    let resArr = [];

    for (let number of numbers) {
        resArr.push(number);
    }

    // console.log(resArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

    let arr1 = [ 'a', 'b', 'c'];
    let str1 = '';

    for (let i = 0; i < arr1.length; i++) {
        str1 += arr1[i];
    }

    // console.log(str1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

    let arr2 = [ 'a', 'b', 'c'];
    let str2 = '';
    let i = 0;

    while (i < arr2.length) {
        str2 += arr2[i];
        i++;
    }

    // console.log(str2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

    let arr3 = [ 'a', 'b', 'c'];
    let str3 = '';

    for (let elem of arr3) {
        str3 += elem;
    }

    // console.log(str3);
