// - Напишіть код, який :
//  a) додає клас з назвою групи, елементу з іd main_header

    let elIdMain_Header = document.getElementById('main_header');
    elIdMain_Header.classList.add('december-2021');

//  b) робить шириниу елементу ul 400px

    let elUl = document.getElementsByTagName('ul')[0];
    elUl.style.width = '400px';

//  c) робить шириниу всіх елементів з класом linkList шириною 50%

    let elemsClassLinkList = document.getElementsByClassName('linkList');

    for (let elem of elemsClassLinkList) {
        elem.style.width = '50%';
    }

//  d) отримує текст який зберігається в елементі з класом listElement2

    let listElement = document.getElementsByClassName('listElement2');
    console.log(listElement[0].innerHTML);

//  e) отримує всі елементи li та змінює ім колір фону на сірий

    let elemsLi = document.getElementsByTagName('li');

    for (let elemLi of elemsLi) {
        elemLi.style.background = '#ccc';
    }

//  f) отримує всі елементи 'a' та додає їм клас anchor

    let elemsA = document.getElementsByTagName('a');

    for (let elemA of elemsA) {
        elemA.classList.add('anchor');
    }

//  g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

    for (let elemA of elemsA) {
        if (elemA.innerText === 'link3') {
            elemA.style.fontSize = '40px';
        }
    }

//  h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

    for (let elemA of elemsA) {
        let txt = elemA.innerText;
        elemA.classList.add(`element_${txt}`);
    }

//  i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

    let backColor = prompt('введіть колір', 'color');
    let subHeaders = document.getElementsByClassName('sub-header');

    for (let subHeader of subHeaders) {
        subHeader.style.background = backColor;
    }

//  j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

    for (let subHeader of subHeaders) {
        if (subHeader.innerText === 'content 2 segment') {
            subHeader.style.color = prompt('введіть колір', 'color');
        }
    }

//  k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

    let elClassContent_1 = document.getElementsByClassName('content_1');
    elClassContent_1[0].innerText = prompt('введіть текст', 'enter some text');

//  l) отримати елементи p та змінити їм padding на 20px

    let paragraphs = document.getElementsByTagName('p');

    for (let paragraph of paragraphs) {
        paragraph.style.padding = '20px';
    }

//  m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

    let elClassText2 = document.getElementsByClassName('text2');
    elClassText2[0].innerText = 'december-2021';
