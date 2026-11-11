// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let user = [];
//
// for (let i = 1; i <= 100; i++) {
//     user.push({
//         id: i,
//         name: `User - ${i}`,
//     })
//
// }
// let numberPage = 10
// let currentPage = 0
//
// let block = document.getElementById('block')
// let prev = document.getElementById('prev')
// let next = document.getElementById('next')
//
// function User() {
//     block.innerText = ''
//
//     let start = numberPage * currentPage
//     let end = start + numberPage
//     let currentUser = user.slice(start, end)
//
//     for (const current of currentUser) {
//
//         let userBlock = document.createElement('div')
//         let id = document.createElement('p')
//         id.innerText = `ID: ${current.id}`
//         let name = document.createElement('p')
//         name.innerText = `Name: ${current.name}`
//
//         userBlock.append(id, name)
//         block.appendChild(userBlock)
//     }
//
// }
//
// next.onclick = function () {
//     if ((currentPage + 1) * numberPage < user.length) {
//         currentPage = currentPage + 1
//         User()
//     }
// }
// prev.onclick = function () {
//     if (currentPage > 0) {
//         currentPage = currentPage - 1
//         User()
//     }
// }
// User()

let user = [];

for (let i = 1; i <= 100; i++) {
    user.push({
        id: i,
        name: `User - ${i}`,
    })
}
let numberPage = 10;
let currentPage = 0;

let block = document.getElementById("block");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

function User() {
    block.innerText = ''
    let start = numberPage * currentPage;
    let end = start + numberPage;

    let currentUser = user.slice(start, end);

    for (let user of currentUser) {
        let userBlock = document.createElement("div");
        let id = document.createElement("p");
        id.innerText = `ID: ${user.id}`;
        let name = document.createElement("p");
        name.innerText = `Name: ${user.name}`;

        userBlock.append(id, name);
        block.appendChild(userBlock);
    }
}

next.onclick = function () {
    if ((currentPage + 1) * numberPage < user.length) {
        currentPage = currentPage + 1;
        User()
    }
}

prev.onclick = function () {
    if (currentPage > 0) {
        currentPage = currentPage - 1;
        User()
    }
}
User()