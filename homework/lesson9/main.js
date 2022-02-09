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

    let items = ['Main','Products','About us','Contacts'];
    let elUl = document.getElementsByClassName('menu')[0];

    for (let item of items) {
        let elLi = document.createElement('li');
        elLi.innerText = item;
        elUl.appendChild(elLi);
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
         {title: 'Frontend', monthDuration: 4}
     ];

    for (let course of coursesAndDurationArray) {
        let div = document.createElement('div');
        div.innerText = `course - ${course.title} duration - ${course.monthDuration} months`;
        body.appendChild(div);
    }

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

    for (let course of coursesAndDurationArray) {
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');

        div.classList.add('item');
        h1.classList.add('heading');
        p.classList.add('description');

        h1.innerText = course.title;
        p.innerText = course.monthDuration;

        div.append(h1, p);
        body.appendChild(div);
    }
