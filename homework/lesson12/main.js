//  1.
//  Отримати відповідь з цього ресурсу відповідь, та вивести в документ обєкти.
//  Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
//  Для кожного елементу свій блок div.post
//  Всі характеристики повинні мати свої блоки всередені div.post
//  https://jsonplaceholder.typicode.com/posts

    let body = document.body;

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            let postCards = document.createElement('div');
            postCards.classList.add('post-cards');

            let title = document.createElement('h1');
            title.innerText = 'User Posts';

            for (let post of posts) {
                let postCard = document.createElement('div');
                postCard.classList.add('post-card');
                postCard.innerHTML = `<h2>${post.id}. ${post.title}</h2>
                                      <p>${post.body}</p>`;
                postCards.append(postCard);
            }
            body.append(title,postCards);
        });

//  2.
//  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//  Для кожного елементу свій блок div.comment
//  Всі характеристики повинні мати свої блоки всередені div.comment
//  https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let commentCards = document.createElement('div');
        commentCards.classList.add('comment-cards');

        let title = document.createElement('h1');
        title.innerText = 'Comments To Posts';

        for (let comment of comments) {
            let commentCard = document.createElement('div');
            commentCard.classList.add('comment-card');
            commentCard.innerHTML = `<h2>${comment.id}. ${comment.name}</h2>
                                     <p>${comment.body}</p>
                                     <p class="email">${comment.email}</p>`;
            commentCards.appendChild(commentCard);
        }
        body.append(title, commentCards);
    });
