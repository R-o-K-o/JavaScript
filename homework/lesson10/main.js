// - Создать произвольный елемент с id = text.
//      Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

    let paragraph = document.getElementById('text');
    let button = document.getElementsByClassName('hidden-text')[0];

    button.onclick = () => paragraph.classList.add('d-none');

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

    let hiddenBtn = document.getElementsByClassName('hidden-btn')[0];
    hiddenBtn.onclick = () => hiddenBtn.classList.add('d-none');

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//      з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

    let input = document.getElementById('age');
    let btn1 = document.getElementsByClassName('btn')[0];

    btn1.onclick = () => {
        let value = +input.value;
        if (!value) {
            console.log('введіть коректні дані');
        } else if (value >= 18) {
            console.log('можете переглянути наш контент');
        } else {
            console.log('перегляд тільки для повнолітніх');
        }
        input.value = '';
    };

// - Создайте меню, которое раскрывается/сворачивается при клике

    let menu = document.getElementById('menu');
    let menuBtn = document.getElementsByClassName('menu-btn')[0];

    menuBtn.onclick = function() {
        menu.classList.toggle('d-none');
        this.textContent = this.textContent === 'показати меню' ? 'приховати меню' : 'показати меню';
    };

// - Создать список комментариев, пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//      Вывести список комментариев в документ, каждый в своем блоке.
//      Добавьте каждому комментарию по кнопке для сворачивания его body.


    const comments = [
        {
            title: "id labore ex et quam laborum",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos"
        },
        {
            title: "quo vero reiciendis velit similique earum",
            body: "est natus enim nihil est dolore omnis voluptatem numquam"
        },
        {
            title: "odio adipisci rerum aut animi",
            body: "harum non quasi et ratione tempore iure ex voluptates in ratione"
        },
        {
            title: "alias odio sit",
            body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium"
        },
    ];

    let body = document.body;

    let commentsBlock = document.createElement('div');
    commentsBlock.classList.add('comments-block');

    for (let comment of comments) {
        let commentBlock = document.createElement('div');
        commentBlock.classList.add('comment-block');

        let title = document.createElement('h3');
        title.innerText = comment.title;

        let text = document.createElement('p');
        text.innerText = comment.body;

        let button = document.createElement('button');
        button.innerText = 'Delete';
        button.onclick = function () {
            commentBlock.classList.add('d-none');
        }

        commentBlock.append(title, text, button);
        commentsBlock.appendChild(commentBlock);
        body.appendChild(commentsBlock);
    }
