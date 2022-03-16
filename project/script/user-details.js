//  На странице user-details.html:
//    4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
//    5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
//      (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//    6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//      которая имеет детальную информацию про текущий пост.

//  Стилизация проекта:
//    user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
//    блоки с краткой информацией про post - в ряд по 5 объектов.

    const container = document.getElementById('container');

    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('page-title');
    pageTitle.innerText = 'user details';

    const userJSON = new URL(location.href).searchParams.get('user');
    const user = JSON.parse(userJSON);

    const { name, id, username, phone, email, website, address, company } = user;

    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `<h2 class="user-name">${name}</h2>
                          <div class="user-info">
                            <div class="user-data">
                                <h3 class="subtitle">contact-data</h3>
                                <div class="contact-data">
                                    <ul class="hint">
                                        <li>id: </li>
                                        <li>nick: </li>
                                        <li>phone: </li>
                                        <li>email: </li>
                                        <li>website: </li>
                                    </ul>
                                    <ul class="data">
                                        <li>${id}</li>
                                        <li>${username}</li>
                                        <li>${phone}</li>
                                        <li>${email}</li>
                                        <li>${website}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="user-address">
                                <h3 class="subtitle">address data</h3>
                                <div class="address-data">
                                    <ul class="hint">
                                        <li>city: </li>
                                        <li>street: </li>
                                        <li>suite: </li>
                                        <li>zipcode: </li>
                                    </ul>
                                    <ul class="data">
                                        <li>${address.city}</li>
                                        <li>${address.street}</li>
                                        <li>${address.suite}</li>
                                        <li>${address.zipcode}</li>
                                    </ul>
                                </div>
                                <div class="geo">
                                    <h3 class="subtitle">geo data</h3>
                                    <div class="geo-data">
                                        <ul class="hint">
                                            <li>latitude: </li>
                                            <li>longitude: </li>
                                        </ul>
                                        <ul class="data">
                                            <li>${address.geo.lat}</li>
                                            <li>${address.geo.lng}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="user-company">
                                <h3 class="subtitle">company data</h3>
                                <div class="company-data">
                                    <ul class="hint">
                                        <li>name: </li>
                                        <li>catch phrase: </li>
                                        <li>bs: </li>
                                    </ul>
                                    <ul class="data">
                                        <li>${company.name}</li>
                                        <li>${company.catchPhrase}</li>
                                        <li>${company.bs}</li>
                                    </ul>
                                </div>
                            </div>
                          </div>`;

    const postBtn = document.createElement('button');
    postBtn.classList.add('post-btn');
    postBtn.innerText = 'post of current user';

    const postTitlesBlock = document.createElement('div');
    postTitlesBlock.classList.add('post-titles-block');

    postBtn.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(response => response.json())
            .then(posts => {
                postTitlesBlock.innerHTML = '';

                for (const post of posts) {
                    const postContent = document.createElement('div');
                    postContent.classList.add('post-content');
                    postContent.innerHTML = `<h4 class="post-title">${post.title}</h4>`;

                    const postDetailsBtn = document.createElement('button');
                    postDetailsBtn.classList.add('post-details-btn');
                    postDetailsBtn.innerText = 'details';
                    postDetailsBtn.onclick = () => location.href = `post-details.html?post=${JSON.stringify(post)}`;

                    postContent.appendChild(postDetailsBtn);
                    postTitlesBlock.appendChild(postContent);
                }
            });
    };
    container.append(pageTitle, userCard, postBtn, postTitlesBlock);
