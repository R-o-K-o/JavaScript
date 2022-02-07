// - Створити функцію конструктор для обєктів User з полями id, name, surname , email, phone
//      створити пустий масив, наповнити його 10 обєктами new User(....)

    const ids = [23, 3, 77, 9, 11, 46, 39, 1, 52, 10];
    const names = ['Юрій', 'Роман', 'Олег', 'Петро', 'Андрій', 'Назар', 'Павло', 'Артем', 'Віктор', 'Тарас'];
    const surnames = ['Місків', 'Кошарко', 'Кот', 'Сорока', 'Леськів', 'Карпин', 'Слива', 'Пупкін', 'Кмін', 'Шабо'];
    const emails = [
        'miskiv@gmail.com',
        'kosharko@gmail.com',
        'kot@gmail.com',
        'soroka@gmail.com',
        'leskiv@gmail.com',
        'karpun@gmail.com',
        'sluva@gmail.com',
        'pupkin@gmail.com',
        'kmin@gmail.com',
        'shabo@gmail.com',
    ];
    const phones = [
        '0980000001',
        '0980000002',
        '0980000003',
        '0980000004',
        '0980000005',
        '0980000006',
        '0980000007',
        '0980000008',
        '0980000009',
        '0980000010',
    ];
    const orders = [
        ['banana', 'avocado', 'mango', 'peach', 'strawberry', 'apple'],
        ['tomato', 'beer', 'lays'],
        ['potato', 'oil', 'water', 'sugar'],
        ['pie', 'tea'],
        ['coffee', 'sugar', 'candis', 'brandy', 'juice'],
        ['spaghetti', 'chicken'],
        ['burger', 'fries', 'cola'],
        ['hot-dog', 'pepsi'],
        ['cucumber', 'broccoli', 'asparagus'],
        ['bread', 'soil'],

    ];

    function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    let users = [];
    for (let i = 0; i < 10; i++) {
        users.push(new User(ids[i], names[i], surnames[i], emails[i], phones[i]));
    }
    console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки обєкти з парними id (filter)

    let usersWithEvenId = users.filter(user => user.id % 2 === 0);
    console.log(usersWithEvenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

    const usersIdSortByAsc = users.sort((a, b) => a.id - b.id);
    console.log(usersIdSortByAsc);

// - створити класс для обєктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//      створити пустий масив, наповнити його 10 обєктами Client

    class Client {
        constructor(id, name, surname, email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }

    let clients = [];
    for (let i = 0; i < 10; i++) {
        clients.push(new Client(ids[i], names[i], surnames[i], emails[i], phones[i], orders[i]));
    }
    console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    const clientsOrderSortByAsc = clients.sort((a, b) => a.order.length - b.order.length);
    console.log(clientsOrderSortByAsc);