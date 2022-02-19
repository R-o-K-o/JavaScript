//  1.
//  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//  https://jsonplaceholder.typicode.com/users
//  кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//  Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => {
            let body = document.body;

            let userCards = document.createElement('div');
            userCards.classList.add('user-cards');

            for (const user of users) {
                let userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `<h2>${user.name}</h2>`;

                let postBtn = document.createElement('button');
                postBtn.innerText = 'posts of user';

                let postsList = document.createElement('ul');
                postsList.classList.add('toggle');

                let commentsList = document.createElement('ul');
                commentsList.classList.add('toggle');

                postBtn.onclick = () => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(response => response.json())
                        .then(posts => {
                            postsList.classList.toggle('toggle');
                            postsList.innerHTML = '';

                            let commentBtn = document.createElement('button');
                            commentBtn.innerText = 'comments of post';

                            for (const post of posts) {
                                let postItem = document.createElement('li');
                                postItem.innerText = post.title;
                                postsList.append(postItem, commentBtn);

                                commentBtn.onclick = () => {
                                    fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                                        .then(response => response.json())
                                        .then(comments => {
                                            commentsList.classList.toggle('toggle');
                                            commentsList.innerHTML = '';

                                            for (const comment of comments) {
                                                let commentItem = document.createElement('li');
                                                commentItem.innerText = comment.name;
                                                commentsList.appendChild(commentItem);
                                            }
                                        });
                                }
                            }
                        });
                }
                userCard.append(postBtn, postsList, commentsList);
                userCards.appendChild(userCard);
            }
            body.appendChild(userCards);
        });