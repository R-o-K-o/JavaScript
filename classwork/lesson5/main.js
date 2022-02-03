// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

    const showMinNum = (a, b, c) => {
        if (a < b && a < c) console.log(a);
        else if (b < c && b < a) console.log(b);
        else console.log(c);
    }

    showMinNum(-2, 0, -11);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

    const showMaxNum = (a, b, c) => {
        if (a > b && a > c) console.log(a);
        else if (b > c && b > a) console.log(b);
        else console.log(c);
    }

    showMaxNum(34,1910,202);

// - створити функцію яка повертає найбільше число з масиву

    const getMaxNum1 = arr => {
        let max = arr[0];
        for (let item of arr) {
            max = max < item ? item : max;
        }
        return max;
    }

    const getMaxNum2 = arr => Math.max(...arr);

    console.log(getMaxNum1([3, 592, 10500, -4, 21, -777, 1778]));
    console.log(getMaxNum2([3, 592, 10500, -4, 21, -777, 1778]));

// - створити функцію яка повертає найменьше число з масиву

    const getMinNum1 = arr => {
        let min = arr[0];
        for (let item of arr) {
            min = min > item ? item: min;
        }
        return min;
    }

    const getMinNum2 = arr => Math.min(...arr);

    console.log(getMinNum1([3, 592, 10500, -1, 21, -777, 1778]));
    console.log(getMinNum2([3, 592, 10500, -1, 21, -777, 1778]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    const getSum = arr => {
        let sum = 0;
        arr.forEach(item => sum += item);
        return sum;
    }

    console.log(getSum([1, 2, 3, 4, 5]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

    const getAvg = arr => {
        let sum = 0;
        arr.forEach(item => sum += item);
        return Math.round(sum / arr.length);
    }

    console.log(getAvg([23, 5, 781, 1, 96, 49]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

    const getMaxAndShowMinNum1 = (...nums) => {
        let min = nums[0];
        let max = nums[0];

        for (let num of nums) {
            if (num > max) max = num;
            if (num < min) min = num;
        }

        console.log(max);
        return min;
    }

    const getMaxAndShowMinNum2 = (...nums) => {
        console.log(Math.max(...nums));
        return Math.min(...nums);
    }

    console.log(getMaxAndShowMinNum1(9, 21, -5, 11, 60, 43, 585, -9));
    console.log(getMaxAndShowMinNum2(9, 21, -5, 11, 60, 43, 585, -9));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

    const getRandomArr1 = () => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random() * 100));
        }
        return arr;
    }

    console.log(getRandomArr1());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.

    const getRandomArr2 = limit => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random() * limit));
        }
        return arr;
    }

    console.log(getRandomArr2(30));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

    const reverseArr1 = arr => {
        let result = [];
        for (let i = arr.length -1; i >= 0; i--) {
            result.push(arr[i]);
        }
        return result;
    }

    const reverseArr2 = arr => arr.reverse();

    console.log(reverseArr1([1, 2, 3, 4, 5]));
    console.log(reverseArr2([5, 4, 3, 2, 1]));