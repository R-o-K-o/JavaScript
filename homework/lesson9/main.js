// Все робити за допомоги js.
//  - створити блок,

    let div = document.createElement('div');

//  - додати йому класи wrap, collapse, alpha, beta

    div.classList.add('wrap', 'collapse', 'alpha', 'beta');

//  - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

    div.style.background = '#ccc';
    div.style.color = '#8e8e4e';
    div.style.fontSize = '28px';

//  - додати цей блок в body

    let body = document.body;
    body.appendChild(div);

//  - клонувати його повністю, та додати клон в body

    let cloneDiv = div.cloneNode(true);
    body.appendChild(cloneDiv);

// - Є масив: ['Main','Products','About us','Contacts']
//      Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//      Завдання робити через цикли.

    let menuList = ['Main','Products','About us','Contacts'];
    let ul = document.getElementsByClassName('menu')[0];

    for (const menuItem of menuList) {
        let li = document.createElement('li');
        li.innerText = menuItem;
        ul.appendChild(li);
    }

// - Є масив => coursesAndDurationArray <=
//      Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//      Завдання робити через цикли.

     let coursesAndDurationArray = [
         {title: 'JavaScript Complex', monthDuration: 5},
         {title: 'Java Complex', monthDuration: 6},
         {title: 'Python Complex', monthDuration: 6},
         {title: 'QA Complex', monthDuration: 4},
         {title: 'FullStack', monthDuration: 7},
         {title: 'Frontend', monthDuration: 4},
     ];

    let courseWrap = document.createElement('div');

    for (let course of coursesAndDurationArray) {
        let courseDiv = document.createElement('div');
        courseDiv.classList.add('item');
        courseDiv.innerText = `course - ${course.title} duration - ${course.monthDuration} months`;
        courseWrap.appendChild(courseDiv);
    }

    body.appendChild(courseWrap);

// - Є масив
//      За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//      в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//      Завдання робити через цикли.
//
//      let coursesAndDurationArray = [
//          {title: 'JavaScript Complex', monthDuration: 5},
//          {title: 'Java Complex', monthDuration: 6},
//          {title: 'Python Complex', monthDuration: 6},
//          {title: 'QA Complex', monthDuration: 4},
//          {title: 'FullStack', monthDuration: 7},
//          {title: 'Frontend', monthDuration: 4}
//      ];

    let courseList = document.createElement('div');

    for (let course of coursesAndDurationArray) {
        let courseItem = document.createElement('div');
        courseItem.classList.add('item');

        let title = document.createElement('h1');
        title.classList.add('heading');
        title.innerText = course.title;

        let courseDuration = document.createElement('p');
        courseDuration.classList.add('description');
        courseDuration.innerText = `${course.monthDuration} months`;

        courseItem.append(title, courseDuration);
        courseList.appendChild(courseItem);
    }

    body.appendChild(courseList);
