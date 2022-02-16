// є масив -

    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

// створити під кожен обєкт свій блок з конопкою "додати до улюблених" при натисканні на яку обєкт потрапляє
// до масиву favorites улюблених обраних обєктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

    let body = document.body;

    let userCards = document.createElement('div');
    userCards.classList.add('user-cards');

    for (let user of users) {
        let userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `<h2>${user.name}</h2>
                                  <p><b>${user.age} years</b></p>
                                  <p><b>${user.status}</b></p>` ;
        let button = document.createElement('button');
        button.innerText = 'додати до улюблених';

        let link = document.createElement('a');
        link.href = 'favorites.html';
        link.setAttribute('target', 'blank');
        link.innerText = 'перейти до улюблених';

        button.addEventListener('click', function func() {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.push(user);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            this.removeEventListener('click', func);
        });

        userCard.append(button, link);
        userCards.appendChild(userCard);
    }

    body.appendChild(userCards);
