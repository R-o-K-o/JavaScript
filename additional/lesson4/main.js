// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

    function showArgs(a, b) {
        return b !== undefined ? a + b : a;
    }

    console.log(showArgs('0'));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//      EXAMPLE:     [1,2,3,4]
//                   [2,3,4,5]
//                   результат
//                   [3,5,7,9]

    function getArrSumsOfArrsElems(arr1, arr2) {
        let result = [];
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr1[i] + arr2[i]);
        }
        return result;
    }

    console.log(getArrSumsOfArrsElems([1,2,3,4], [2,3,4,5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//      EXAMPLE: [ {name: 'Dima', age: 13}, {model: 'Camry'} ]  ===> [ name, age, model ]

    function getKeysOfObj1(arr) {
        let result = [];
        for (let item of arr) {
            for (let key in item) {
                result.push(key);
            }
        }
        return result;
    }

    function getKeysOfObj2(arr) {
        let result = [];
        for (let item of arr) {
            result.push(...Object.keys(item));
        }
        return result;
    }

    console.log(getKeysOfObj1([{name: 'Dima', age: 13}, {model: 'Camry'}]));
    console.log(getKeysOfObj2([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//      EXAMPLE: [ {name: 'Dima', age: 13}, {model: 'Camry'} ]  ===> [ Dima, 13, Camry ]

    function getValueOfObj1(arr) {
        let result = [];
        for (let item of arr) {
            for (let key in item) {
                result.push(item[key]);
            }
        }
        return result;
    }

    function getValueOfObj2(arr) {
        let result = [];
        for (let item of arr) {
            result.push(...Object.values(item));
        }
        return result;
    }

    console.log(getValueOfObj1([{name: 'Dima', age: 13}, {model: 'Camry'}]));
    console.log(getValueOfObj2([{name: 'Dima', age: 13}, {model: 'Camry'}]));
