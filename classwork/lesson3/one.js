// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

    let nums = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

    let i = nums.length;

    while (i < nums.length) {
        console.log(nums[i]);
        i++;
    }

    i = nums.length;

    while (i--) {
        console.log(nums[i]);
    }


// 2. перебрати його циклом for

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }

    for(let i = nums.length -1; i >= 0; i--) {
        console.log(nums[i]);
    }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

    let k = 0;

    while (k < nums.length) {
        if(k % 2 !== 0) {
            console.log(nums[k]);
        }
        k++
    }

    k = nums.length;

    while (k--) {
        console.log(nums[k]);
    }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

    for (let i = 0; i < nums.length; i++) {
        if(i % 2 !== 0) {
            console.log(nums[i]);
        }
    }

    for (let i = nums.length -1; i >= 0; i--) {
        if (i % 2 !== 0) {
            console.log(nums[i]);
        }
    }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

    let j = 0;

    while (j < nums.length) {
        if (nums[j] % 2 === 0) {
            console.log(nums[j]);
        }
        j++;
    }

    j = nums.length;

    while (j--) {
        if (nums[j] % 2 === 0) {
            console.log(nums[j]);
        }
    }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            console.log(nums[i]);
        }
    }

    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] % 2 === 0) {
            console.log(nums[i]);
        }
    }

// 7. замінити кожне число кратне 3 на слово "okten"

    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 3 === 0){
            console.log(nums[i])
            nums[i] = "okten";
        }
    }

    console.log(nums);

// 8. вивести масив в зворотньому порядку.

    for (let i = nums.length -1; i >= 0; i--) {
        console.log(nums[i]);
    }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

     //  зробив біля кожного завдання