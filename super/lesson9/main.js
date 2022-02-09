// Є масив :

    let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    },
    {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    },
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    },
    {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    },
    {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    },
    {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    },
    {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    },
    {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }
    ];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

    let usersAddress = [];

    for (let user of users) {
        usersAddress.push(user.address);
    }
    console.log(usersAddress);

    let addresses = users.filter(user => user.address);
    console.log(addresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//      Всі данні в одному блоці.

    let body = document.body;

    for (let user of users) {
        let div = document.createElement('div');
        div.style.border = '3px solid teal';
        div.style.padding = '20px';
        div.style.margin = '30px';
        div.innerHTML = `name - ${user.name} <br>
                         age: ${user.age} <br>
                         status - ${user.status} <br>
                         country - ${user.address.country} <br>
                         city - ${user.address.city} <br>
                         street - ${user.address.street} <br>
                         house number: ${user.address.houseNumber}`;

        body.appendChild(div);
    }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам (div>div*4)

    for (let user of users) {
        let userCard = document.createElement('div');
        userCard.style.border = '3px solid silver';
        userCard.style.padding = '20px';
        userCard.style.margin = '30px';

        let username = document.createElement('div');
        username.innerText = `name - ${user.name}`;

        let age = document.createElement('div');
        age.innerText = `age: ${user.age}`;

        let status = document.createElement('div');
        status.innerText = `status - ${user.status}`;

        let address = document.createElement('div');
        address.innerHTML = `country - ${user.address.country} <br> 
                             city - ${user.address.city} <br>
                             street - ${user.address.street} <br>
                             house number: ${user.address.houseNumber}`;

        userCard.append(username, age, status, address);
        body.appendChild(userCard);
    }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

    for (let user of users) {
        let userCard = document.createElement('div');
        userCard.style.border = '3px solid green';
        userCard.style.padding = '20px';
        userCard.style.margin = '30px';

        let username = document.createElement('h2');
        username.innerText = `name - ${user.name}`;

        let userAge = document.createElement('div');
        userAge.innerText = `age: ${user.age}`;

        let userStatus = document.createElement('div');
        userStatus.innerText = `status - ${user.status}`;

        let userAddress = document.createElement('div');
        let country = document.createElement('div');
        country.innerText = `country - ${user.address.country}`;

        let city = document.createElement('div');
        city.innerText = `city - ${user.address.city}`;

        let street = document.createElement('div');
        street.innerText = `street - ${user.address.street}`;

        let houseNumber = document.createElement('div');
        houseNumber.innerText = `house number: ${user.address.houseNumber}`;

        userAddress.append(country, city, street, houseNumber);
        userCard.append(username, userAge, userStatus, userAddress);
        body.append(userCard);
    }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
//     що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.



// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

    let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];