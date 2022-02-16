    let users = JSON.parse(localStorage.getItem('favorites'));

    let userCards = document.createElement('div');
    userCards.classList.add('user-cards');

    if (users) {
        for (let user of users) {
            let userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `<h2>${user.name}</h2>
                              <p><b>${user.age} years</b></p>
                              <p><b>${user.status}</b></p>`;
            let link = document.createElement('a');
            link.href = 'index.html';
            link.innerText = 'на домашню сторінку';

            userCard.appendChild(link);
            userCards.appendChild(userCard);
        }
    } else {
        alert('no users !');
    }

    document.body.appendChild(userCards);

