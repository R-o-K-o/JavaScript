// - Створити функцію конструктор яка дозволяє створювати обєкти car,
//   з властивостями модель, виробник, рік випуску, максимальна швидкість, обєм двигуна. додати в обєкт функції:
//      -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear (newValue) - змінює рік випуску на значення newValue
//      -- addDriver (driver) - приймає обєкт який "водій" з довільним набором полів, і додає його в поточний обєкт car

    function Car1(model, maker, year, maxSpeed, power) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.power = power;

        // console.log(this); // 'this' create {} with args

        this.info = () => {
            for (let key in this) {
                // console.log(key);
                // console.log(this[key]);
                if (typeof(this[key]) !== 'function') {
                    console.log(`${key} - ${this[key]}`);
                }
            }
        };

        this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);

        this.increaseMaxSpeed = (newSpeed = 0) => {
            this.maxSpeed = this.maxSpeed + newSpeed;
            console.log(`швидкість сягає ${this.maxSpeed} км/год`);
        };

        this.changeYear = (newValue = 0) => {
            this.year = newValue;
            console.log(`модельний ряд ${this.year} року`);
        };

        this.addDriver = (driver = {}) => {
            this.driver = driver;
            console.log(this.driver);
        };
    }

    const driver1 = {
        name: 'Michael',
        surname: 'Schumacher',
        age: 53,
        car: 'Ferrari',
    };

    let auto1 = new Car1('Lanos','Daewoo',2008,170,86);
    auto1.info();
    auto1.drive();
    auto1.increaseMaxSpeed(120);
    auto1.changeYear(2012);
    auto1.addDriver(driver1);

// - (Те саме, тільки через клас)
//   Створити клас який дозволяє створювати обєкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
//   обєм двигуна. додати в обєкт функції:
//      -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear (newValue) - змінює рік випуску на значення newValue
//      -- addDriver (driver) - приймає обєкт який "водій" з довільним набором полів, і додає його в поточний обєкт car

    class Car2 {
        constructor(model, maker, year, maxSpeed,  power) {
            this.model = model;
            this.maker = maker;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.power = power;
        }

        info() {
            for (let key in this) {
                // console.log(this);
                // console.log(key);
                // console.log(this[key]);
                console.log(`${key} - ${this[key]}`);
            }
        }

        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
        }

        increaseMaxSpeed(newSpeed = 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
            console.log(`швидкість сягає ${this.maxSpeed} км/год`);
        }

        changeYear(newValue) {
            this.year = newValue;
            console.log(`модельний ряд ${this.year} року`);
        }

        addDriver(driver = {}) {
            this.driver = driver;
            console.log(this.driver);
        }
    }

    let driver2 = {
        name: 'Олексій',
        surname: 'Мочанов',
        age: 53,
        car: 'Nissan'
    };

    let auto2 = new Car2('Clio','Renault',2016,190,90);
    auto2.info();
    auto2.drive();
    auto2.increaseMaxSpeed(110);
    auto2.changeYear(2022);
    auto2.addDriver(driver2);

//  -створити класс/функцію конструктор попелюшка з полями імя, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Сторити обєкт класу "принц" за допомоги класу який має поля імя, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    class Cinderella {
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }

    const cinderellas = [
        new Cinderella('Karina', 33, 35),
        new Cinderella('Olga', 24, 34),
        new Cinderella('Inna', 18, 37),
        new Cinderella('Oksana', 25, 36),
        new Cinderella('Ira', 42, 39),
        new Cinderella('Lola', 55, 43),
        new Cinderella('Lesya', 29, 38),
        new Cinderella('Anna', 98, 40),
        new Cinderella('Halina', 49, 41),
        new Cinderella('Mona', 20, 31),
    ];

    class Prince {
        constructor(name, age, findShoe) {
            this.name = name;
            this.age = age;
            this.findShoe = findShoe;
        }
    }

    let youngPrince = new Prince('Roma', 26, 36);

    const findCinderella1 = (cinderellas, prince) => {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === prince.findShoe) {
                console.log('Най ся поцілує пара молода');
                return `знайдена попелюшка носить імя - ${cinderella.name}`;
            }
        }
        return 'шукай далі...';
    };

    console.log(findCinderella1(cinderellas, youngPrince));

    const findCinderella2 = (cinderellas, prince) => {
        const foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.findShoe);
        if (!foundCinderella) {
            return 'шукай далі...';
        }
        return foundCinderella;
    };

    console.log(findCinderella2(cinderellas, youngPrince));
