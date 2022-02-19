// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

    const classNames = [];

    const traversal = (startElement) => {
        let children = startElement.children;
        for (const child of children) {
            if (child.className) {
                classNames.push(...child.classList);
            }
            traversal(child);
        }
    }
    traversal(document.body);

    console.log(classNames);

    let result = [...new Set(classNames)];
    console.log(result);
