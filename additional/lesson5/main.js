// - Дано натуральное число n. Выведите все числа от 1 до n.

    let number = prompt('введіть число', 'enter number');

    // Loop
    const displayNumsInRange1 = n => {
        for (let i = 1; i < n; i++) {
            console.log(i);
        }
    }

    // Recursion
    const recursion = (n, i = 1) => {
        if (i >= n) {
            return;
        }
        console.log(i);

        return recursion(number, ++i);
    }

    recursion(number);
    displayNumsInRange1(number);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
//      или в порядке убывания в противном случае.

    const displayNumsInRange2 = (a, b) => {
        let x = a;

        if (a > b) {
            a = b;
            b = x;
        }

        while (a <= b) {
            console.log(a);
            a++;
        }
    }

    displayNumsInRange2(10 ,1);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

    function foo(arr, index) {
        let x = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = x;

        return arr;
    }

    console.log(foo([9,8,0,4], 0));
    console.log(foo([9,8,0,4], 1));
    console.log(foo([9,8,0,4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//      Двожина масиву від 2 до 100
//      EXAMPLE:
//          [1,0,6,0,3] => [1,6,3,0,0]
//          [0,1,2,3,4] => [1,2,3,4,0]
//          [0,0,1,0]   => [1,0,0,0]

    function zeroMover(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 0) {
                let delElem = arr.indexOf(arr[i]);
                arr.splice(delElem,1);
                arr.push(0);
            }
        }
        return arr;
    }

    console.log(zeroMover([1,0,6,0,3]));
    console.log(zeroMover([0,1,2,3,4]));
    console.log(zeroMover([0,0,1,0]));
    console.log(zeroMover([3, 0, 0, 0, 77, 1, 46, 0, 82, 0, 1004, 0, 0, 25, 0, 5, 19, 0, 0, 93]));
