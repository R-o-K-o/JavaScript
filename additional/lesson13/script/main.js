//  - Імітуємо наповнення інтернет магазину товарами :
//  Створити форму з наступними полями :
//    - назва товару
//    - кількість товару
//    - ціна товару
//    - картинка товару (посилання з інтернету)

//  Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
//  створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
//  На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//  До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

    const localKey = 'shop';

    let {productName, number, price, image} = document.forms[0];
    const saveBtn = document.getElementsByTagName('button')[0];

    const save = (product) => {
        let shop = JSON.parse(localStorage.getItem(localKey)) || [];
        shop.push(product);
        localStorage.setItem(localKey, JSON.stringify(shop));
    };

    saveBtn.onclick = (e) => {
        if (productName.value && number.value && price.value && image.value) {
            e.preventDefault();
            let order = {
                id: Math.random(),
                name: productName.value,
                number: +number.value,
                price: +price.value,
                image: image.value,
            };
            save(order);

            productName.value = '';
            number.value = '';
            price.value = '';
            image.value = '';
        }
    };
