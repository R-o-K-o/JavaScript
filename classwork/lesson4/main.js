// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    function showMinNum(a, b, c) {
        let min = a;
        for (let i = 0; i < arguments.length; i++) {
            min = (min > arguments[i]) ? arguments[i] : min;
        }
        console.log(min);
    }

    showMinNum(45, -8, 0);
    showMinNum(-77, -2, -100500);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

    function showMaxNum(a, b, c) {
        let max = a;
        for (let i = 0; i < arguments.length; i++) {
            max = (max < arguments[i]) ? arguments[i] : max;
        }
        console.log(max);
    }

    showMaxNum(99, 100500, -67);
    showMaxNum(-1, -345, -999);

// - створити функцію яка повертає найбільше число з масиву

    function getMaxNum1(arr) {
        let max = arr[0];
        for (let item of arr) {
            max = max < item ? item : max;
        }
        return max;
    }

    function getMaxNum2(arr) {
        return  Math.max(...arr);
    }

    console.log(getMaxNum1([12, 456, 999, 100500, -5]));
    console.log(getMaxNum2([12, 456, 999, 100500, -5]));

// - створити функцію яка повертає найменьше число з масиву

    function getMinNum1(arr) {
        let min = arr[0];
        for (let item of arr) {
            min = min > item ? item : min;
        }
        return min;
    }

    function getMinNum2(arr) {
        return Math.min(...arr);
    }

    console.log(getMinNum1([12, 456, 999, 100500, -5]));
    console.log(getMinNum2([12, 456, 999, 100500, -5]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    function getSum(arr) {
        let sum = 0;
        for (let item of arr) {
            sum += item;
        }
        return sum;
    }

    console.log(getSum([2, 7, 11, 43, 1, 98, 33]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    function getAvg(arr) {
        let sum = 0;
        for (let item of arr) {
            sum += item;
        }
        return Math.round(sum / arr.length);
    }

    console.log(getAvg([2, 57, 11, 243, 13, 98, 533]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//      (Math використовувати заборонено);

    function getMinAndShowMaxNum1(...nums) {
        let min = nums[0];
        let max = nums[0];

        for (let num of nums) {
            if (num > max) max = num;
            if (num < min) min = num;
        }

        console.log(max);
        return min;
    }

    function getMinAndShowMaxNum2(...nums) {
        console.log(Math.max(...nums));
        return Math.min(...nums);
    }

    console.log(getMinAndShowMaxNum1(5, 97, 0, -222, 78, 491));
    console.log(getMinAndShowMaxNum2(5, 97, 0, -222, 78, 491));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

    function getRandomArr1() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random()*100));
        }
        console.log(arr)
    }

    getRandomArr1();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit -
//      аргумент, який характеризує кінцеве значення діапазону.

    function getRandomArr2(limit) {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random() * limit));
        }
        return arr;
    }

    console.log(getRandomArr2(20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

    function reverseArr1(arr) {
        let result = [];
        for (let i = arr.length -1; i >= 0; i--) {
            result.push(arr[i]);
        }
        return result;
    }

    function reverseArr2(arr) {
       return arr.reverse();
    }

    console.log(reverseArr1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    console.log(reverseArr2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
