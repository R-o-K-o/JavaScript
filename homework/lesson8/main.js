// - Напишіть код,  котрий :
//   -- отримує текст з параграфа з id "content"

    let pIdContent = document.getElementById('content');
    console.log(pIdContent.innerText);

//   -- отримує текст з блоку з id "rules"

    let divIdRules = document.getElementById('rules');
    console.log(divIdRules.innerText);

//   -- замініть текст параграфа з id 'content' на будь-який інший

    pIdContent.innerText = 'JavaScript';

//   -- замініть текст блока з id 'rules' на будь-який інший

    divIdRules.innerText = 'React';

//   -- змініть кожному елементу колір фону на червоний

    let bodyChildren = document.body.children;

    for (let bodyChild of bodyChildren) {
        bodyChild.style.background = '#ba3b3b';
    }

//   -- змініть кожному елементу колір тексту на синій

    for (let bodyChild of bodyChildren) {
        bodyChild.style.color = '#24304e';
    }

//   -- отримати весь список класів елемента з id=rules і вивести їх в console.log

    let allClassesElIdRules = divIdRules.classList;
    console.log(allClassesElIdRules);

//   -- поміняти колір тексту у всіх елементів fc_rules на червоний

    let elemsClassFC_Rules = document.getElementsByClassName('fc_rules');

    for (let elem of elemsClassFC_Rules) {
        elem.style.color = '#5e1e1e';
    }
