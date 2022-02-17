//  1.
//  Створити карту користувача(User Card):
//  Створити функцію «userCard» яка приймає число(будь-яке число) і повертає об’єкт з методами:

//  User Card методи:

//   -- getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про карту:
//     Об’єкт має містити такі властивості:
//      • balance (по замовчуванням 100)
//      • transactionLimit (по замовчуванню 100. Це ліміт коштів які ви можете взяти з карти)
//      • historyLogs (масив об’єктів який містить інформацію про операції та трансакції данної карти)
//      • key (число в діапазоні[1 => 3] залежить від числа яке ви передали в userCard функції. Кожна карта повинна мати унікальний key)

//   -- putCredits. Ця функція отримує певну кількість грошей і заповнює баланс карти.

//   -- takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти збаланса карти (протилежний за дією від метода putCredits):
//      Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів перевищують кількість коштів,
//      які ви бажаєте взяти. Якщо ні, то слід записати відповідне повідомлення у консолі (скористайтеся console.error)

//   -- setTransactionLimit. Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці.

//   -- transferCredits  Ця функція отримує два аргументи - кількість кредитів (кредитних грошей), які потрібно передати, та карту одержувача
//      (інший об’єкт, створений функцією `userCard` - card1):
//      Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
//      Не забудьте перед перерахуванням перевірити залишок балансу та ліміт транзакцій відправника кредитів (card3).

//      Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
//      change операції і зберігайте history log. History log (Дивитись зображення 1)

//  інформація має зберігатись в об’єктах з такими властивостями:
//      • operationType (стрічка яка описує здійснену операцію)
//      • credits (кількість коштів)
//      • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)

    const random = (num) => (Math.random() * num);

    const addZero = num => num >= 0 && num <= 9 ? '0' + num : num;

    const getDate = () => {
        let date = new Date();
        return [
            addZero(date.getDate()),
            addZero(date.getMonth() + 1),
            addZero(date.getFullYear()),
        ].join('/');
    };

    const getTime = () => {
        let date = new Date();
        return [
            addZero(date.getHours()),
            addZero(date.getMinutes()),
            addZero(date.getSeconds()),
        ].join(':');
    };

    const transaction = (operationType, credits, operationTime) => {
        return {
            operationType,
            credits,
            operationTime,
        };
    };


    const userCard = (num) => {
        let card = {
            key: random(num),
            balance: 100,
            transactionLimit: 100,
            historyLogs: [],
        };
        return {
            getCardOptions: () => card,
            putCredits: (money) => {
                card.balance = money;
                card.historyLogs.push(
                    transaction('put credits', card.balance, `${getDate()} ${getTime()}`)
                );
            },
            takeCredits: (money) => {
                if (card.balance >= money) {
                    card.balance -= money;
                    card.historyLogs.push(
                        transaction('take credits', card.balance, `${getDate()} ${getTime()}`)
                    );
                } else console.error('Exceed limit! Try another amount.');
            },
            setTransactionLimit: (limit) => {
                card.transactionLimit = limit;
                card.historyLogs.push(
                    transaction('take credits', card.balance, `${getDate()} ${getTime()}`)
                );
            },
            transferCredits: (credit, someCard) => {
                someCard.getCardOptions().balance += credit;
                credit += (credit * 0.5) / 100;
                card.balance -= credit;
            },
        };
    };

    let card_1 = userCard(1);
    let card_2 = userCard(2);
    card_1.putCredits(2500);
    card_1.takeCredits(500);
    console.log(card_1.getCardOptions());
    console.log(card_2.getCardOptions());

//  2.
//  Створити UserAccount:
//  Створити класс `UserAccount` (для цього завдання можна використати ES6 класс або звичайну функцію):
//  const user = new UserAccount('Bob');

//  Класс має містити:
//  Властивості акаунту користувача:
//      - name (передати в конструкторі)
//      - cards (Масив карток користувача. Масив не має бути довшим ніж 3)

//  Методи акаунту користувача:
//      - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до cards:
//          user.addCard();
//          Користувач повинен мати <= 3 карти.

//      - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
//          /*
//          * Повертає об’єкт {
//          * key: 1,
//          * balance: 150,
//          * ...other card properties
//          * }
//          */

//  КодПриклад переказу коштів:
//  let user = new UserAccount('Bob');
//  user.addCard()
//  user.addCard()
//  let card1 = user.getCardByKey(1);
//  let card2 = user.getCardByKey(2);
//  card1.putCredits(500);
//  card1.setTransactionLimit(800);
//  card1.transferCredits(300, card2);
//  card2.takeCredits(50);

     class UserAccount {
        constructor(name) {
            this.name = name;
            this.cards = [];
        }

        addCard(num) {
            if (this.cards.length !== 3) {
                this.cards.push(userCard(num).getCardOptions());
                // console.log(this.cards);
            }
        }

        getCardByKey(num) {
            let card = userCard(num);
            card.getCardOptions().key = num;
            return card;
        }
     }


     let user = new UserAccount('Bob');
     user.addCard(1);
     user.addCard(2);


     let card1 = user.getCardByKey(1);
     let card2 = user.getCardByKey(2);
     card1.putCredits(500);
     card1.setTransactionLimit(800);
     card1.transferCredits(300, card2);
     card2.takeCredits(50);

     console.log(card1.getCardOptions());
     console.log(card2.getCardOptions());

