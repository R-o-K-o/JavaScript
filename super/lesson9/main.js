// Є масив :
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

    let users = [
        {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    }, {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    }, {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    }, {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    }, {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    }, {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    }, {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    }, {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    }, {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    }, {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    }, {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }];

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
    let usersWrap = document.createElement('div');

    for (let user of users) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('box');
        userDiv.innerHTML = `name - ${user.name} <br>
                         age: ${user.age} <br>
                         status - ${user.status} <br>
                         country - ${user.address.country} <br>
                         city - ${user.address.city} <br>
                         street - ${user.address.street} <br>
                         house number: ${user.address.houseNumber}`;

        usersWrap.appendChild(userDiv);
    }

    body.appendChild(usersWrap);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам (div>div*4)

    let userCards = document.createElement('div');

    for (let user of users) {
            let userCard = document.createElement('div');
            userCard.classList.add('box');
            userCard.style.borderColor = '#e2a932';

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
            userCards.appendChild(userCard);
    }

    body.appendChild(userCards);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

    let usersDiv = document.createElement('div');

    for (let user of users) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('box');
        userDiv.style.borderColor = '#9d1ca7';

        let username = document.createElement('h3');
        username.innerText = `name:  ${user.name}`;

        let userAge = document.createElement('div');
        userAge.innerText = `age: ${user.age}`;

        let userStatus = document.createElement('div');
        userStatus.innerText = `status: ${user.status}`;

        let userAddress = document.createElement('div');

        let country = document.createElement('div');
        country.innerText = `country: ${user.address.country}`;

        let city = document.createElement('div');
        city.innerText = `city: ${user.address.city}`;

        let street = document.createElement('div');
        street.innerText = `street: ${user.address.street}`;

        let houseNumber = document.createElement('div');
        houseNumber.innerText = `house number: ${user.address.houseNumber}`;

        userAddress.append(country, city, street, houseNumber);

        userDiv.append(username, userAge, userStatus, userAddress);
        usersDiv.appendChild(userDiv);
    }

    body.appendChild(usersDiv);

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
//     Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
//     що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

    let divIdContent = document.getElementById('content');

    let headings = document.getElementsByTagName('h2');
    let titlesList = document.createElement('ul');

    for (let heading of headings) {
        let li = document.createElement('li');
        li.innerText = heading.innerText;
        titlesList.appendChild(li);
    }

    divIdContent.appendChild(titlesList);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
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

    let wrap = document.createElement('div');

    for (let rule of rules) {
        let ruleDiv = document.createElement('div');
        ruleDiv.classList.add('box');
        ruleDiv.style.borderColor = 'tomato';

        let title = document.createElement('h2');
        title.innerText = rule.title;

        let text = document.createElement('p');
        text.innerText = rule.body;

        ruleDiv.append(title, text);
        wrap.appendChild(ruleDiv);
    }

    body.appendChild(wrap);
