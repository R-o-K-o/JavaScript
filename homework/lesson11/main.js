// -створити форму з інпутами для name та age.
//     При відправці форми записати обєкт в localstorage

    let userName = document.forms.userForm.name;
    let userAge = document.forms.userForm.age;
    let userButton = document.getElementsByClassName('user-button')[0];

    const saveUser = (name, age) => {
        const user = {name, age};
        localStorage.setItem('user', JSON.stringify(user));
    };

    userButton.onclick = () => saveUser(userName.value, userAge.value);

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми обєкти зберігаються в масиві в локальному сховищі.

    let modelCar = document.forms.carForm.modelCar;
    let typeCar = document.forms.carForm.typeCar;
    let valueCar = document.forms.carForm.valueCar;
    let carButton = document.getElementsByClassName('car-button')[0];

    const saveCar = (model, type, value) => {
        let cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push({model, type, value});
        localStorage.setItem('cars', JSON.stringify(cars));
    };

    carButton.onclick = () => saveCar(modelCar.value, typeCar.value, valueCar.value);
