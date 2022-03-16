//  На странице post-details.html:
//    7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
//    8 Ниже информации про пост, вывести все комментарии текущего поста
//      (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

//  Стилизация проекта:
//    post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.

    const container = document.getElementById('container');

    const pageTitle = document.createElement('h1');
    pageTitle.classList.add('page-title');
    pageTitle.innerText = 'post details';

    const postJSON = new URL(location.href).searchParams.get('post');
    const post = JSON.parse(postJSON);

    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    postCard.innerHTML = `<h2 class="post-title">${post.title}</h2>
                          <div class="post-info">
                            <h3 class="subtitle">post data</h3>
                            <div class="post-data">
                                <ul class="hint">
                                    <li>id: </li>
                                    <li>userId: </li>
                                    <li>body: </li>
                                </ul>
                                <ul class="data">
                                    <li>${post.id}</li>
                                    <li>${post.userId}</li>
                                    <li>${post.body}.</li>
                                </ul>
                            </div>
                          </div>`;

    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.innerText = 'comment of current post';

    let commentTitlesBlock = document.createElement('div');
    commentTitlesBlock.classList.add('comment-titles-block');

    commentBtn.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => response.json())
            .then(comments => {
                commentTitlesBlock.innerHTML = '';

                for (const comment of comments) {
                    let commentContent = document.createElement('div');
                    commentContent.classList.add('comment-content');
                    commentContent.innerHTML = `<h4 class="comment-title">${comment.name}</h4>
                                                <p class="comment-email">${comment.email}</p>`;

                    commentTitlesBlock.appendChild(commentContent);
                }
            });
    };
    container.append(pageTitle, postCard, commentBtn, commentTitlesBlock);