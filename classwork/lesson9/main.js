// - є масив:

    let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

//  Проітерувати його, створиши для кожного елементу масиву <div class='member'>.

    let body = document.body;
    let simpsonsList = document.createElement('div');

    for (let simpson of simpsons) {
        let simpsonItem = document.createElement('div');
        simpsonItem.classList.add('member');
        simpsonItem.innerHTML = `name - ${simpson.name} <br>
                         surname - ${simpson.surname} <br>
                         age - ${simpson.age} <br>
                         description - ${simpson.info} <br>
                         photo - <img src="${simpson.photo}" alt="simpson">`;
        simpsonsList.appendChild(simpsonItem);
    }

    body.appendChild(simpsonsList);

// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//     Для кожної властивості елементу створити окремий блок, та помістити його у div.member

    let simpsonsCards = document.createElement('div');

    for (let simpson of simpsons) {
        let simpsonCard = document.createElement('div');
        simpsonCard.classList.add('member');
        simpsonCard.style.borderColor = '#a7a65a';

        let title = document.createElement('h2');
        title.classList.add('title');
        title.innerText = `${simpson.name} ${simpson.surname}`;

        let age = document.createElement('p');
        age.classList.add('age');
        age.innerText = `${simpson.age} year`;

        let info = document.createElement('p');
        info.classList.add('info');
        info.innerText = simpson.info;

        let img = document.createElement('img');
        img.classList.add('photo');
        img.src = simpson.photo;

        simpsonCard.append(title, age, info, img);
        simpsonsCards.appendChild(simpsonCard);
    }

    body.append(simpsonsCards);

// - є масив:

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 919,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
//    значення окремих властивостей, для властивості modules зробити список з елементами
//    Приклад структири знаходиться у файлі example.png

    let coursesList = document.createElement('div');

    for (let course of coursesArray) {
        let courseItem = document.createElement('div');
        courseItem.classList.add('item');
        courseItem.style.borderColor = '#ef3535';

        let header = document.createElement('header');

        let title = document.createElement('h1');
        title.innerText = course.title;

        header.appendChild(title);

        let section = document.createElement('section');

        let monthDuration = document.createElement('div');
        monthDuration.innerText = `duration: ${course.monthDuration} months`;
        let hourDuration = document.createElement('div');
        hourDuration.innerText = `duration: ${course.hourDuration} hours`;

        section.append(monthDuration, hourDuration);

        let main = document.createElement('main');

        let modulesList = document.createElement('ul');

        for (let module of course.modules) {
            let moduleItem = document.createElement('li');
            moduleItem.innerText = module;
            modulesList.appendChild(moduleItem);
        }

        main.appendChild(modulesList);

        courseItem.append(header, section, main);
        coursesList.appendChild(courseItem);
    }

    body.appendChild(coursesList);
