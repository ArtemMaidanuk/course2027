// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки
// на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let block = document.getElementById("block");

let price = localStorage.getItem("price");
let lastTime = localStorage.getItem("lastTime");

if (price === null) {
    price = 100
    lastTime = Date.now()

    localStorage.setItem("price", price)
    localStorage.setItem("lastTime", lastTime)
} else {
    price = +price
    lastTime = +lastTime
    let timeNow = Date.now();

    if (timeNow - lastTime >= 10000) {
        price = price + 10

        localStorage.setItem("price", price)

        localStorage.setItem("lastTime", timeNow)
    }
}
block.innerText = price + ' грн';