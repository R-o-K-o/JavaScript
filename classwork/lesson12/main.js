// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            let container = document.getElementById('container');

            let postCards = document.createElement('div');
            postCards.classList.add('post-cards');

            for (const post of posts) {
                let postCard = document.createElement('div');
                postCard.classList.add('post-card');

                let postBlock = document.createElement('div');
                postBlock.classList.add('post-block');
                postBlock.innerHTML = `<h2>${post.id}. ${post.title}</h2>
                                       <p>${post.body}</p>`;

                let button = document.createElement('button');
                button.innerText = 'comments of post';

                let commentsList = document.createElement('ol');
                commentsList.classList.add('toggle');

                button.addEventListener('click',  () => {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                        .then(response => response.json())
                        .then(comments => {
                            commentsList.classList.toggle('toggle');
                            commentsList.innerText = '';

                            for (const comment of comments) {
                                let commentItem = document.createElement('li');
                                commentItem.innerText = comment.name;
                                commentsList.appendChild(commentItem);
                            }
                        });
                });
                postBlock.appendChild(button);
                postCard.append(postBlock, commentsList);
                postCards.appendChild(postCard);
            }
            container.appendChild(postCards);
            document.body.appendChild(container);
        });
