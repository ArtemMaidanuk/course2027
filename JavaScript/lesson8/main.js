// Створити функцію, яка робить глибоку копію об'єкта.
//
// Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

function cloner(object) {
    if (object === undefined || object === null || Number.isNaN(object)) {
        throw new Error('!!!!!!!!!!!!!!!!!!!!')
    }

    let functionArray = []

    for (let key in object) {
        if (typeof object[key] === 'function') {
            functionArray.push({key: key, value: object[key]});
        }
    }

    let jsonObject = JSON.stringify(object);
    let cloneObject = JSON.parse(jsonObject);

    for (let fun of functionArray) {
        cloneObject[fun.key] = fun.value;
    }
    return cloneObject;
}


const user = {
    id: 1,
    name: 'Artem',

    greeting() {
        console.log('hello');
    }

};

const clone = cloner(user);
console.log(clone.id);
console.log(clone.name);
clone.greeting()
console.log(user === clone);