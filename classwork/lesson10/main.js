// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться
//     на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

    let body = document.body;

    // FIRST FORM
    let firstForm = document.createElement('form');
    firstForm.setAttribute('id', 'firstForm');

    let input1_OfFirstForm = document.createElement('input');
    input1_OfFirstForm.setAttribute('name', 'input1_OfFirstForm');
    input1_OfFirstForm.setAttribute('placeholder', 'введіть дані');

    let input2_OfFirstForm = document.createElement('input');
    input2_OfFirstForm.setAttribute('name', 'input2_OfFirstForm');
    input2_OfFirstForm.setAttribute('placeholder', 'введіть дані');

    firstForm.append(input1_OfFirstForm, input2_OfFirstForm);

    // SECOND FORM
    let secondForm = document.createElement('form');
    secondForm.setAttribute('id', 'secondForm');

    let input1_OfSecondForm = document.createElement('input');
    input1_OfSecondForm.setAttribute('name', 'input1_OfSecondForm');
    input1_OfSecondForm.setAttribute('placeholder', 'введіть дані');

    let input2_OfSecondForm = document.createElement('input');
    input2_OfSecondForm.setAttribute('name', 'input2_OfSecondForm');
    input2_OfSecondForm.setAttribute('placeholder', 'введіть дані');

    secondForm.append(input1_OfSecondForm, input2_OfSecondForm);

    let formsBtn = document.createElement('button');
    formsBtn.innerText = 'відправити';

    formsBtn.onclick = function () {
        console.log(document.forms.firstForm.input1_OfFirstForm.value);
        document.forms.firstForm.input1_OfFirstForm.value = ''
        console.log(document.forms.firstForm.input2_OfFirstForm.value);
        document.forms.firstForm.input2_OfFirstForm.value = '';

        console.log(document.forms.secondForm.input1_OfSecondForm.value);
        document.forms.secondForm.input1_OfSecondForm.value = '';
        console.log(document.forms.secondForm.input2_OfSecondForm.value);
        document.forms.secondForm.input2_OfSecondForm.value = '';
    };

    body.append(firstForm, secondForm, formsBtn);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//     (Додаткова частина для завдання)

    let inputsBlock = document.createElement('div');
    inputsBlock.classList.add('inputs-block');

    let input1 = document.createElement('input');
    input1.setAttribute('placeholder', 'введіть к-сть рядків');

    let input2 = document.createElement('input');
    input2.setAttribute('placeholder', 'введіть к-сть ячеєк');

    let input3 = document.createElement('input'); // td content
    input3.setAttribute('placeholder', 'введіть дані');

    let tableButton = document.createElement('button');
    tableButton.innerText = 'створити таблицю';

    inputsBlock.append(input1, input2, input3, tableButton);
    body.append(inputsBlock);

    tableButton.onclick = function () {
        let trNum = +input1.value;
        let tdNum = +input2.value;
        let tdContent = input3.value;

        function createTable(tr, td, content) {
            let table = document.createElement('table');
            for (let i = 0; i < trNum; i++) {
                let tr = document.createElement('tr');
                for (let k = 0; k < tdNum; k++) {
                    let td = document.createElement('td');
                    td.innerText = tdContent;
                    tr.appendChild(td);
                    table.appendChild(tr);
                }
            }
            body.appendChild(table);
        }
        createTable(trNum, tdNum, tdContent);

        input1.value = '';
        input2.value = '';
        input3.value = '';
    };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//     кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

    const swearWords = ['дурень', 'поц', 'козел', 'телепень', 'мудак', 'падла'];

    let block1 = document.createElement('div');
    block1.classList.add('block');

    let inputTypeTxt = document.createElement('input');
    inputTypeTxt.setAttribute('placeholder', 'дайте тексту...');

    let checkWordsBtn = document.createElement('button');
    checkWordsBtn.innerText = 'провірка';

    block1.append(inputTypeTxt, checkWordsBtn);
    body.appendChild(block1);

    checkWordsBtn.onclick = function () {
        let value = inputTypeTxt.value;

        for (let word of swearWords) {
            if (word === value) {
                alert('ей ти, не хороший человек.. хорош п.....и !!!');
                inputTypeTxt.value = '';
                // break
                return;
            }
        }
        if (value) {
            alert('які гарні слова ...');
            inputTypeTxt.value = '';
        } else {
            alert('немає слів..');
        }
    };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

    let block2 = document.createElement('div');
    block2.classList.add('block');

    let inputTypeText = document.createElement('input');
    inputTypeText.setAttribute('placeholder', 'дайте тексту...');

    let checkWordsButton = document.createElement('button');
    checkWordsButton.innerText = 'провірка';

    block2.append(inputTypeText, checkWordsButton);
    body.appendChild(block2);

    checkWordsButton.onclick = function () {
      let value = inputTypeText.value;

      for (let word of swearWords) {
          if (value.includes(word)) {
              alert('вибирай слова чоловіче... !!!');
              inputTypeText.value = '';
              return;
          }
      }
        if (value) {
            alert('які гарні слова ...');
            inputTypeText.value = '';
        } else {
            alert('немає слів...');
        }
    };


