// - Створити клас або функцію конструктор, за допомоги якої можна створювати обєкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх обєктів

//         {
//             id: 1,
//             name: 'Leanne Graham',
//             username: 'Bret',
//             email: 'Sincere@april.biz',
//             address: {
//                 street: 'Kulas Light',
//                 suite: 'Apt. 556',
//                 city: 'Gwenborough',
//                 zipcode: '92998-3874',
//                 geo: {
//                     lat: '-37.3159',
//                     lng: '81.1496'
//                 }
//             },
//             phone: '1-770-736-8031 x56442',
//             website: 'hildegard.org',
//             company: {
//                 name: 'Romaguera-Crona',
//                 catchPhrase: 'Multi-layered client-server neural-net',
//                 bs: 'harness real-time e-markets'
//             }
//         }

    class User {
        constructor(
            id,
            name,
            username,
            email,
            phone,
            website,
            street,
            suite,
            city,
            zipcode,
            lat,
            lng,
            companyName,
            companyCatchPhrase,
            companyBs,
        )
        {
            this.id = id;
            this.name = name;
            this.username = username;
            this.email = email;
            this.phone = phone;
            this.website = website;
            this.address = {};
            this.address.street = street;
            this.address.suite = suite;
            this.address.city = city;
            this.address.zipcode = zipcode;
            this.address.geo = {};
            this.address.geo.lat = lat;
            this.address.geo.lng = lng;
            this.company = {};
            this.company.name = companyName;
            this.company.catchPhrase = companyCatchPhrase;
            this.company.bs = companyBs;
        }
    }

    const someUser = new User(
        1,
        'Leanne Graham',
        'Bret',
        'Sincere@april.biz',
        '1-770-736-8031 x56442',
        'hildegard.org',
        'Kulas Light',
        'Apt. 556',
        'Gwenborough',
        '92998-3874',
        '-37.3159',
        '81.1496',
        'Romaguera-Crona',
        'Multi-layered client-server neural-net',
        'harness real-time e-markets'
        );

    console.log(someUser);

// -Створити функцію конструктор / клас  який описує обєкт тегу
//      Поля :
//      -назва тегу ()
//      - опис його дій
//      - масив з атрибутами (2-3 атрибути максимум)
//      Кожен атрибут описати як окремий який буде містити
//      -назву атрибуту
//      -опис дії атрибуту
//      інформацію брати з htmlBook.ru
//
//      Таким чином описати теги
//      -a
//      -div
//      -h1
//      -span
//      -input
//      -form
//      -option
//      -select
// Приклад результуючого обєкту

//     {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//              {
//                  titleOfAttr: 'accessKey',
//                  actionOfAttr: 'Переход к области с помощью комбинации клавиш'
//              },
//              {/*some props and values*/},
//              {/*...*/},
//              {/*...*/},
//         ]
//     }

    const htmlTags = [
        {id: 1, name: '<a>', action: 'створює посилання на іншу сторіку'},
        {id: 2, name: '<div>', action: 'призначений для виділення фрагмента документа з метою зміни виду вмісту...'},
        {id: 3, name: '<h1>', action: 'визначає найбільш важливі заголовки'},
        {id: 4, name: '<span>', action: 'виділяє частину інформації всередині інших тегів та встановл.є для них свій стиль'},
        {id: 5, name: '<input>', action: 'створює текстові поля, різні кнопки, перемикачі і прапорці...'},
        {id: 6, name: '<form>', action: 'призначений для обміну даними між користувачем та сервером'},
        {id: 7, name: '<option>', action: 'призначений для створення пункту списку для тега select чи datalist'},
        {id: 8, name: '<select>', action: 'створює елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором'},
    ];
    const htmlAttributes = [
        {tagId: 1, id: 1, name: 'href', action: 'задає адресу документа, на яку слід перейти'},
        {tagId: 1, id: 2, name: 'type', action: 'вказує MIME-тип документа, на який веде посилання'},
        {tagId: 2, id: 3, name: 'id', action: 'задає унікальний ідентифікатор для елемента'},
        {tagId: 2, id: 4, name: 'class', action: 'визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів'},
        {tagId: 3, id: 5, name: 'title', action: 'вказує додаткову текстову підказку'},
        {tagId: 3, id: 6, name: 'hidden', action: 'приховує вміст елемента від перегляду'},
        {tagId: 4, id: 7, name: 'style', action: 'задає вбудований css стиль для елемента'},
        {tagId: 4, id: 8, name: 'class', action: 'визначає один або кілька класів, щоб зв’язати елемент з таблицею стиліву'},
        {tagId: 5, id: 9, name: 'type', action: 'повідомляє браузеру, до якого типу належить елемент форми'},
        {tagId: 5, id: 10, name: 'disabled', action: 'блокує доступ і зміну елемента'},
        {tagId: 5, id: 11, name: 'value', action: 'задає значення елемента'},
        {tagId: 6, id: 12, name: 'name', action: 'вказує унікальне імʼя форми'},
        {tagId: 6, id: 13, name: 'action', action: 'вказує url адресу обробника форми'},
        {tagId: 7, id: 14, name: 'label', action: 'вказує короткий опис для пункту списку'},
        {tagId: 7, id: 15, name: 'selected', action: 'задає пункт списку, який буде обраний за дефолтом'},
        {tagId: 8, id: 16, name: 'required', action: 'обовʼязково для вибору перед відправкою форми'},
        {tagId: 8, id: 17, name: 'autofocus', action: 'множинний вибір'},
        {tagId: 8, id: 18, name: 'multiple', action: 'задає пункт списку, який буде обраний за дефолтом'},
    ];

    class Tag {
        constructor(id, name, action, attributes) {
            this.id = id;
            this.name = name;
            this.action = action;
            this.attributes = attributes;
        }
    }

    const createHtmlBook = (tags, attributes) => {
        const result = [];
        for (let tag of tags) {
            let arr = [];
            for (let attribute of attributes) {
                if (tag.id === attribute.tagId) {
                    arr.push(attribute);
                }
            }
            result.push(new Tag(tag.id,tag.name, tag.action, arr));
        }
        return result;
    };

    const htmlBook = createHtmlBook(htmlTags, htmlAttributes);
    console.log(htmlBook);
