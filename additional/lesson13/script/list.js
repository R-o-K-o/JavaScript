// img:
// https://i.pinimg.com/originals/bc/7d/b8/bc7db88b4487f2fad5b55825e5b849fd.png
// https://clipart-best.com/img/umbrella/umbrella-clip-art-41.png
// https://clipart-best.com/img/dog-collar/dog-collar-clip-art-35.png
// https://i.pinimg.com/originals/79/dc/61/79dc61c931a21b0c802b42030440ff33.png
// https://3.bp.blogspot.com/-il_tmlu8wjw/VbJEUgzojhI/AAAAAAAABeI/-b8lH1WU7Mo/s1600/%25D0%259B%25D0%25B0%25D0%25BC%25D0%25BF%25D0%25B0.png
// https://png-images.ru/wp-content/uploads/2015/01/book_PNG2111-170x143.png
// https://clipart-best.com/img/jerrycan/jerrycan-clip-art-11.png

    const localKey = 'shop';
    let shop = JSON.parse(localStorage.getItem(localKey)) || [];

    const container = document.getElementById('container');

    const deleteCard = (id) => {
        shop = shop.filter( item => item.id !== id);
        localStorage.setItem(localKey, JSON.stringify(shop));
        container.innerHTML = '';
        showProductsList();
    };

    const clear = () => {
        localStorage.clear();
        showProductsList();
        container.innerHTML = `<h1 class="title">list cleared</h1>
                                   <a class="link-home" href="index.html">home</a>`;
    };

    const showProductsList = () => {
        let title = document.createElement('h1');
        title.classList.add('title');
        !shop.length ? title.innerText = 'all sold out.': title.innerText = 'products list';

        let buttons = document.createElement('div');
        buttons.classList.add('buttons');

        let clearBtn = document.createElement('button');
        clearBtn.classList.add('clear-btn');
        clearBtn.innerText = 'clear';
        clearBtn.onclick = () => clear();

        let link = document.createElement('a');
        link.classList.add('link-home');
        link.innerText = 'home';
        link.href = 'index.html';

        buttons.append(clearBtn, link);

        let productsCards = document.createElement('div');
        productsCards.classList.add('products-cards');

        for (const product of shop) {
            let productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `<h2 class="card-title">${product.name}</h2>
                                         <div class="card-number">${product.number} <span>pcs</span></div>
                                         <div class="card-price">${product.number * product.price} <span>uah</span></div>
                                         <div class="card-img"><img src="${product.image}" alt="some product"></div>`;
            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('del-btn');
            deleteBtn.innerText = 'delete';
            deleteBtn.onclick = () => {deleteCard(product.id, deleteBtn)};

            productCard.appendChild(deleteBtn);
            productsCards.appendChild(productCard);
        }
        container.append(title, buttons, productsCards);
    };

    showProductsList();