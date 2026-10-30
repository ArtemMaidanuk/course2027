// Через Array.prototype. створити власний foreach


Array.prototype.MyforEach = function (callback) {

    let arr = this
    for (let arrElement of arr) {

        callback(arrElement)
    }
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.MyforEach(number => console.log(number))

// Через Array.prototype. створити власний filter


let users = [
    {
        id: 1,
        name: 'Андрій',
        age: 22,
        city: 'Київ',
        isActive: true
    },
    {
        id: 2,
        name: 'Олег',
        age: 25,
        city: 'Вінниця',
        isActive: false
    },
    {
        id: 3,
        name: 'Максим',
        age: 19,
        city: 'Львів',
        isActive: true
    },
    {
        id: 4,
        name: 'Іван',
        age: 30,
        city: 'Одеса',
        isActive: true
    },
    {
        id: 5,
        name: 'Дмитро',
        age: 27,
        city: 'Харків',
        isActive: false
    }
];

Array.prototype.Myfilter = function (callback) {

    let arr = []
    for (let user of this) {
        if (callback(user)) {
            arr.push(user)
        }
    }
    return arr;
}
let userAge = users.Myfilter(users => users.age > 26)
console.log(userAge);



