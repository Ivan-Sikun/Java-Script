const number = prompt("Введіть номер сторінки")
let list = []
for(let i = 0; i < number; i++){
    list.push(i)
    i % 2 === 1 ? document.write(`<span style="background-color: red;">${i}</span>`):document.write(`<p>${i}</p>`)
}